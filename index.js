const allVideos = document.querySelectorAll('video')
const sidebar = document.querySelector('.left-section')
const sidebarItems = document.querySelectorAll('.sidebar .item')
const catItems = document.querySelectorAll('.categories a')

//play video when mouse hover
allVideos.forEach(video => {
  video.addEventListener('mouseover', () => {
    video.play()
  })
  video.addEventListener('mouseleave', () => {
    video.pause()
  })
})

//handle sidebar item on click 
sidebarItems.forEach(sidebarItem => {
  sidebarItem.addEventListener('click', () => {
    sidebarItems.forEach(item => {
      item.classList.remove('active')
    })
    sidebarItem.classList.add('active')
  })
})
catItems.forEach(catItem => {
  catItem.addEventListener('click', () => {
    catItems.forEach(item => {
      item.classList.remove('active')
    })
    catItem.classList.add('active')
  })
})

//move sidebar on small devices scroll
window.addEventListener('scroll', () => {
  if(window.innerWidth <= 992) {
    if(this.pageYOffset > 40) {
      sidebar.style.paddingTop = '20px'
    } else {
      sidebar.style.paddingTop = '75px'
    }
  }
})