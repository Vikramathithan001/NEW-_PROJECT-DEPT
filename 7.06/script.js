/* Created by Tivotal */

const tabBox = document.querySelector('.tab-box')
const tabs = document.querySelectorAll('.tab')
const icons = document.querySelectorAll('.icon i')

let isDragging = false

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    //it will remove the class active
    //form previous item which have
    //class active
    tabBox.querySelector('.active').classList.remove('active')
    tab.classList.add('active')
  })
})

const Dragging = (e) => {
  if (!isDragging) return
  tabBox.classList.add('dragging')
  tabBox.scrollLeft -= e.movementX
  handleIcons(tabBox.scrollLeft)
}

const stopDrag = () => {
  tabBox.classList.remove('dragging')
  isDragging = false
}

icons[1].addEventListener('click', () => {
  let scrollWidth = (tabBox.scrollLeft += 340)
  handleIcons(scrollWidth)
})

icons[0].addEventListener('click', () => {
  let scrollWidth = (tabBox.scrollLeft += -340)
  handleIcons(scrollWidth)
})

const handleIcons = (width) => {
  let maxScrollWidth = tabBox.scrollWidth - tabBox.clientWidth
  icons[0].parentElement.style.display = width <= 0 ? 'none' : 'flex'

  icons[1].parentElement.style.display =
    maxScrollWidth - width <= 1 ? 'none' : 'flex'
}

tabBox.addEventListener('mousedown', () => (isDragging = true))
tabBox.addEventListener('mousemove', Dragging)
tabBox.addEventListener('mouseup', stopDrag)



function loadContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('content').innerHTML = data
    })
    .catch((error) => console.error('Error loading content:', error))
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('python-link')
    .addEventListener('click', function (event) {
      event.preventDefault()
      loadContent('./python/intro.html')
    })

  document
    .getElementById('java-link')
    .addEventListener('click', function (event) {
      event.preventDefault()
      loadContent('./java/java.html')
    })
})

