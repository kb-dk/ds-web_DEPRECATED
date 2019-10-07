<template>
  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-4" />
      <div class="col-md-8">
        <vue-json-pretty
          :path="'res'"
          :data="searchResult" />
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import VueJsonPretty from 'vue-json-pretty'

export default {
  name: 'Results',
  components: {
    VueJsonPretty
  },
  computed: {
    ...mapState({
      searchResult: state => state.search.all.searchResult
    })
  }
}
</script>
