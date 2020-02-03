<template>
  <article>
    <figure v-if="imageResult" class="rdl-figure article-center">
      <div class="position-relative">
        <img :src="getImage" alt="">
        <span class="rdl-credits">Foto: Jens Jensen</span>
      </div>
    </figure>
    <dl>
      <dt>Dato</dt>
      <dd>{{ imageResult.response.docs[0].datetime }}</dd>
      <dt>Keywords</dt>
      <dd>{{ result.keyword[0] }}</dd>
      <dt>Ophav</dt>
      <dd>{{ result.author[0] }}</dd>
      <dt>Samling</dt>
      <dd>{{ result.collection }}</dd>
      <dt>Materialetype</dt>
      <dd>{{ $t('metadata.type.' + result.type) | capitalize({ onlyFirstLetter: true }) }}</dd>
      <dt>Licens</dt>
      <dd>{{ result.license }}</dd>
      <dt>Dimension</dt>
      <dd>{{ result.width_pixels }} x {{ result.height_pixels }} pixels</dd>
      <dt>Oprettet dato</dt>
      <dd v-if="result.created_date">
        {{ $d(new Date(result.created_date), 'long') }}
      </dd>
      <dt>Modificeret dato</dt>
      <dd v-if="result.modified_date">
        {{ $d(new Date(result.modified_date), 'long') }}
      </dd>
    </dl>
  </article>
</template>

<script>
export default {
  props: {
    imageResult: { type: Object, default: () => {} }
  },
  computed: {
    result: function () {
      return this.imageResult.response.docs[0]
    },
    getImage: function () {
      return this.imageResult.response.docs[0].iiif + 'full/!1232,/0/native.jpg'
    }
  }
}
</script>
