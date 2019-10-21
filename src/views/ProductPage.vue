<template>
  <div>
    <div class="container">
      <div class="col-12">
        <nav class="navbar navbar-light bg-white">
          <a href="#" @click="$router.go(-1)">&lt; Tilbage til søgningen</a>
        </nav>
        <img :src="getImage()" class="card-image-top img-fluid">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  methods: {
    getImage: function () {
      return 'https://picsum.photos/1200/' + Math.floor((Math.random() * 600) + 100)
    }
  }
}
</script>
