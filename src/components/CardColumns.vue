<template>
  <div class="grid-container">
    <div class="grid-x grid-margin-x small-up-2 medium-up-3">
      <div v-for="result in searchResult.response.docs"
           :key="result.id"
           class="cell">
        <div class="card">
          <router-link :to="`/view/${result.id}`">
            <img :src="getImage()" class="card-image-top img-fluid">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
