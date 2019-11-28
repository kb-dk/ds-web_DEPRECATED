<template>
  <div class="rdl-page-intro  position-relative">
    <div class="content-header">
      <div class="grid-x grid-margin-x">
        <div class="cell medium-8">
          <h1>{{ imageResult.response.docs[0].title }}</h1>
        </div>
        <div class="cell medium-4">
          <span class="rdl-top-container-buttons hide-for-small-only">
            <button aria-label="Increase Font">
              <i class="icon zmdi-format-size icon-medium" />
            </button>
            <a href=""><i class="icon zmdi-print icon-medium" /></a>
            <a href=""><i class="icon zmdi-share icon-medium" /></a>
          </span>
        </div>
        <div class="cell small-12 large-8" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageResult: { type: Object, default: () => {} }
  }
}
</script>
