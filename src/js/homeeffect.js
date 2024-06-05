/* global $ */
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import hljs from "highlight.js";
// import "highlight.js/styles/github.css";
import $ from "jquery"; // Import jQuery
// Now you can use '$' in your code

const loadScripts = async () => {
  // Load jQuery
  const jQueryScript = document.createElement("script");
  jQueryScript.src =
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js";

  // Use a promise to track the loading of jQuery script
  const jQueryLoaded = new Promise((resolve, reject) => {
    jQueryScript.onload = resolve;
    jQueryScript.onerror = reject;
  });

  document.body.appendChild(jQueryScript);

  try {
    // Wait for jQuery script to load
    await jQueryLoaded;
    // Once loaded, load the Owl Carousel script
    await loadOwlCarouselScript();
  } catch (error) {
    console.error("Error loading jQuery script:", error);
  }
};
// Function to load Owl Carousel script
const loadOwlCarouselScript = async () => {
  const owlCarouselScript = document.createElement("script");
  owlCarouselScript.src =
    "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
  owlCarouselScript.integrity =
    "sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==";
  owlCarouselScript.crossOrigin = "anonymous";
  owlCarouselScript.referrerPolicy = "no-referrer";

  // Use a promise to track the loading of Owl Carousel script
  const owlCarouselLoaded = new Promise((resolve, reject) => {
    owlCarouselScript.onload = resolve;
    owlCarouselScript.onerror = reject;
  });

  document.body.appendChild(owlCarouselScript);

  try {
    // Wait for Owl Carousel script to load
    await owlCarouselLoaded;
    // Once loaded, execute the initialization code
    init();
  } catch (error) {
    console.error("Error loading Owl Carousel script:", error);
  }
};
const init = () => {
  // these phrases will repeat
  const phrases = [
    "Learn From The Corporate, Step Into Corporate World!",
    // "This is a typing effect.",
    // "You can change the phrases.",
    // "Customize it as you like!"
  ];

  // start with initial random phrase from the collection
  // Math.floor reduces float to integer
  let currentPhrase = Math.floor(Math.random() * (phrases.length - 1));
  let currentChar = 0;
  // this element has the typing line
  let typingLine = document.getElementById("typing");

  // type() the phrase char-by-char
  //
  function type() {
    if (!typingLine) return;
    // write sub-string to the element
    typingLine.textContent = phrases[currentPhrase].slice(0, ++currentChar);

    // continue to write until we run out of phrase-chars
    if (currentChar < phrases[currentPhrase].length) {
      // slow down the animation
      setTimeout(function () {
        // animates the changes to DOM
        requestAnimationFrame(type);
      }, 25);
    } else {
      // we ran out of phrase length
      // now wait 2 seconds
      // then call "erase" method to start erasing
      setTimeout(erase, 2000);
    }
  }

  // erase() characters one-by-one
  //
  function erase() {
    // reduce one char, assign to the element
    typingLine.textContent = phrases[currentPhrase].slice(0, --currentChar);

    // we still have more chars to erase
    if (currentChar > 0) {
      // pause 25ms, then animate the element rendering
      setTimeout(function () {
        requestAnimationFrame(erase);
      }, 25);
    } else {
      // we ran out of chars for current phrase
      // reset to first char
      currentChar = 0;
      // move to the next phrase
      // "%" ensures endless loop within phrases
      currentPhrase = (currentPhrase + 1) % phrases.length;
      // all erased? now start "typing" again
      setTimeout(type, 1000);
    }
  }

  // start the first "typing"
  type();
  /* home page banner slider start */

  $(".udguafr_slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    mouseDrag: false,
    touchDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  /* home page banner slider end */

  /*home page s2 slider start*/
  setTimeout(() => {
    $(".ihdieruir_slider").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplaytimeout: 3000,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }, 2000);

  /*home page s2 slider end*/

  /*our partner slider start*/

  $(".opslider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  /*our partner slider end*/

  /* mentors slider start */

  $(".owldihsard").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      328: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  });

  /* mentors slider end */

  $(".gfhghg").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  /*complete profile end*/

  /*institute js start*/

  $(".owl58").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".fhghjgfhjgh").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  /*institute js end*/

  // window.addEventListener("DOMContentLoaded", () => {
  //   // update circle when range change
  //   const pie = document.querySelectorAll(".pie");
  //   const range = document.querySelector('[type="range"]');

  //   range.addEventListener("input", (e) => {
  //     pie.forEach((el, index) => {
  //       const options = {
  //         index: index + 1,
  //         percent: e.target.value,
  //       };
  //       circle.animationTo(options);
  //     });
  //   });

  //   // start the animation when the element is in the page view
  //   const elements = Array.from(document.querySelectorAll(".pie")); // Convert NodeList to array
  //   const circle = new CircularProgressbar("pie");

  //   if ("IntersectionObserver" in window) {
  //     const config = {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 0.75,
  //     };

  //     const observer = new IntersectionObserver((entries, observer) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting && entry.intersectionRatio > 0.75) {
  //           circle.initial(entry.target);
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     }, config);

  //     elements.forEach((item) => {
  //       observer.observe(item);
  //     });
  //   } else {
  //     elements.forEach((element) => {
  //       circle.initial(element);
  //     });
  //   }

  //   setInterval(() => {
  //     const typeFont = [100, 200, 300, 400, 500, 600, 700];
  //     const colorHex = `#${Math.floor((Math.random() * 0xffffff) << 0).toString(
  //       16
  //     )}`;
  //     const options = {
  //       index: 17,
  //       percent: Math.floor(Math.random() * 100 + 1),
  //       colorSlice: colorHex,
  //       fontColor: colorHex,
  //       fontSize: `${Math.floor(Math.random() * (1.4 - 1 + 1) + 1)}rem`,
  //       fontWeight: typeFont[Math.floor(Math.random() * typeFont.length)],
  //     };
  //     circle.animationTo(options);
  //   }, 3000);

  //   // global configuration
  //   const globalConfig = {
  //     speed: 30,
  //     animationSmooth: "1s ease-out",
  //     strokeBottom: 5,
  //     colorSlice: "#FF6D00",
  //     colorCircle: "#f1f1f1",
  //     round: true,
  //   };

  //   const global = new CircularProgressbar("global", globalConfig);
  //   global.initial();

  //   // update global example when change range
  //   const pieGlobal = document.querySelectorAll(".global");
  //   range.addEventListener("input", (e) => {
  //     pieGlobal.forEach((el, index) => {
  //       const options = {
  //         index: index + 1,
  //         percent: e.target.value,
  //       };
  //       global.animationTo(options);
  //     });
  //   });

  //   document.querySelectorAll("pre code").forEach((el) => {
  //     hljs.highlightElement(el);
  //   });

  //   const infoCode = document.querySelectorAll(".info-code");
  //   infoCode.forEach((info) => {
  //     info.addEventListener("click", (e) => {
  //       e.target.closest("section").classList.toggle("show-code");
  //     });
  //   });
  // });

  /*complete profile end*/
};
loadScripts();

// Disable mouse drag
// document.querySelector('.udguafr_slider').onmousedown = function(e){
//     e.preventDefault();
//     return false;
// };
