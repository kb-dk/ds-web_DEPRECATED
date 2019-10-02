<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#"><small>{{ $t("firstNavbar.loans") | capitalize({ onlyFirstLetter: true }) }}</small></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><small>{{ $t("firstNavbar.openingHours") | capitalize({ onlyFirstLetter: true }) }}</small></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><small>{{ $t("firstNavbar.aboutRoyalLibrary") | capitalize({ onlyFirstLetter: true }) }}</small></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.stop="switchLanguage">
              <small>{{ $t("firstNavbar.otherLanguage") | capitalize({ onlyFirstLetter: true }) }}</small>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><small>{{ $t("firstNavbar.login") | capitalize({ onlyFirstLetter: true }) }}</small></a>
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
            <a class="nav-link" href="#">{{ $t("secondNavbar.findMaterial") | uppercase }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">{{ $t("secondNavbar.inspiration") | uppercase }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">{{ $t("secondNavbar.services") | uppercase }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">{{ $t("secondNavbar.arrangements") | uppercase }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">{{ $t("secondNavbar.visitUs") | uppercase }}</a>
          </li>
        </ul>
      </div>
    </nav>
    <Search />
    <br>
    <nav class="navbar navbar-expand-lg navbar-light third-navbar">
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-left">
          <li class="nav-item">
            <a class="nav-link py-0 text-dark text-center" href="#"><small>Alt</small></a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0 text-dark text-center" href="#"><small>Bøger og tidsskrifter</small></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link py-0 text-dark text-center" href="#"><small>Billeder</small></a>
          </li>
          <li class="nav-item">
            <a class="nav-link py-0 text-dark text-center" href="#"><small>Kb.dk</small></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
  name: 'Header',
  components: {
    Search
  },
  methods: {
    switchLanguage () {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'da' : 'en'
    }
  }
}
</script>
