<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <form class="mx-2 my-auto d-inline w-100">
      <div class="input-group search-group">
        <span class="input-group-prepend">
          <div class="dropdown">
            <a
              id="dropdownMenuLink"
              class="btn btn-secondary dropdown-toggle border-right-0 border text-secondary bg-white shadow-none"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <small>Søg i billeder</small>
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </span>
        <input
          id="search-input"
          class="form-control py-2 border-right-0 border-left-0 border rounded-0 shadow-none"
          type="search"
          placeholder="Søg">
        <span class="input-group-append">
          <button
            class="btn btn-outline-secondary border-left-0 border bg-white shadow-none"
            type="button">
            <icon name="search" />
          </button>
        </span>
      </div>
    </form>
  </nav>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'Search',
  components: Icon
}
</script>
