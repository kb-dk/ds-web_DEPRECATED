<template>
  <article>
    <figure v-if="imageResult" class="rdl-figure article-center">
      <div class="position-relative">
        <img :src="imageResult.response.docs[0].image_preview" alt="">
        <span class="rdl-credits">Foto: Jens Jensen</span>
      </div>
    </figure>
    <p>
      Dato: {{ imageResult.response.docs[0].datetime }}
    </p>
    <p>
      keywords: {{ imageResult.response.docs[0].keyword[0] }}
    </p>
  </article>
</template>

<script>
export default {
  props: {
    imageResult: { type: Object, default: () => {} }
  }
}
</script>
