<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#"><small>Udlån</small></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><small>Åbningstider</small></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><small>Om Det Kgl. Bibliotek</small></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><small>In English</small></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><small>Login</small></a>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="images/kb_logo_small.png" alt="">
        <img src="images/kb_logo_text_da.png" height="60px" alt="">
      </a>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">FIND MATERIALE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">INSPIRATION</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SERVICES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ARRANGEMENTER</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BESØG OS</a>
          </li>
        </ul>
      </div>
    </nav>
    <Search />
  </div>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
  name: 'Header',
  components: {
    Search
  }
}
</script>
