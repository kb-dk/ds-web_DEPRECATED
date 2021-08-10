<template>
  <div>
    <Header />
    <Results />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Results from '@/components/Results.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Results,
    Footer
  }
}
</script>
