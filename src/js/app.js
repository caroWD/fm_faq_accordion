const detailsItems = Array.from(document.querySelectorAll('details'))

const changeIcons = target => {
  target.classList.toggle(`after:content-[url('../img/icon-plus.svg')]`)
  target.classList.toggle(`after:content-[url('../img/icon-minus.svg')]`)
}

const closeInactiveFaqs = (target, arr) => {
  arr.map(elm => {
    if (target.parentElement !== elm) {
      elm.open = false
      if (elm.firstElementChild.classList.contains(`after:content-[url('../img/icon-minus.svg')]`))
      changeIcons(elm.firstElementChild)
    }
  })
}

detailsItems.forEach((elm, i, arr) => {
  elm.addEventListener('click', e => {
    if (e.target === elm.firstElementChild) {
      changeIcons(e.target)
      closeInactiveFaqs(e.target, arr)
    }
  })
})