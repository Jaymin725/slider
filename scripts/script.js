const slider_items = document.querySelectorAll(".slider-item")
const prev_button = document.querySelector("#slider-prev")
const next_button = document.querySelector("#slider-next")

var slider = {
  len: slider_items.length,
  index: 0,

  previous: function () {
    let prev = this.index - 1
    return (prev < 0) ? (this.len - 1) : (prev)
  },

  next: function () {
    let next = this.index + 1
    return (next > this.len - 1) ? (0) : (next)
  },

  display: function () {
    console.log(`prev: ${slider.previous()}, i: ${slider.index}, next: ${slider.next()}`)
  },

  slidePrevious: function () {
    slider.index = slider.previous()
    slider.display()
  },

  slideNext: function () {
    slider.index = slider.next()
    slider.display()
  }
}

function colorCode() {
  slider_items.forEach((slide) => slide.style.color = "black")

  slider_items[slider.index].style.color = "#00ff00"
  slider_items[slider.previous()].style.color = "#ff0000"
  slider_items[slider.next()].style.color = "#0000ff"
}

prev_button.addEventListener("click", () => {
  slider.slidePrevious()
  colorCode()
})

next_button.addEventListener("click", () => {
  slider.slideNext()
  colorCode()
})

colorCode()