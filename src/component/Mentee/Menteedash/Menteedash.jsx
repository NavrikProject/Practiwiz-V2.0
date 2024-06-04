import React from "react";
import "./Menteedash.css";
import Menteedashfuntion from "../DashboardM/Menteedashfuntion";

const ManteeDash = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="md-header">
        <header>
          <div className="header-wrapper">
            <nav className="navbar mx-4 px-3 mt-3 navbar-expand-sm navbar-light bg-white">
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
                  <form className="d-flex iugeuirrr align-items-center">
                    <div className="udgehrr pe-3">
                      <div className="cdsfsdvnghff position-relative">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Discover Your Mentor..."
                        />

                        <i className="fa-solid fa-magnifying-glass position-absolute"></i>
                      </div>
                    </div>

                    <div className="udgehrr position-relative ps-3">
                      <button className="btn btn-main mt-0" type="button">
                        <i className="fa-solid ps-0 fa-user"></i>
                      </button>

                      <ul className="djioerr_dpdwn bg-white position-absolute d-none p-3">
                        <li>Account Settings</li>

                        <li>View Public Profile</li>

                        <li>Log Out</li>
                      </ul>
                    </div>
                  </form>
                </div>

                <div className="odejr_res d-none">
                  <div className="d-flex align-items-center">
                    <div className="udgehrr position-relative me-3 ps-3">
                      <button className="btn btn-main mt-0" type="button">
                        <i className="fa-solid ps-0 fa-user"></i>
                      </button>

                      <ul className="djioerr_dpdwn bg-white position-absolute d-none p-3">
                        <li>Account Settings</li>

                        <li>View Public Profile</li>

                        <li>Log Out</li>
                      </ul>
                    </div>

                    <div
                      className="dashboard-side-bar"
                      id="responsive-side-bar"
                    >
                      <i className="fa-solid fa-2x fa-bars-staggered"></i>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {/* middle start */}

        <div className="mentor_dashboard">
          <div className="row">
            <Menteedashfuntion></Menteedashfuntion>
            <div className="col-lg-10 ps-0">
              <div className="difuhtre_content">
                <div
                  className="duiegrer_bck position-relative mb-3"
                  style={{
                    background: "url(images/ddd.png) no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="container-fluid">
                    <div className="csdpeijf d-flex justify-content-between">
                      <div className="ihuerorktrt position-relative">
                        <div className="iijieirr_left overflow-hidden">
                          <img src="images/annesa.webp" width="100%" alt="" />
                        </div>
                      </div>

                      <div className="ljrfhf">
                        <i className="fa-solid fa-upload"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lndfhjfvgdvbfgfghgf pt-5">
                  <div className="container">
                    <div className="skhfdfdfg">
                      <div className="row justify-content-between">
                        <div className="col-lg-7">
                          <div className="dfnjghjggh">
                            <div className="ghvfvdfgg">
                              <div className="gjnjfghg">
                                <h2 className="mb-2">Anwesha Sinha</h2>
                              </div>

                              <div className="njfgfghf">
                                <i className="fa-brands me-2 fa-linkedin-in"></i>

                                <i className="fa-brands fa-x-twitter"></i>
                              </div>
                            </div>

                            <div className="hfuydfgftgh d-flex align-items-center mb-2">
                              <div className="gjfhg me-2">
                                <img src="./images/ii1.png" alt="" />
                              </div>

                              <p className="mb-0">Digital Marketing</p>
                            </div>

                            <div className="hfuydfgftgh d-flex align-items-center mb-2">
                              <div className="gjfhg me-2">
                                <img src="./images/ii2.png" alt="" />
                              </div>

                              <p className="mb-0">
                                Working Professional{" "}
                                <span className="spnrr">
                                  (Working at XYZ company)
                                </span>
                              </p>
                            </div>

                            <div className="hfuydfgftgh d-flex mb-2">
                              <div className="gjfhg me-2">
                                <img src="./images/ii4.png" alt="" />
                              </div>

                              <p className="mb-0">
                                I am currently working as a digital marketing
                                intern, have a passion for copy...{" "}
                                <span className="spnn45">Show More</span>
                              </p>
                            </div>

                            <div className="jgufgfhghjg my-5">
                              <h4 className="mb-3">Skills</h4>

                              <div className="hjuyfgdfggh">
                                <button>PHP</button>

                                <button>Laravel</button>

                                <button>Javascript</button>

                                <button>jquery</button>

                                <button>React</button>

                                <button>Flutter</button>

                                <button>Wordpress</button>
                              </div>
                            </div>

                            <div className="jnfhujydfgfghfh">
                              <div className="lgjgf align-items-center mb-3">
                                <div className="mgjhg me-3">
                                  <img src="./images/experiece.png" alt="" />
                                </div>

                                <h3 className="mb-0">Work Experience</h3>
                              </div>

                              <div className="gkjnhfgfg">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="gfgh">
                                      <h6>Product Designer</h6>
                                      <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="gfgh">
                                      <h6>Product Designer</h6>
                                      <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="jnfhujydfgfghfh py-3">
                              <div className="lgjgf3 align-items-center mb-3">
                                <div className="mgjhg me-3">
                                  <img
                                    src="./images/certification.png"
                                    alt=""
                                  />
                                </div>

                                <h3 className="mb-0">Certification</h3>
                              </div>

                              <div className="gkjnhfgfg">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="gfgh">
                                      <h6>Certification in Content Writing</h6>
                                      <p>
                                        There are many variations of passages of
                                        Lorem Ipsum available, but the majority
                                        have suffered alteration in some form
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="gdfgghjhhjkjh">
                            <div className="duiegrrrr_wrapper text-center px-5 pb-5">
                              <h5 className="mb-3">Complete Your Profile</h5>

                              <div className="udgerrrr_perc">
                                <input
                                  type="range"
                                  value="80"
                                  min="0"
                                  max="100"
                                  step="1"
                                  className="d-none"
                                />

                                <section>
                                  <div
                                    className="pie m-auto"
                                    data-pie='{ "percent": 80, "colorSlice": "var(--main-orange-color)", "colorCircle": "#FFDDCB", "fontWeight": 100 }'
                                  ></div>
                                </section>
                              </div>
                            </div>

                            <div className="dfkjbgdfgg">
                              <div className="nggh mb-3">
                                <h5>Personal Details</h5>
                              </div>

                              <div className="mfbghffghg py-2">
                                <div className="doiherer d-flex align-items-center">
                                  <div className="jnhfgjhf me-2">
                                    <img src="./images/ll1.png" alt="" />
                                  </div>

                                  <h6 className="mb-0">Experience:</h6>
                                </div>

                                <p className="mb-0">0-2 Years</p>
                              </div>

                              <div className="mfbghffghg py-2">
                                <div className="doiherer d-flex align-items-center">
                                  <div className="jnhfgjhf me-2">
                                    <img src="./images/ll2.png" alt="" />
                                  </div>

                                  <h6 className="mb-0">Age:</h6>
                                </div>

                                <p className="mb-0">25 Years</p>
                              </div>

                              <div className="mfbghffghg py-2">
                                <div className="doiherer d-flex align-items-center">
                                  <div className="jnhfgjhf me-2">
                                    <img src="./images/ll3.png" alt="" />
                                  </div>

                                  <h6 className="mb-0">Gender:</h6>
                                </div>

                                <p className="mb-0">Female</p>
                              </div>

                              <div className="mfbghffghg py-2">
                                <div className="doiherer d-flex align-items-center">
                                  <div className="jnhfgjhf me-2">
                                    <img src="./images/ll4.png" alt="" />
                                  </div>

                                  <h6 className="mb-0">Language:</h6>
                                </div>

                                <p className="mb-0">English,Hindi,Bengali</p>
                              </div>

                              <div className="mfbghffghg py-2">
                                <div className="doiherer d-flex align-items-center">
                                  <div className="jnhfgjhf me-2">
                                    <img src="./images/ll5.png" alt="" />
                                  </div>

                                  <h6 className="mb-0">Educational Level:</h6>
                                </div>

                                <p className="mb-0">Master Degree</p>
                              </div>
                            </div>

                            <div className="jnfhujydfgfghfh my-4">
                              <div className="lgjgf2 align-items-center mb-3">
                                <div className="mgjhg me-3">
                                  <img src="./images/edu.png" alt="" />
                                </div>

                                <h3 className="mb-0">Education</h3>
                              </div>

                              <div className="gkjnhfgfg">
                                <div className="row">
                                  <div className="col-lg-6">
                                    <div className="gfgh">
                                      <h6>Bachelors in Fins Arts</h6>
                                      <p>College/ School 2010-2012</p>
                                    </div>
                                  </div>
                                  <div className="col-lg-6">
                                    <div className="gfgh">
                                      <h6>Bachelors in Fins Arts</h6>
                                      <p>College/ School 2010-2012</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*middle end*/}
      </div>
    </>
  );
};

export default ManteeDash;
