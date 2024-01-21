const slider_items = document.querySelectorAll(".slider-item");
const prev_button = document.querySelector("#slider-prev");
const next_button = document.querySelector("#slider-next");

var slider = {
  len: slider_items.length,
  index: 0,

  previous: function () {
    let prev = this.index - 1;
    return (prev < 0) ? (this.len - 1) : (prev);
  },

  next: function () {
    let next = this.index + 1;
    return (next > this.len - 1) ? (0) : (next);
  },

  display: function () {
    console.log(`prev: ${slider.previous()}, i: ${slider.index}, next: ${slider.next()}`);
  },

  slidePrevious: function () {
    slider.index = slider.previous();
    slider.display();
    setIndex();
  },

  slideNext: function () {
    slider.index = slider.next();
    slider.display();
    setIndex();
  }
}

prev_button.addEventListener("click", slider.slidePrevious);
next_button.addEventListener("click", slider.slideNext);

function setIndex() {
  slider_items.forEach((slide, i) => {
    slide.classList.toggle("previous", i == slider.previous());
    slide.classList.toggle("active", i == slider.index);
    slide.classList.toggle("next", i == slider.next());
  })
}

slider.display();
setIndex();