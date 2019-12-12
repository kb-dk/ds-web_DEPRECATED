const onReady = () => {
  const accordionSections = document.querySelectorAll(
    '.rdl-accordion .section'
  )
  Array.prototype.slice.call(accordionSections).forEach((element) => {
    element.onclick = () => {
      // Uncomment following if other open tabs should close when a new one opens
      // Array.prototype.slice.call(accordionSections).forEach((el) => {
      //   if (el !== element) {
      //     el.classList.remove('active')
      //   }
      // })
      element.classList.toggle('active')
    }
  })
}

export default { onReady }
