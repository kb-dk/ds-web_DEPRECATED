<template>
  <div>
    <Header />
    <Results />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Results from '@/components/Results.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Results
  }
}
</script>
