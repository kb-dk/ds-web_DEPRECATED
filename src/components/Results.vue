<template>
  <div class="container" style="margin-top: 20px">
    <div v-if="searchResult" class="row">
      <div class="col-4">
        <vue-json-pretty
          :path="'res'"
          :data="searchResult"
          :highlight-mouseover-node="true" />
      </div>
      <div class="col-8">
        <div class="card-columns">
          <div class="card" v-for="(result, index) in 20" :key="index">
            <img :src="getImage()" class="card-image-top">
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
      return 'https://picsum.photos/230/' + Math.floor((Math.random() * 100) + 50)
    }
  }
}
</script>
