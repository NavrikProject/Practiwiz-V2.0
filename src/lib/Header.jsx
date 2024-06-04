import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userRedux.js";
import "../js/head.js";

export default function Header() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };
  const onLogoutHandler = async () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css"
        integrity="sha512-OTcub78R3msOCtY3Tc6FzeDJ8N9qvQn1Ph49ou13xgA9VsH9+LRxoFU6EqLhW4+PKRfU+/HReXmSZXHEkpYoOA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <header>
        <div className="header-wrapper">
          <div className="container-fluid">
            <nav className="navbar fixed-top mx-4 px-3 mt-3 navbar-expand-sm navbar-light bg-white">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <img src="images/logo.png" alt="" />
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  id="nav-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  <span id="bar-icon" className="navbar-toggler-icon"></span>

                  <i
                    id="close-mark-icon"
                    className="fa-solid fa-xmark d-none"
                  ></i>
                </button>
                <div
                  className="navbarmenucollapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="/mentorclub">
                        Mentor Connect
                      </a>
                    </li>
                    {/* <li className="nav-item defdweregee">
                      <a className="nav-link" href="/">
                        Training <i className="fa-solid fa-angle-down"></i>
                        <div className="duiehrr_dropdwn">
                          <ul className="edfrerteee_list bg-white p-3 d-none">
                            <li>IT TRAINING</li>

                            <li>BUSINESS TRAINING</li>
                          </ul>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/findjob">
                        Jobs
                      </a>
                    </li> */}
                  </ul>
                  <form className="d-flex iugeuirrr align-items-center">
                    <div className="udgehrr pe-3">
                      <div className="cdsfsdvnghff ijaihnifrtt position-relative">
                        <input
                          id="myInput"
                          className="form-control"
                          name="myCountry"
                          type="text"
                          placeholder="Discover Your Mentor..."
                        />

                        <i
                          className="fas fa-search position-absolute"
                          id="searchIcon"
                        ></i>

                        <div id="autosuggestions"></div>
                      </div>
                    </div>
                  </form>
                  {!user ? (
                    <form className="d-flex iugeuirrr align-items-center">
                      <div className="udgehrr">
                        <button
                          className="btn fvjhdf_btn btn-main mt-0"
                          onClick={handleLoginClick}
                        >
                          LogIn
                        </button>
                      </div>
                      <div className="udgehrr ps-3">
                        <button
                          className="btn btn-main mt-0"
                          onClick={handleClick}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div class="udgehrr position-relative ps-3">
                      <button class="btn btn-main mt-0" type="button">
                        <i class="fa-solid ps-0 fa-user"></i>
                      </button>

                      <ul class="djioerr_dpdwn bg-white position-absolute d-none p-3">
                        <li>Account Settings</li>

                        <li>View Public Profile</li>

                        <li
                          onClick={onLogoutHandler}
                          style={{ cursor: "pointer" }}
                        >
                          Log Out
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
