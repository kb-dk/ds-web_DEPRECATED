<template>
  <div v-if="relatedImages" class="position-relative">
    <h2>Relaterede billeder</h2>
    <span v-for="(img, index) in relatedImages" :key="index">
      <img :src="img" alt="">

    </span>
  </div>
</template>

<script>
import { relatedItemsService } from '../services/related-items-service'

export default {
  // Maybe we will need this for the related image call
  props: {
    imageResult: { type: Object, default: () => {} }
  },

  data () {
    return {
      relatedImages: []
    }
  },

  mounted: function () {
    this.fetchRelatedImages()
  },

  methods: {
    getImageUrl: function (image) {
      return ''
    },

    fetchRelatedImages: function () {
      const dhash = this.imageResult.response.docs[0].dhash
      let imgArr = []
      relatedItemsService
        .getRelatedImages('dhash:' + dhash)
        // .getRelatedImages('dhash:Simple30_25599')
        .then(relatedImgs => {
          relatedImgs.response.docs.forEach(function (val) {
            imgArr.push(val.image_preview[0])
          })
        })
      this.relatedImages = imgArr
    }
  }
}
</script>
