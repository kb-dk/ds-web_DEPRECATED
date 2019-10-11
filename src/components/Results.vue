<template>
  <div class="container-fluid">
    <div v-if="searchResult" class="row results">
      <div class="col-4">
        <vue-json-pretty
          :path="'res'"
          :data="searchResult"
          :highlight-mouseover-node="true" />
      </div>
      <div class="col-8">
        <div class="card-columns">
          <div v-for="result in searchResult.response.docs"
               :key="result.id"
               class="card mb-4">
            <img :src="getImage()" class="card-image-top img-fluid">
          </div>
        </div>
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
  data () {
    return {
      selectedImage: ''
    }
  },
  computed: {
    ...mapState({
      searchResult: state => state.search.all.searchResult
    })
  },
  methods: {
    getImage: function () {
      return 'https://picsum.photos/600/' + Math.floor((Math.random() * 300) + 100)
    }
  }
}
</script>
