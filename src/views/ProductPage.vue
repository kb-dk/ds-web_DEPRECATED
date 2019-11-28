<template>
  <div>
    <<<<<<< HEAD
    <Header />
    <main>
      <div class="rdl-bread-crumb-wrapper position-relative  show-for-large">
        =======
        <main>
          <div class="rdl-bread-crumb-wrapper position-relative show-for-large">
            >>>>>>> develop
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
                <<<<<<< HEAD
                <div class="cell small-12" />
                =======
                <div class="cell large-12" />
                >>>>>>> develop
              </div>
            </div>
          </div>

          <<<<<<< HEAD
          <div class="rdl-grid-container-wrapper  position-relative">
            =======
            <div class="rdl-grid-container-wrapper position-relative">
              >>>>>>> develop
              <div class="inner-content grid-container">
                <div class="grid-x grid-margin-x grid-padding-y">
                  <div class="cell show-for-large large-3 aside">
                    <Aside />
                  </div>
                  <div class="cell small-12 large-12">
                    <ProductHeading :image-result="imageResult" />
                    <div class="grid-x grid-margin-x grid-padding-y">
                      <div class="small-12 medium-12 cell">
                        <ProductArticle :image-result="imageResult" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div></main>
        <Footer />
      </div>
</div></main></template>

<script>
import Aside from '@/components/Aside.vue'
import ProductHeading from '@/components/ProductHeading.vue'
import ProductArticle from '@/components/ProductArticle.vue'
import Footer from '@/components/Footer.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductPage',
  components: {
    Aside,
    ProductHeading,
    ProductArticle,
    Footer
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
