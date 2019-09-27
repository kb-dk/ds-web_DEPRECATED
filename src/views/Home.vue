<template>
  <div>
    <Header />
    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4" />
        <div class="col-md-8" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
