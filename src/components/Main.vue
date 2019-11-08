<template>
  <main>
    <div class="divider theme-color top-left" />
    <div class="rdl-grid-container-wrapper  position-relative">
      <div class="inner-content grid-container">
        <div class="grid-x grid-margin-x grid-padding-y">
          <div class="cell small-12">
            <h2 class="h1">
              1289 resultater på &#039;Carl Nielsen&#039;
            </h2>

            <div class="rdl-filter-btn-group position-relative">
              <div class="grid-x grid-margin-x">
                <div class="small-12 cell">
                  <a href="#filter=access"
                     class="filter-btn filter-btn">{{ $t('filters.access') | capitalize({ onlyFirstLetter: true }) }}</a>
                  <a href="#filter=year"
                    class="filter-btn filter-btn">{{ $t('filters.year') | capitalize({ onlyFirstLetter: true }) }}</a>
                  <a href="#filter=locality"
                     class="filter-btn filter-btn">{{ $t('filters.locality') | capitalize({ onlyFirstLetter: true }) }}</a>
                  <div class="show-more show-for-small-only">
                    <span class="more-text">Vis flere filtre</span>
                    <span class="less-text">Vis færre filtre</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rdl-search-results-list @@classes position-relative">
      <div class="grid-container">
        <div class="grid-x grid-margin-x grid-padding-y">
          <div class="cell small-12">
            <div
              data-filter="populaere boger"
              class="rdl-search-result  position-relative">
              <div class="grid-x grid-margin-x grid-padding-y">
                <div class="cell large-12">
                  <h3><a href="">Carly Nielsen liv</a></h3>
                  <span class="path">Inspiration og Temaer / Carl Nielsens liv</span>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis magnam voluptatibus laborum facilis sequi odit
                    itaque minus magni ullam cum provident labore expedita
                    ipsum, repudiandae quo consequatur culpa, nisi aut!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="cell small-12">
            <div class="box flex-container align-center">
              <a href="http://lorizzle.nl/" class=" btn-link">+ Vis flere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
