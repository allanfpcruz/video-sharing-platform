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

//handle categorie item on click 
catItems.forEach(catItem => {
  catItem.addEventListener('click', () => {
    catItems.forEach(item => {
      item.classList.remove('active')
    })
    catItem.classList.add('active')
  })
})