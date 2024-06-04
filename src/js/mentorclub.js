const loadScripts = async () => {
  document.addEventListener("DOMContentLoaded", function () {
    const bmFltrBtn = document.querySelector("#bmfltrbtn");
    const bmFltrDrpdwn = document.querySelector("#bm-filter-drpdwn");

    bmFltrBtn.addEventListener("click", function () {
      if (bmFltrDrpdwn.classList.contains("d-none")) {
        bmFltrDrpdwn.classList.remove("d-none");
      } else {
        bmFltrDrpdwn.classList.add("d-none");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const bmFltrBtn2 = document.querySelector("#bmfltrbtn2");
    const bmFltrDrpdwn2 = document.querySelector("#bm-filter-drpdwn2");

    bmFltrBtn2.addEventListener("click", function () {
      if (bmFltrDrpdwn2.classList.contains("d-none")) {
        bmFltrDrpdwn2.classList.remove("d-none");
      } else {
        bmFltrDrpdwn2.classList.add("d-none");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const bmFltrBtn3 = document.querySelector("#bmfltrbtn3");
    const bmFltrDrpdwn3 = document.querySelector("#bm-filter-drpdwn3");

    bmFltrBtn3.addEventListener("click", function () {
      if (bmFltrDrpdwn3.classList.contains("d-none")) {
        bmFltrDrpdwn3.classList.remove("d-none");
      } else {
        bmFltrDrpdwn3.classList.add("d-none");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const bmFltrBtn4 = document.querySelector("#bmfltrbtn4");
    const bmFltrDrpdwn4 = document.querySelector("#bm-filter-drpdwn4");

    bmFltrBtn4.addEventListener("click", function () {
      if (bmFltrDrpdwn4.classList.contains("d-none")) {
        bmFltrDrpdwn4.classList.remove("d-none");
      } else {
        bmFltrDrpdwn4.classList.add("d-none");
      }
    });
  });
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("digerier-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("digerier-tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // Open the default tab on page load
  document.getElementById("digerier-tab-1").style.display = "block";
  document.getElementsByClassName("digerier-tab")[0].classList.add("active");

  document.addEventListener("DOMContentLoaded", function () {
    var bmFicclBtn = document.querySelector("#fuygernert");
    var bmResFil = document.querySelector("#bmresfil");

    bmFicclBtn.addEventListener("click", function () {
      if (bmResFil.classList.contains("uihdfnihre")) {
        bmResFil.classList.remove("uihdfnihre");
      } else {
        bmResFil.classList.add("uihdfnihre");
      }
    });
  });
};
loadScripts();
