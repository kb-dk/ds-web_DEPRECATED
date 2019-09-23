<template>
  <div>
    Search
    {{ searchResult }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      searchTerm: ''
    }
  },
  computed: {
    ...mapState({
      searchResult: state => state.search.all.searchResult
    })
  },
  mounted () {
    this.searchTerm = 'test'
    this.doSearch(this)
  },
  methods: {
    ...mapActions('search', ['doSearch'])
  }
}
</script>
