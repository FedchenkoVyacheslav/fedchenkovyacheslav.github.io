//mobile-header
let mobileHeader = document.querySelector(".mobile-header--js");
let buttonOpen = document.querySelector(".mobile-menu--js");
let buttonClose = document.querySelector(".mobile-header__button--js");

buttonOpen.addEventListener("click", function () {
  mobileHeader.classList.add("mobile-header--open");
});

buttonClose.addEventListener("click", function () {
  mobileHeader.classList.remove("mobile-header--open");
  buttonOpen.focus();
});

window.addEventListener("keydown", function (event) {
  if (
    mobileHeader.classList.contains("mobile-header--open") &&
    event.code === "Escape"
  ) {
    mobileHeader.classList.remove("mobile-header--open");
    buttonOpen.focus();
  }
});

//sort services by categories

let blocks = document.querySelectorAll(".services-block__item");
let checkboxes = document.querySelectorAll(".services-block__radio-box");

for (let checkbox of checkboxes) {
  checkbox.onclick = () => {
    for (let block of blocks) {
      if (
        block.classList.contains("services-block__item--roofing-js") &&
        checkbox.classList.contains("roofing-js")
      ) {
        block.classList.remove("services-block__item--hidden");
      } else if (
        block.classList.contains("services-block__item--construction-js") &&
        checkbox.classList.contains("construction-js")
      ) {
        block.classList.remove("services-block__item--hidden");
      } else if (
        block.classList.contains("services-block__item--remodelling-js") &&
        checkbox.classList.contains("remodelling-js")
      ) {
        block.classList.remove("services-block__item--hidden");
      } else if (
        block.classList.contains("services-block__item--exterior-js") &&
        checkbox.classList.contains("exterior-js")
      ) {
        block.classList.remove("services-block__item--hidden");
      } else if (checkbox.classList.contains("all-js")) {
        block.classList.remove("services-block__item--hidden");
      } else {
        block.classList.add("services-block__item--hidden");
      }
    }
  };
}

//swipers

(function() {
  'use strict';
  const breakpoint = window.matchMedia( '(min-width:500px)' );
  let servicesSwiper;
  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
	  if ( servicesSwiper !== undefined ) servicesSwiper.destroy( true, true );
	  return;
      } else if ( breakpoint.matches === false ) {
        return enableSwiper();
      }
  };
  const enableSwiper = function() {
    let servicesSwiper = new Swiper(".swiper-container-services", {
      slidesPerView: "auto",
    });
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

let reviewSwiper = new Swiper(".swiper-container-review", {
  slidesPerView: 1.17,
  spaceBetween: 20,
  slidesPerGroup: 1,
  speed: 750,
  initialSlide: 1,

  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
  },

  direction: "horizontal",

  pagination: {
    el: ".swiper-pagination-review",
    clickable: true,
  },
});

(function() {
  'use strict';
  const breakpoint = window.matchMedia( '(min-width:1000px)' );
  let partnersSwiper;
  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
	  if ( partnersSwiper !== undefined ) partnersSwiper.destroy( true, true );
	  return;
      } else if ( breakpoint.matches === false ) {
        return enableSwiper();
      }
  };

  const enableSwiper = function() {

    let partnersSwiper = new Swiper(".swiper-container-partners", {
      slidesPerView: 1.75,
      spaceBetween: 10,
      slidesPerGroup: 1,
      centeredSlides: true,
    
      breakpoints: {
        630: {
          initialSlide: 1,
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
      },
    });
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

(function() {
  'use strict';
  const breakpoint = window.matchMedia( '(min-width:768px)' );
  let videoSwiper;
  const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
	  if ( videoSwiper !== undefined ) videoSwiper.destroy( true, true );
	  return;
      } else if ( breakpoint.matches === false ) {
        return enableSwiper();
      }
  };
  const enableSwiper = function() {
    let videoSwiper = new Swiper(".swiper-container-video", {
      slidesPerView: 1.2,
      spaceBetween: 16,
      centeredSlides: true,

      breakpoints: {
        768: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
          centeredSlides: false,
        },
      },

      pagination: {
        el: ".swiper-pagination-video",
        clickable: true,
      },
    });
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

let whySwiper = new Swiper(".swiper-container-why", {
  slidesPerView: 1.17,
  spaceBetween: 20,
  slidesPerGroup: 1,
  speed: 750,
  initialSlide: 2,

  breakpoints: {
    768: {
      initialSlide: 1,
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
  },

  direction: "horizontal",

  pagination: {
    el: ".swiper-pagination-why",
    clickable: true,
  },
});

//review text more

let reviewTexts = document.querySelectorAll(".review__text-more");
let reviewButtons = document.querySelectorAll(".review__button_js");
let reviewButtonsClose = document.querySelectorAll(".review__button-close_js");

for (let i = 0; i < reviewTexts.length; i++) {
  const reviewText = reviewTexts[i];
  const reviewButton = reviewButtons[i];
  const reviewButtonClose = reviewButtonsClose[i];

  reviewButton.addEventListener("click", function () {
    reviewText.classList.remove("u-hidden");
    reviewButtonClose.classList.remove("u-hidden");
    reviewButton.classList.add("u-hidden");
  });

  reviewButtonClose.addEventListener("click", function () {
    reviewText.classList.add("u-hidden");
    reviewButtonClose.classList.add("u-hidden");
    reviewButton.classList.remove("u-hidden");
  });
}

//gallery

let projectsItems = document.querySelectorAll(".projects__item_js");
let gallery = document.querySelector(".gallery_js");
let galleryButtonClose = document.querySelector(".gallery__close_js");

for (let i = 0; i < projectsItems.length; i++) {
  const projectsItem = projectsItems[i];
  projectsItem.addEventListener("click", function () {
    gallery.classList.remove("u-visuallyhidden");
  });
  galleryButtonClose.addEventListener("click", function () {
    gallery.classList.add("u-visuallyhidden");
  });
  window.addEventListener("keydown", function (event) {
    if (
      !gallery.classList.contains("u-visuallyhidden") &&
      event.code === "Escape"
    ) {
      gallery.classList.add("u-visuallyhidden");
    }
  });
}

let gallerySwiper = new Swiper(".swiper-container-gallery", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 750,
  initialSlide: 0,

  direction: "horizontal",

  autoplay: {
    delay: 2000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//popup video-block

let modalVideo = document.querySelector(".modal-video--js");
let buttonVideoClose = document.querySelector(".modal__close--js-video");
let servisesVideoOpen = document.querySelectorAll(".video-block__img-button");
let modalPopup = document.querySelector(".modal__popup");

for (let serviseVideoOpen of servisesVideoOpen) {
  serviseVideoOpen.onclick = () => {
    if (serviseVideoOpen.classList.contains("video-block__roofing-1-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/pA7Nm0lR39w?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__roofing-2-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/hJNwbaD8XgA?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__roofing-3-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/mbawZCQQPBw?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__roofing-subservice-1-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/QivuZntSUJw?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__roofing-subservice-2-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/8WY93QzIct0?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__roofing-subservice-3-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/R1_IJ2KnQGI?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__construction-1-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/5cjjShC_6mk?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__construction-2-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/NrGjICqp52w?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__construction-3-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/8i8CTLXfb7g?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__remodeling-1-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/PkKW1OkDHKU?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__remodeling-2-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/7Aqf7k8YDzI?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__remodeling-3-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/Orz6_Twvdv0?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__exterior-1-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/25uyLRWP1os?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__exterior-2-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/XcxZrGyXZ1k?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    } else if (serviseVideoOpen.classList.contains("video-block__exterior-3-js")) {
      modalPopup.innerHTML = `
      <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/_l9GvLpFBJc?rel=0&amp;enablejsapi=1&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen="">
        </iframe>
      `;
    }
    modalVideo.classList.remove("modal--close");
  };
  buttonVideoClose.onclick = () => {
    modalVideo.classList.add("modal--close");
    serviseVideoOpen.focus();
  };
  window.addEventListener("keydown", function (event) {
    if (
      !modalVideo.classList.contains("modal--close") &&
      event.code === "Escape"
    ) {
      modalVideo.classList.add("modal--close");
      serviseVideoOpen.focus();
    }
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var modalPopup = $(".modal__popup");
      if (!modalPopup.is(e.target) && modalPopup.has(e.target).length === 0) {
        modalVideo.classList.add("modal--close");
      }
    });
  });
}

//validation form

function getValuesForm(form) {
  let body = {};
  const inputs = form.querySelectorAll("input");
  const textareas = form.querySelectorAll("textarea");
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    switch (input.type) {
      case "file":
        body[input.name] = input.files;
        break;

      default:
        body[input.name] = input.value;
        break;
    }
  }
  for (let i = 0; i < textareas.length; i++) {
    const textarea = textareas[i];
    body[textarea.name] = textarea.value;
  }
  return body;
}

function errorMessageCreater(input, text) {
  let message = document.createElement("div");
  message.classList.add("invalid-text");
  message.innerText = text;

  let nextMessage = input.nextElementSibling;
  if (nextMessage != null) {
    return;
  }

  input.insertAdjacentElement("afterend", message);
  input.addEventListener("input", function handlerInput(event) {
    message.remove();
    input.removeEventListener("input", handlerInput);
  });
}

function rightMessageCreater(input, text) {
  let message = document.createElement("div");
  message.classList.add("valid-text");
  message.innerText = 'All right';

  let nextMessage = input.nextElementSibling;
  if (nextMessage != null) {
    return;
  }

  input.insertAdjacentElement("afterend", message);
  input.addEventListener("input", function handlerInput(event) {
    message.remove();
    input.removeEventListener("input", handlerInput);
  });
}

function setInvalidInput(input) {
  input.classList.add("invalid-input");
  input.addEventListener("input", function handlerInput(event) {
    input.classList.remove("invalid-input");
    input.removeEventListener("input", handlerInput);
  });
}

function setValidInput(input) {
  input.classList.add("valid-input");
  input.addEventListener("input", function handlerInput(event) {
    input.classList.remove("valid-input");
    input.removeEventListener("input", handlerInput);
  });
}

function setFormErrors(form, errors) {
  const inputs = form.querySelectorAll("input");
  const textareas = form.querySelectorAll("textarea");
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (errors[input.name]) {
      setInvalidInput(input);
      errorMessageCreater(input, errors[input.name]);
    } else {
      setValidInput(input);
      rightMessageCreater(input, errors[input.name]);
    }
  }
  l = textareas.length;
  for (let i = 0; i < l; i++) {
    const textarea = textareas[i];
    if (errors[textarea.name]) {
      setInvalidInput(textarea);
      errorMessageCreater(textarea, errors[textarea.name]);
    } else {
      setValidInput(textarea);
      rightMessageCreater(textarea, errors[textarea.name]);
    }
  }
}

function validateForm(field) {
  return field.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i);
}

let formContact = document.forms["contact"];
if (formContact !== undefined) {
  formContact.onsubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const values = getValuesForm(form);
    let errors = {};
    if (values.name === null || values.name === "") {
      errors.name = "This field is required";
    } else if (parseInt(values.name)) {
      errors.name = "This name is not valid";
    }

    if (values.phoneemail === null || values.phoneemail === "") {
      errors.phoneemail = "This field is required";
    } else if (!validateForm(values.phoneemail)) {
      errors.phoneemail = "Invalid e-mail or phone";
    }

    if (values.message === null || values.message === "") {
      errors.message = "This field is required";
    }

    setFormErrors(form, errors);

    if (Object.keys(errors).length == 0) {
      setTimeout(function () {
        window.location.pathname = "/thank-you.html";
      }, 2000);
    } else if (Object.keys(errors).length == 3) {
      
      setTimeout(function () {
        document.querySelector(".content").innerHTML = `
        <div class="error container">
        <h1 class="error-title">404</h1>
        <p class="error-text">The page you are looking for no longer exists.
        Perhaps you can return back to the site’s <a class="error-link" href="../../fitzsimmons/index.html">homepage</a> and see if you can find what you are looking for.</p>
        </div>
        `;
      }, 2000);
    }
  };
}