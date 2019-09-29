<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <form class="mx-2 my-auto d-inline w-100">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="...">
        <span class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">
            <icon name="search" />
          </button>
        </span>
      </div>
    </form>
  </nav>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
export default ({
  name: 'Search',
  components: Icon
})
</script>
