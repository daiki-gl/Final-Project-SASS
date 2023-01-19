const nav_toggle = document.querySelector('.nav_toggle')
const nav = document.querySelector('.header__nav__list')
const body = document.querySelector('body')
const nav_list = document.querySelectorAll('.header__nav__list-link')

nav_toggle.addEventListener('click', () => {
  nav_toggle.classList.toggle('show')
  nav.classList.toggle('show')
  body.classList.toggle('active')
})

nav_list.forEach((link) => {
  link.addEventListener('click', () => {
    nav_toggle.classList.toggle('show')
    nav.classList.toggle('show')
    body.classList.toggle('active')
  })
})
