<template>
  <main>
    <div class="divider theme-color top-left" />
    <div class="rdl-grid-container-wrapper position-relative" v-if="searchResult">
      <div class="inner-content grid-container">
        <div class="grid-x grid-margin-x grid-padding-y">
          <div class="cell small-12">
            <h2 class="h1">
              {{ searchResult.response.docs.length }} resultater på &#039;{{ searchResult.responseHeader.params.q }}&#039;
            </h2>

            <div class="rdl-filter-btn-group position-relative">
              <div class="grid-x grid-margin-x">
                <div class="small-12 cell">
                  <a href="#filter=access"
                     class="filter-btn filter-btn">{{ $t('filters.access') | capitalize({ onlyFirstLetter: true }) }}</a>
                  <a href="#filter=year"
                     class="filter-btn filter-btn">{{ $t('filters.year') | capitalize({ onlyFirstLetter: true }) }}</a>
                  <a href="#filter=locality"
                     class="filter-btn filter-btn">{{ $t('filters.locality') | capitalize({ onlyFirstLetter: true }) }}</a>
                  <div class="show
-more show-for-small-only">
                    <span class="more-text">Vis flere filtre</span>
                    <span class="less-text">Vis færre filtre</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              <router-link :to="`/view/${result.id}`">
                <img :src="getImage()" class="card-image-top img-fluid">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
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
  },
  methods: {
    getImage: function () {
      return 'https://picsum.photos/500/' + Math.floor((Math.random() * 300) + 100)
    }
  }
}
</script>
