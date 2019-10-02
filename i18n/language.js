function uppercase (value) {
  if (!value) return ''
  return value.toString().toUpperCase()
}
function capitalize (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

Vue.filter('uppercase', uppercase)
Vue.filter('capitalize', capitalize)
