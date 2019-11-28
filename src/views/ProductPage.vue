<template>
  <div>
    <Header />
    <main>
      <div class="rdl-bread-crumb-wrapper position-relative  show-for-large">
        <div class="inner-content grid-container">
          <div class="grid-x grid-margin-x">
            <div class="hide-for-small-only cell small-12">
              <div class="bread-crumb">
                <i class="icon zmdi-home icon-xsmall" />
                <a href="/">Forside</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="divider theme-color top-left" />

      <div class="rdl-top-container position-relative">
        <div class="inner-content">
          <div class="grid-x">
            <div class="cell small-12" />
          </div>
        </div>
      </div>

      <div class="rdl-grid-container-wrapper  position-relative">
        <div class="inner-content grid-container">
          <div class="grid-x grid-margin-x grid-padding-y">
            <div class="cell show-for-large large-3 aside">
              <Aside />
            </div>
            <div class="cell small-12 large-9 large-offset-3">
              <div class="grid-x grid-margin-x grid-padding-y">
                <div class="small-12 medium-8 cell">
                  <ProductHeading />
                </div>
                <div class="small-12 medium-4 cell right-col" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
import ProductHeading from '@/components/ProductHeading.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductPage',
  components: {
    Header,
    Aside,
    ProductHeading
  },
  computed: {
    ...mapState({
      imageResult: state => state.search.all.imageResult
    })
  },
  mounted: function () {
    this.lookupImage()
  },
  methods: {
    ...mapActions('search', ['doImageLookup']),
    lookupImage: function () {
      this.doImageLookup(this.$route.params.id)
    }
    // alert(this.$options.filters.capitalize(this.$t('search.youSearchedFor'), { onlyFirstLetter: true }) + ': ' + this.searchQuery)
  }
}
</script>
