<template>
  <div class="masonry-css">
    <div v-for="result in searchResult.response.docs"
         :key="result.id"
         class="masonry-css-item">
      <router-link :to="`/view/${result.id}`">
        <img :src="result.image_preview" class="card-image-top img-fluid">
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CardColumns',
  computed: {
    ...mapState({
      searchResult: state => state.search.all.searchResult
    })
  }
}
</script>
