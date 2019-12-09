<template>
  <main>
    <div class="divider theme-color top-left" />
    <div v-if="searchResult" class="rdl-grid-container-wrapper position-relative">
      <div class="inner-content grid-container">
        <div class="grid-x grid-margin-x grid-padding-y">
          <div class="cell small-8">
            <h2 class="h1">
              {{ searchResult.response.docs.length }} resultater på &#039;{{ searchResult.responseHeader.params.q }}&#039;
            </h2>

            <div v-if="showType === 'gallery'" class="rdl-filter-btn-group position-relative">
              <div class="grid-x grid-margin-x">
                <div class="small-12 cell">
                  <a href="#filter=access"
                     class="filter-btn filter-btn">{{ $t('filters.access') | capitalize({ onlyFirstLetter: true }) }}</a>
                  <a href="#filter=year"
                     class="filter-btn filter-btn">{{ $t('filters.year') | capitalize({ onlyFirstLetter: true }) }}</a>
                  <a href="#filter=locality"
                     class="filter-btn filter-btn">{{ $t('filters.locality') | capitalize({ onlyFirstLetter: true }) }}</a>
                  <a href="#filter=online"
                     class="filter-btn filter-btn">{{ $t('filters.online') | capitalize({ onlyFirstLetter: true }) }}</a>
                  <div class="show
-more show-for-small-only">
                    <span class="more-text">Vis flere filtre</span>
                    <span class="less-text">Vis færre filtre</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cell small-4">
            <select @change="onChange($event)">
              <option value="gallery">
                {{ $t('viewOptions.gallery') | capitalize({ onlyFirstLetter: true }) }}
              </option>
              <option value="list">
                {{ $t('viewOptions.list') | capitalize({ onlyFirstLetter: true }) }}
              </option>
            </select>

            <select>
              <option value="">
                {{ $t('viewOptions.sortBy') | capitalize({ onlyFirstLetter: true }) }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div v-if="searchResult" class="inner-content grid-container">
      <div v-if="showType === 'list'" class="grid-x grid-margin-x grid-padding-y">
        <div class="cell small-12 medium-4">
          <div class="callout secondary">
            <h4>Filtrering</h4>
            <p>Test</p>
          </div>
        </div>
        <div class="cell small-12 medium-8">
          <CardColumns />
        </div>
      </div>
      <div v-else-if="showType === 'gallery'" class="grid-x grid-margin-x grid-padding-y">
        <div class="cell small-12">
          <CardColumns />
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import { mapState } from 'vuex'
import CardColumns from '@/components/CardColumns.vue'

export default {
  name: 'Results',
  components: {
    CardColumns
  },
  data () {
    return {
      showType: 'gallery'
    }
  },
  computed: {
    ...mapState({
      searchResult: state => state.search.all.searchResult
    })
  },
  methods: {
    onChange (event) {
      this.showType = event.target.value
    }
  }
}
</script>
