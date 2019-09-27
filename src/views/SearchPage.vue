<template>
  <div>
    <h1>Search</h1>
    <b-form-input v-model="text" placeholder="Search" />
    <div class="mt-2">
      Value: {{ searchTerm }}
    </div>
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
    // this.doSearch(this)
  },
  methods: {
    ...mapActions('search', ['doSearch'])
  }
}
</script>
