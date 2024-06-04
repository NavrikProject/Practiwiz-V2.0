import React from "react";

const Header2 = () => {
  return (
    <header>
      <div class="header-wrapper">
        <nav class="navbar mx-4 px-3 mt-3 navbar-expand-sm navbar-light bg-white">
          <div class="container-fluid">
            <a class="navbar-brand" href="/ ">
              <img src="images/logo.png" alt="" />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              id="nav-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span id="bar-icon" class="navbar-toggler-icon"></span>

              <i id="close-mark-icon" class="fa-solid fa-xmark d-none"></i>
            </button>

            <div
              class="navbarmenucollapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form class="d-flex iugeuirrr align-items-center">
                <div class="udgehrr pe-3">
                  <div class="cdsfsdvnghff ijaihnifrtt position-relative">
                    <input
                      id="myInput"
                      class="form-control"
                      name="myCountry"
                      type="text"
                      placeholder="Discover Your Mentor..."
                    />

                    <i
                      class="fas fa-search position-absolute"
                      id="searchIcon"
                    ></i>

                    <div id="autosuggestions"></div>
                  </div>
                </div>

                <div class="udgehrr position-relative ps-3">
                  <button class="btn btn-main mt-0" type="button">
                    <i class="fa-solid ps-0 fa-user"></i>
                  </button>

                  <ul class="djioerr_dpdwn bg-white position-absolute d-none p-3">
                    <li>Account Settings</li>

                    <li>View Public Profile</li>

                    <li>Log Out</li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header2;
