<template>
  <div>
    Search
    {{ data }}
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
      data: state => state.search.all.data,
      loading: state => state.search.loading
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
