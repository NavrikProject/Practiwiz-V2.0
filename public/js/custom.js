/* start typing  js */

// these phrases will repeat
const phrases = [
  "Learn Data-driven Bussiness Insights",
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

/* end typing  js*/

/* job tab content start */

const tabsBtns = Array.from(document.querySelectorAll("[data-tab-id]"));
const tabs = Array.from(document.querySelectorAll("[data-tab]"));

let selectedTab = tabsBtns[0].dataset.tabId;

const hideTabs = () => {
  tabs
    .filter((tab) => tab.dataset.tab !== selectedTab)
    .forEach((tab) => {
      tab.classList.add("tabs__tab--hide");
    });

  tabsBtns
    .filter((tab) => tab.dataset.tabId !== selectedTab)
    .forEach((tab) => {
      tab.classList.add("tabs__tab-btn--not-selected");
    });
};
hideTabs();

const handleSelectTab = (e) => {
  selectedTab = e.target.dataset.tabId;

  tabs.forEach((tab) => {
    tab.classList.remove("tabs__tab--hide");
  });

  tabsBtns.forEach((tab) => {
    tab.classList.remove("tabs__tab-btn--not-selected");
  });

  hideTabs();
};

tabsBtns.forEach((btn) => {
  btn.addEventListener("click", handleSelectTab);
});

/* job tab content end */

/*section 4 designed tab pill content start*/

function openTab(tabName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tab");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }
  document.getElementById(tabName + "Content").style.display = "block";
  event.currentTarget.classList.add("active");
}

/*section 4 designed tab pill content end*/

/*s5 start*/

$(document).ready(function () {
  $(".tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    $(".tabs li").removeClass("cccccsa");
    $(".tab-contentsa").removeClass("cccccsa");

    $(this).addClass("cccccsa");
    $("#" + tab_id).addClass("cccccsa");
  });
});

/*s5 end*/
