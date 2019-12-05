<template>
  <article>
    <figure v-if="imageResult" class="rdl-figure article-center">
      <div class="position-relative">
        <img :src="imageResult.response.docs[0].image_preview" alt="">
        <span class="rdl-credits">Foto: Jens Jensen</span>
      </div>
    </figure>
    <dl>
      <dt>Dato</dt>
      <dd>{{ imageResult.response.docs[0].datetime }}</dd>
      <dt>Keywords</dt>
      <dd>{{ imageResult.response.docs[0].keyword[0] }}</dd>
      <dt>Ophav</dt>
      <dd>{{ imageResult.response.docs[0].author[0] }}</dd>
      <dt>Samling</dt>
      <dd>{{ imageResult.response.docs[0].collection }}</dd>
      <dt>Materialetype</dt>
      <dd>{{ $t('metadata.type.' + imageResult.response.docs[0].type) | capitalize({ onlyFirstLetter: true }) }}</dd>
      <dt>Licens</dt>
      <dd>{{ imageResult.response.docs[0].license }}</dd>
      <dt>Dimension</dt>
      <dd>{{ imageResult.response.docs[0].width_pixels }} x {{ imageResult.response.docs[0].height_pixels }} pixels</dd>
      <dt>Oprettet dato</dt>
      <dd>{{ $d(new Date(imageResult.response.docs[0].created_date), 'long') }}</dd>
      <dt>Modificeret dato</dt>
      <dd>{{ $d(new Date(imageResult.response.docs[0].modified_date), 'long') }}</dd>
    </dl>
  </article>
</template>

<script>
export default {
  props: {
    imageResult: { type: Object, default: () => {} }
  }
}
</script>
