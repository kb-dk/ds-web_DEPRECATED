<template>
  <form
    class="form-wrapper search-area"
    @submit.prevent="submitSearch">
    <label for="rdl-search-form" class="hidden">{{ $t('search.searchOn') | uppercase }} kb.dk</label>
    <input
      id="rdl-search-form"
      v-model="searchQuery"
      type="text"
      placeholder="Søg på KB.dk"
      class="search-input"
      aria-describedby="rdl-search-form">

    <button alt="search">
      <i class="icon zmdi-search icon-medium" />
    </button>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      searchQuery: ''
    }
  },
  computed: {
    ...mapState({
      searchResult: state => state.search.all.searchResult
    })
  },
  methods: {
    ...mapActions('search', ['doSearch']),
    submitSearch: function () {
      this.doSearch(this.searchQuery)
    }
    // alert(this.$options.filters.capitalize(this.$t('search.youSearchedFor'), { onlyFirstLetter: true }) + ': ' + this.searchQuery)
  }
}
</script>
