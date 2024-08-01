
let hamburger = document.getElementById("humburger")
let navMenu = document.getElementById("remove")

hamburger.addEventListener("click", ()=>{
  navMenu.classList.remove('hidden')
})

navMenu.addEventListener('click', ()=>{
  hamburger.classList.add('hidden')
})

const tabs = document.querySelectorAll('.tabs-wrap ul li')


tabs.forEach(i => {
  i.addEventListener("click", ()=>{
    tabs.forEach(b => {
      b.classList.remove('active')
    })
    i.classList.add('active')
  })
})