<template>
  <div>
    <main>
      <div class="rdl-bread-crumb-wrapper position-relative show-for-large">
        <div class="inner-content grid-container">
          <div class="grid-x grid-margin-x">
            <div class="hide-for-small-only cell small-12">
              <div class="bread-crumb">
                <i class="icon zmdi-home icon-xsmall" />
                <a href="/">Forside</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="divider theme-color top-left" />

      <div class="rdl-top-container position-relative">
        <div class="inner-content">
          <div class="grid-x">
            <div class="cell large-12" />
          </div>
        </div>
      </div>

      <div class="rdl-grid-container-wrapper position-relative">
        <div class="inner-content grid-container">
          <div class="grid-x grid-margin-x grid-padding-y">
            <div class="cell show-for-large large-3 aside">
              <Aside />
            </div>
            <div class="cell small-12 large-12">
              <div>
                <img :src="$auth.user.picture">
                <h2>{{ $auth.user.name }}</h2>
                <p>{{ $auth.user.email }}</p>
              </div>

              <div>
                <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
