<template>
  <div class="grid-x grid-margin-x grid-padding-y">
    <div class="small-12 medium-8 cell">
      <div class="rdl-page-image position-relative">
        <div class="inner-content grid-container">
          <div class="grid-x grid-margin-x grid-padding-y">
            <div class="cell small-12">
              <figure v-if="imageResult" class="rdl-figure margin-bottom page-image">
                <img :src="imageResult.response.docs[0].image_preview" alt="">
                <span class="rdl-credits">Foto: Jens Jensen</span>
              </figure>
              <p>
                Dato: {{ imageResult.response.docs[0].datetime }}
              </p>
              <p>
                keywords: {{ imageResult.response.docs[0].keyword[0] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="small-12 medium-4 cell right-col" />
  </div>
</template>

<script>
export default {
  props: {
    imageResult: { type: Object, default: () => {} }
  }
}
</script>
