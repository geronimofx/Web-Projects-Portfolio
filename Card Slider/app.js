const wrapper = document.querySelector(".wrapper")
const carousel = document.querySelector(".carousel")
const arrowBtns = document.querySelectorAll(".wrapper i")
const cardWidth = carousel.querySelector(".card").offsetWidth
//Making an array of carousel children, which are LI elements
const carouselChildrens = [...carousel.children]

let isDragging = false
let startX, startScrollLeft, timeoutId

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / cardWidth)

// Insert copies of the last few cards to beginning of the carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
  carousel.insertAdjacentHTML("afterBegin", card.outerHTML)
})

// Insert copies of the first few cards to end  of the carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML)
})

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -cardWidth : cardWidth
  })
})

const draggingStart = (e) => {
  isDragging = true
  carousel.classList.add("dragging")

  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX
  startScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
  if(!isDragging) return // if isDragging is false return from here

  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX -startX)
}

const draggingStop = () => {
  isDragging = false
  carousel.classList.remove("dragging")
}

const autoPlay = () => {
  if(window.innerWidth < 800) return // Return if window is smaller than 800, won't auto-play on mbile devices
  //Autoplay the carojusel after every 2500ms
  timeoutId = setTimeout(() => carousel.scrollLeft += cardWidth, 1000)
}
autoPlay()

const infiniteScroll = () => {
  //If the carousel is at the beginning, scroll to the end
  if(carousel.scrollLeft === 0) {
    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth)
  }
  //If the carousel is at the end, scroll to the beginning 
  else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.scrollLeft = carousel.offsetWidth
  }

  // Clear existing timeout & start autiplay if mouse is not hovering over carousel
  clearTimeout(timeoutId)
  if(!wrapper.matches(":hover")) autoPlay()
}

carousel.addEventListener("mousedown", draggingStart)
carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("mouseup", draggingStop)
carousel.addEventListener("scroll", infiniteScroll)
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId))
wrapper.addEventListener("mouseleave", autoPlay)

// Link de referencia: https://www.youtube.com/watch?v=6QE8dXq9SOE&ab_channel=CodingNepal