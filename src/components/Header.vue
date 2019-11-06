<template>
  <header class="rdl-header position-relative">
    <div class="inner-content grid-container">
      <div class="grid-x">
        <div class="small-6 large-3 cell">
          <div class="logo">
            <a class="show-for-medium" href="/">&nbsp;</a>
          </div>
        </div>
        <div class="small-6 hide-for-large cell">
          <div
            class="rdl-hamburger-menu box flex-container align-right align-middle">
            <div class="hamburger-menu">
              <span class="line" />
              <span class="line" />
              <span class="line" />
            </div>
          </div>
        </div>
        <div class="show-for-large medium-9 cell navs">
          <nav class="top-nav">
            <ul>
              <li><a href="">{{ $t('firstNavbar.loans') | capitalize({ onlyFirstLetter: true }) }}</a></li>
              <li><a href="">{{ $t('firstNavbar.openingHours') | capitalize({ onlyFirstLetter: true }) }}</a></li>
              <li><a href="">{{ $t('firstNavbar.aboutRoyalLibrary') | capitalize({ onlyFirstLetter: true }) }}</a></li>
              <li><a href="#" @click="toggleLanguage">{{ $t('firstNavbar.otherLanguage') | capitalize({ onlyFirstLetter: true }) }}</a></li>
              <li>
                <a id="loginBtn"
                   href="">{{ $t('firstNavbar.login') | capitalize({ onlyFirstLetter: true }) }} <i class="icon zmdi-account-circle icon-xsmall" />
                </a>
              </li>
            </ul>
          </nav>
          <nav class="main-nav">
            <ul>
              <li><a href="">{{ $t('secondNavbar.findMaterial') | uppercase }}</a></li>
              <li><a href="">{{ $t('secondNavbar.inspiration') | uppercase }}</a></li>
              <li><a href="">{{ $t('secondNavbar.services') | uppercase }}</a></li>
              <li><a href="">{{ $t('secondNavbar.arrangements') | uppercase }}</a></li>
              <li><a href="">{{ $t('secondNavbar.visitUs') | uppercase }}</a></li>
              <li>
                <button id="searchBtn" alt="search">
                  <i class="icon zmdi-search icon-medium" />

                  <i class="icon zmdi-close icon-medium" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="top-menu">
        <div class="rdl-search-form rdl-search-form-top-menu collapsed">
          <Search />
        </div>
      </div>
    </div>

    <div class="hide-for-large">
      <nav class="mobile-menu theme-bg">
        <div class="main">
          <div class="inner-content grid-container">
            <div class="grid-x grid-padding-x">
              <div class="cell">
                <ul>
                  <li><a href="#">{{ $t('secondNavbar.findMaterial') | uppercase }}</a></li>
                  <li><a href="#">{{ $t('secondNavbar.inspiration') | uppercase }}</a></li>
                  <li><a href="#">{{ $t('secondNavbar.services') | uppercase }}</a></li>
                  <li><a href="##">{{ $t('secondNavbar.arrangements') | uppercase }}</a></li>
                  <li><a href="">{{ $t('secondNavbar.visitUs') | uppercase }}</a></li>
                  <li id="searchText" class="search">
                    <a href="#">{{ $t('search.searchOn') | uppercase }} kb.dk</a>
                    <div class="action">
                      <i class="icon zmdi-search icon-small" />
                    </div>
                  </li>
                </ul>
                <div class="collapsable mobile-search-area collapsed">
                  <div class="rdl-search-form rdl-search-form-simple">
                    <SearchMobile />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="secondary">
          <div class="inner-content grid-container">
            <div class="grid-x grid-padding-x grid-padding-y">
              <div class="cell">
                <ul>
                  <li><a href="">{{ $t('firstNavbar.loans') | capitalize({ onlyFirstLetter: true }) }}</a></li>
                  <li><a href="">{{ $t('firstNavbar.openingHours') | capitalize({ onlyFirstLetter: true }) }}</a></li>
                  <li><a href="">{{ $t('firstNavbar.aboutRoyalLibrary') | capitalize({ onlyFirstLetter: true }) }}</a></li>
                  <li><a href="#" @click="toggleLanguage">{{ $t('firstNavbar.otherLanguage') | capitalize({ onlyFirstLetter: true }) }}</a></li>
                  <li>
                    <a id="loginBtn"
                       href="">{{ $t('firstNavbar.login') | capitalize({ onlyFirstLetter: true }) }} <i class="icon zmdi-account-circle icon-xsmall" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex'
import Search from '@/components/Search.vue'
import SearchMobile from '@/components/SearchMobile.vue'
import h from '../assets/js/header.js'

export default {
  name: 'Header',
  components: {
    Search,
    SearchMobile
  },
  mounted () {
    h.test()
    h.toggleMobileSearch()
    // let scripts = document.createElement('script')
    // scripts.setAttribute('src', 'assets/js/scripts.js')
    // document.body.appendChild(scripts)
  },
  methods: {
    ...mapActions('lang', ['setLang']),

    toggleLanguage: function () {
      var newLang = this.$i18n.locale === 'en' ? 'da' : 'en'
      this.setLang(newLang)
    }
  }
}
</script>
