<template>
  <div class="container">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-4" />
      <div class="col-md-8">
        {{ searchResult }}
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Results',
  computed: {
    ...mapState({
      searchResult: state => state.search.all.searchResult
    })
  }
}
</script>
