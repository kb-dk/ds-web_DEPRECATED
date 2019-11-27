#!/usr/bin/env groovy


openshift.withCluster() { // Use "default" cluster or fallback to OpenShift cluster detection

    echo "Hello from the project running Jenkins: ${openshift.project()}"

        String projectName = encodeName("${JOB_NAME}")
        echo "name=${projectName}"

        try {
            node('kb-jenkins-agent-nodejs-10') {
                //Do not use concurrent builds
                properties([disableConcurrentBuilds()])

                stage('checkout') {
                    checkout scm
                }

                stage('Download npm packages') {
                    sh "npm install"
                }
                
                stage('Build packages') {
                    sh "npm run build"
                }

                stage('Run tests') {
                    sh "npm run test"
                }
                
                stage('Create test project') {
                    recreateProject(projectName)
    
                    openshift.withProject(projectName) {
                        stage("Prepare application image") {
                            sh "mkdir ocp-app"
                            sh "cp -r httpd-cfg ocp-app/."
                            sh "cp -r dist/* ocp-app/."                           
                        }
                       
                        stage("Create build and deploy application") { 
                            openshift.newBuild("--strategy source", "--binary", "-i httpd:2.4", "--name template")
                            openshift.startBuild("template", "--from-dir=ocp-app", "--follow")
                            openshift.newApp("template:latest")
                            openshift.create("route", "edge", "--service=template")
                        }
                   }
                
                }
            }
        } catch (e) {
            currentBuild.result = 'FAILURE'
            throw e
        } finally {
            configFileProvider([configFile(fileId: "notifier", variable: 'notifier')]) {  
                def notifier = load notifier             
                notifier.notifyInCaseOfFailureOrImprovement(true, "#playground")
            } 
        }
}


private void recreateProject(String projectName) {
    echo "Delete the project ${projectName}, ignore errors if the project does not exist"
    try {
        openshift.selector("project/${projectName}").delete()

        openshift.selector("project/${projectName}").watch {
            echo "Waiting for the project ${projectName} to be deleted"
            return it.count() == 0
        }

    } catch (e) {

    }
//
//    //Wait for the project to be gone
//    sh "until ! oc get project ${projectName}; do date;sleep 2; done; exit 0"

    echo "Create the project ${projectName}"
    openshift.newProject(projectName)
}

/**
 * Encode the jobname as a valid openshift project name
 * @param jobName the name of the job
 * @return the jobname as a valid openshift project name
 */
private static String encodeName(groovy.lang.GString jobName) {
    def name = jobName
            .replaceAll("\\s", "-")
            .replaceAll("_", "-")
            .replace("/", '-')
            .replaceAll("^openshift-", "")
            .toLowerCase()
    return name
}

