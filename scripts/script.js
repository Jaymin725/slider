const slider_items = document.querySelectorAll(".slider-item");
const prev_button = document.querySelector("#slider-prev");
const next_button = document.querySelector("#slider-next");

var slider = {
  len: slider_items.length,
  index: 0,

  previous: function (n = 1) {
    let prev = this.index - n;
    return (prev < 0) ? (this.len - n) : (prev);
  },

  next: function (n = 1) {
    let next = this.index + n;
    return (next > this.len - 1) ? (n - 1) : (next);
  },

  display: function () {
    console.log(`prev-prev: ${slider.previous(slider.previous())}, prev: ${slider.previous()}, i: ${slider.index}, next: ${slider.next()}, next-next: ${slider.next(slider.next())}`);
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
    // slide.classList.toggle("previous-previous", i == slider.previous(2));
    slide.classList.toggle("previous", i == slider.previous());
    slide.classList.toggle("active", i == slider.index);
    slide.classList.toggle("next", i == slider.next());
    // slide.classList.toggle("next-next", i == slider.next(2));
  })
}