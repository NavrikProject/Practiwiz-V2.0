// document.addEventListener("DOMContentLoaded", function () {
//   const header = document.querySelector("header-wrapper");
//   const nrmlLogo = document.querySelector("#dbgheuirbr-image-a");
//   const chngeLogo = document.querySelector("#dbgheuirbr-image-b");
//   const navToggle = document.querySelector("#nav-toggler");
//   const navExpand = document.querySelector("#navbarSupportedContent");
//   const barIcon = document.querySelector("#bar-icon");
//   const closeIcon = document.querySelector("#close-mark-icon");

//   if (
//     header &&
//     nrmlLogo &&
//     chngeLogo &&
//     navToggle &&
//     navExpand &&
//     barIcon &&
//     closeIcon
//   ) {
//     window.addEventListener("scroll", function () {
//       if (window.scrollY > 50) {
//         header.classList.add("headeractive");
//         nrmlLogo.classList.add("d-none");
//         chngeLogo.classList.remove("d-none");
//       } else {
//         header.classList.remove("headeractive");
//         nrmlLogo.classList.remove("d-none");
//         chngeLogo.classList.add("d-none");
//       }
//     });

//     navToggle.addEventListener("click", function () {
//       navExpand.classList.toggle("navbarmenucollapse");
//       barIcon.classList.toggle("navbar-toggler-icon");
//       closeIcon.classList.toggle("d-none");
//     });
//   } else {
//     console.error("One or more elements not found in the DOM:");
//     if (!header) console.error("Header element not found");
//     if (!nrmlLogo) console.error("Normal logo element not found");
//     if (!chngeLogo) console.error("Changed logo element not found");
//     if (!navToggle) console.error("Nav toggle element not found");
//     if (!navExpand) console.error("Nav expand element not found");
//     if (!barIcon) console.error("Bar icon element not found");
//     if (!closeIcon) console.error("Close icon element not found");
//   }
// });

/*document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      // Change 100 to whatever scroll position you prefer
      header.classList.add("headeractive");
    } else {
      header.classList.remove("headeractive");
    }
  });
});

const navToggle = document.querySelector("#nav-toggler");

document.addEventListener("DOMContentLoaded", function () {
  const navExpand = document.querySelector("#navbarSupportedContent");

  navToggle.addEventListener("click", function () {
    if (navExpand.classList.contains("navbarmenucollapse")) {
      navExpand.classList.remove("navbarmenucollapse");
    } else {
      navExpand.classList.add("navbarmenucollapse");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const barIcon = document.querySelector("#bar-icon");
  const closeIcon = document.querySelector("#close-mark-icon");
  const navToggle = document.querySelector("#nav-toggle");

  navToggle.addEventListener("click", function () {
    if (barIcon.classList.contains("navbar-toggler-icon")) {
      barIcon.classList.remove("navbar-toggler-icon");
      closeIcon.classList.remove("d-none");
    } else {
      barIcon.classList.add("navbar-toggler-icon");
      closeIcon.classList.add("d-none");
    }
  });
});*/
