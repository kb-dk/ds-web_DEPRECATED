<template>
  <div>
    <Header />
    <div class="rdl-login">
      <div class="inner-content grid-container full">
        <div class="grid-y">
          <div class="cell grid-container top-section">
            <div class="grid-x grid-padding-x">
              <div class="cell">
                <header>
                  <div class="inner-content grid-container">
                    <div class="grid-x">
                      <div class="medium-6 cell hide-for-small-only">
                        <h2>log ind</h2>
                      </div>
                      <div class="small-12 medium-6 cell">
                        <div class="logo-mobile">
                          &nbsp;
                        </div>
                      </div>
                      <div class="small-12 cell show-for-small-only">
                        <h2>log ind</h2>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
              <div class="cell medium-12">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nostrum nulla, inc idu nt eos aliquid numquam nobis
                  quasi eius nisi aliquam! Dolor voluptatem necessitatibus nihil
                  ex ratione dicta veritatis porro molestiae.
                </p>
              </div>
              <div class="cell small-12">
                <div class="rdl-float-label-input   float-label">
                  <div class="wrapper">
                    <label for="email">Indtast e-mail</label>
                    <input
                      v-model="email"
                      name="email"
                      type="text"
                      placeholder="Indtast e-mail"
                      class=""
                      aria-describedby="">
                    <button class="rdl-button " />
                  </div>
                  <span class="form-error" />
                </div>
              </div>
              <div class="cell small-12">
                <div class="rdl-float-label-input   float-label">
                  <div class="wrapper">
                    <label for="password">Indtast adgangskode</label>
                    <input
                      v-model="password"
                      name="password"
                      type="text"
                      placeholder="Indtast adgangskode"
                      class=""
                      aria-describedby="">
                    <button class="rdl-button " />
                  </div>
                  <span class="form-error" />
                  <span class="instruction">Glemt adgangskode? Få tilsendt en ny her</span>
                </div>
              </div>
              <div class="cell small-12 medium-6">
                <div class="box flex-container">
                  <button class="rdl-button hollow" @click="register">
                    Opret dig som låner
                  </button>
                </div>
              </div>
              <div class="cell small-12 medium-6">
                <div class="box flex-container">
                  <button class="rdl-button" @click="login">
                    Log ind nu
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="cell grid-container theme-color bottom-section">
            <div class="grid-x grid-padding-x">
              <div class="cell">
                <header>
                  <div class="inner-content grid-container">
                    <div class="grid-x">
                      <div class="cell">
                        <h3>Eller login med</h3>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
              <div class="cell small-12 medium-6">
                <a href="#">
                  <div class="box flex-container grid-y change-color">
                    <div class="image-container">
                      <img src="../assets/images/wayf.svg">
                    </div>
                    <div>Studerende eller ansatte ved:</div>
                    <ul>
                      <li>Aarhus Universitet</li>
                      <li>Københavns Universitet</li>
                      <li>Roskilde Universitet</li>
                      <li>Aarhus Universitetshospital</li>
                      <li>Copenhagen University Hospital</li>
                    </ul>
                  </div>
                </a>
              </div>
              <div class="cell small-12 medium-6">
                <a href="#">
                  <div class="box flex-container grid-y change-color">
                    <div class="image-container">
                      <img src="../assets/images/nemid.png">
                    </div>
                    <div />
                    <ul>
                      <li>Private borgere</li>
                      <li>Ansat eller studerende ved andre universiteter</li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="links-container grid-container full">
        <a href="#">Hjælp</a>
        <a href="#">Cookie- og privatlivspolitik</a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Login',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  computed: {
    isAuthenticated: function () {
      return this.$store.getters.isAuthenticated()
    }
  },
  methods: {
    login () {
      const { email, password } = this
      this.$store.dispatch('login', { email, password })
    },
    register () {
      const { email, password } = this
      this.$store.dispatch('register', { email, password })
    }
  }
}
</script>
