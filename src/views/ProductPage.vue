<template>
  <div>
    <Header />
    <a href="#" @click="$router.go(-1)">&lt; Tilbage til søgningen</a>

    <div class="rdl-page-image position-relative">
      <div class="inner-content grid-container">
        <div class="grid-x grid-margin-x grid-padding-y">
          <div class="cell small-12">
            <figure v-if="imageResult" class="rdl-figure margin-bottom page-image">
              <img :src="imageResult.response.docs[0].image_full" alt="">
              <span class="rdl-credits">Foto: Jens Jensen</span>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductPage',
  components: {
    Header
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
