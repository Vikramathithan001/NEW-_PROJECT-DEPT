// JavaScript (script.js)

// Get the scroll container
const scrollContainer = document.querySelector('.scroll-container')

// Get the prev and next buttons
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

// Add event listener for previous button click
prevBtn.addEventListener('click', function () {
  scrollContainer.scrollBy({
    left: -scrollContainer.offsetWidth,
    behavior: 'smooth',
  })
})

// Add event listener for next button click
nextBtn.addEventListener('click', function () {
  scrollContainer.scrollBy({
    left: scrollContainer.offsetWidth,
    behavior: 'smooth',
  })
})
