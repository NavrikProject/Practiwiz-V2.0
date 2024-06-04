import React from "react";
import Mentordashfuntion from "../Dashboard/Mentordashfuntion";
import "../Mentor.css";

const Mentordash = () => {
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

        <div className="mentor_dashboard">
          <div className="row">
            <Mentordashfuntion></Mentordashfuntion>

            <div className="col-lg-10 ps-0">
              <div className="difuhtre_content">
                <div
                  className="duiegrer_bck position-relative mb-3"
                  style={{
                    background: "url(images/ddd.png) no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="container">
                    <div className="csdpeijf d-flex justify-content-between">
                      <div className="ihuerorktrt position-relative">
                        <div className="iijieirr_left overflow-hidden">
                          <img src="./images/tarun.webp" width="100%" alt="" />
                        </div>
                      </div>

                      <div className="ljrfhf">
                        <i className="fa-solid fa-upload"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lndfhjfvgdvbfgfghgf py-5">
                  <div className="container">
                    <div className="skhfdfdfg">
                      <div className="row justify-content-between">
                        <div className="col-lg-6">
                          <div className="dfnjghjggh">
                            <div className="ghvfvdfgg">
                              <div className="gjnjfghg">
                                <h2>Tarun Gautam</h2>
                              </div>

                              <div className="njfgfghf">
                                <i className="fa-brands fa-linkedin-in"></i>
                                <i className="fa-brands fa-x-twitter"></i>
                              </div>
                            </div>

                            <div className="hfuydfgftgh">
                              <div className="gjfhg">
                                <img src="./images/ee1.png" alt="" />
                              </div>
                              <p>Business Analyst</p>
                            </div>

                            <div className="hfuydfgftgh">
                              <div className="gjfhg">
                                <img src="./images/ee2.png" alt="" />
                              </div>
                              <div className="fdjdfg">
                                <p>
                                  <span className="span121">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                  </span>

                                  <span>(3 Reviews)</span>
                                </p>
                              </div>
                            </div>

                            <div className="hfuydfgftgh">
                              <div className="gjfhg">
                                <img src="./images/tick-mark (1).png" alt="" />
                              </div>
                              <p>
                                I am currently working as a digital marketing
                                intern, have a passion for copy...
                                <span className="spnn45">Show More</span>
                              </p>
                            </div>

                            <div className="fkjhgdfbghh my-5">
                              <ul className="tabs">
                                <li
                                  className="tab-link current"
                                  data-tab="tab-9"
                                >
                                  Overview
                                </li>
                                <li className="tab-link" data-tab="tab-10">
                                  Rating & Reviews
                                </li>
                              </ul>

                              <div id="tab-9" className="tab-content current">
                                <div className="dfgbfgd">
                                  <div className="dfkjhgufgfgh">
                                    <div className="row">
                                      <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                                        <div className="lgkgg">
                                          <img
                                            src="./images/qw1 (1).png"
                                            alt=""
                                          />
                                        </div>
                                      </div>

                                      <div className="col-lg-11 col-md-11 col-sm-11 col-11">
                                        <div className="djbghdrfgfgh">
                                          <h6>Professional Experience</h6>
                                          <p>
                                            There are many variations of
                                            passages of Lorem Ipsum available,
                                            but the majority have suffered
                                            alteration in some form, by injected
                                            humour.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="dfkjhgufgfgh">
                                    <div className="row">
                                      <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                                        <div className="lgkgg">
                                          <img
                                            src="./images/qw1 (2).png"
                                            alt=""
                                          />
                                        </div>
                                      </div>

                                      <div className="col-lg-11 col-md-11 col-sm-11 col-11">
                                        <div className="djbghdrfgfgh">
                                          <h6>Expertise In</h6>
                                          <p>Career Guidance</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="dfujghffg my-5">
                                    <h4>
                                      Step-by-step Guidance To Business Analysis
                                    </h4>
                                    <div className="kfghg">
                                      <img src="./images/dcdc1.png" alt="" />
                                    </div>
                                  </div>

                                  <div className="dfujghffg">
                                    <h4>Engage With Our Top Mentor</h4>
                                    <div className="ldfuijhgfghfg">
                                      <div className="owl-carousel gfhghg owl-theme">
                                        <div className="item">
                                          <div className="jghdfrg">
                                            <div className="kmg">
                                              <img
                                                src="./images/qqq1.webp"
                                                alt=""
                                              />
                                            </div>
                                            <div className="dfhjbghfjgfgh py-3">
                                              <h4>Bhabnesh Asar</h4>

                                              <h6>Enterprice Architect</h6>

                                              <span className="pb-2">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                              </span>

                                              <p className="mb-1">
                                                10 Sessions (87 Reviews)
                                              </p>

                                              <div className="kbfhgfgfg">
                                                <button className="btn-main">
                                                  BOOK NOW
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="item">
                                          <div className="jghdfrg">
                                            <div className="kmg">
                                              <img
                                                src="./images/qqq2.webp"
                                                alt=""
                                              />
                                            </div>

                                            <div className="dfhjbghfjgfgh py-3">
                                              <h4>Gaurav Bhati</h4>

                                              <h6>Product Owner</h6>

                                              <span className="pb-2">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                              </span>

                                              <p className="mb-1">
                                                07 Sessions (57 Reviews)
                                              </p>

                                              <div className="kbfhgfgfg">
                                                <button className="btn-main">
                                                  BOOK NOW
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="tab-10" className="tab-content">
                                <div className="jfgghghhghkgkhjg">
                                  <div className="jhdfgfjgg">
                                    <div className="hghgg">
                                      <div className="djbgdfdfgh d-flex justify-content-between align-items-center">
                                        <div className="fyhugdghg d-flex justify-content-between align-items-center">
                                          <div className="kjghjfg me-2">
                                            <img
                                              src="./images/rrrr1.png"
                                              alt=""
                                            />
                                          </div>

                                          <div className="ihceuirr mt-3">
                                            <h4>Anwesha Sinha</h4>

                                            <div className="fgnhjghjgh">
                                              <span>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                              </span>
                                              <p>
                                                <i className="fa-solid fa-calendar-days"></i>
                                                17/03/2024
                                              </p>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="gnhjbggf">
                                          <a href="/">View Profile</a>
                                        </div>
                                      </div>

                                      <div className="dfkjbghdfffg">
                                        <p>
                                          As a business analyst professional, I
                                          feel very lucky to have Tarun Sir as
                                          my mentor. I got in-depth knowledge
                                          about the subject. It helps me to cope
                                          with the dynamicity of it quite
                                          beautifully. His dedication to
                                          mentoring the students is excellent.
                                          If somebody asks to me for a business
                                          analyst mentor I will surely take 
                                          Gautam sir’s name.
                                        </p>
                                      </div>
                                    </div>

                                    <div className="hghgg mt-3">
                                      <div className="djbgdfdfgh d-flex justify-content-between align-items-center">
                                        <div className="fyhugdghg d-flex justify-content-between align-items-center">
                                          <div className="kjghjfg me-2">
                                            <img
                                              src="./images/rrrr2.png"
                                              alt=""
                                            />
                                          </div>

                                          <div className="ihceuirr mt-3">
                                            <h4>Tithi Mishra</h4>

                                            <div className="fgnhjghjgh">
                                              <span>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                              </span>
                                              <p>
                                                <i className="fa-solid fa-calendar-days"></i>
                                                17/03/2024
                                              </p>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="gnhjbggf">
                                          <a href="/">View Profile</a>
                                        </div>
                                      </div>

                                      <div className="dfkjbghdfffg">
                                        <p>
                                          I was at first in a confusion
                                          regarding the subject matter of
                                          business analytics. The first-day
                                          introduction from Gautam Sir’s part
                                          made all my confusion clear. He is in
                                          a true sense a Pole star in the
                                          business analytics domain.
                                        </p>
                                      </div>
                                    </div>

                                    <div className="dfujghffg">
                                      <h4>
                                        Step-by-step Guidance To Business
                                        Analysis
                                      </h4>
                                      <div className="kfghg">
                                        <img src="./images/dcdc1.png" alt="" />
                                      </div>
                                    </div>

                                    <div className="dfujghffg">
                                      <h4>Engage With Our Top Mentor</h4>
                                      <div className="ldfuijhgfghfg">
                                        <div className="owl-carousel gfhghg owl-theme">
                                          <div className="item">
                                            <div className="jghdfrg">
                                              <div className="kmg">
                                                <img
                                                  src="./images/qqq1.webp"
                                                  alt=""
                                                />
                                              </div>

                                              <div className="dfhjbghfjgfgh py-3">
                                                <h4>Bhabnesh Asar</h4>

                                                <h6>Enterprice Architect</h6>

                                                <span className="pb-2">
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                </span>

                                                <p className="mb-1">
                                                  10 Sessions (87 Reviews)
                                                </p>

                                                <div className="kbfhgfgfg">
                                                  <button className="btn-main">
                                                    BOOK NOW
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="item">
                                            <div className="jghdfrg">
                                              <div className="kmg">
                                                <img
                                                  src="./images/qqq2.webp"
                                                  alt=""
                                                />
                                              </div>

                                              <div className="dfhjbghfjgfgh py-3">
                                                <h4>Gaurav Bhati</h4>

                                                <h6>Product Owner</h6>

                                                <span className="pb-2">
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                  <i className="fa-solid fa-star"></i>
                                                </span>

                                                <p className="mb-1">
                                                  07 Sessions (57 Reviews)
                                                </p>

                                                <div className="kbfhgfgfg">
                                                  <button className="btn-main">
                                                    BOOK NOW
                                                  </button>
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

                        <div className="col-lg-4">
                          <div className="hgkfgkjfgfghgfg sticky-top">
                            <h3>Skills</h3>
                            <div className="fhfbfghg">
                              <button>Decision-Making</button>
                              <button>Communication</button>
                              <button>Adaptability</button>
                              <button>Emotional Intelligence</button>
                              <button>Critical and Analytical Thinking</button>
                            </div>

                            <div className="fkjbghdfgfghghjygh p-4">
                              <div className="fjbgfg">
                                <h4 className="mt-3 mb-4">
                                  Mentor Availability
                                </h4>
                              </div>

                              <div className="ghjfgghgf">
                                <div className="owl-carousel ghghtyh owl-theme">
                                  <div className="item">
                                    <div className="fdf">
                                      <table style={{ width: "100%" }}>
                                        <thead>
                                          <tr>
                                            <th>SUN</th>
                                            <th>MON</th>
                                            <th>TUE</th>
                                            <th>WED</th>
                                            <th>THU</th>
                                            <th>FRI</th>
                                            <th>SAT</th>
                                          </tr>
                                        </thead>

                                        <tbody>
                                          <tr>
                                            <td>
                                              <span className="ihgh">01</span>
                                            </td>
                                            <td>02</td>
                                            <td>03</td>
                                            <td>04</td>
                                            <td>05</td>
                                            <td>06</td>
                                            <td>07</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>

                                  <div className="item">
                                    <div className="fdf">
                                      <table style={{ width: "100%" }}>
                                        <thead>
                                          <tr>
                                            <th>SUN</th>
                                            <th>MON</th>
                                            <th>TUE</th>
                                            <th>WED</th>
                                            <th>THU</th>
                                            <th>FRI</th>
                                            <th>SAT</th>
                                          </tr>
                                        </thead>

                                        <tbody>
                                          <tr>
                                            <td>
                                              <span className="ihgh">01</span>
                                            </td>
                                            <td>02</td>
                                            <td>03</td>
                                            <td>04</td>
                                            <td>05</td>
                                            <td>06</td>
                                            <td>07</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>

                                  <div className="item">
                                    <div className="fdf">
                                      <table style={{ width: "100%" }}>
                                        <thead>
                                          <tr>
                                            <th>SUN</th>
                                            <th>MON</th>
                                            <th>TUE</th>
                                            <th>WED</th>
                                            <th>THU</th>
                                            <th>FRI</th>
                                            <th>SAT</th>
                                          </tr>
                                        </thead>

                                        <tbody>
                                          <tr>
                                            <td>
                                              <span className="ihgh">01</span>
                                            </td>
                                            <td>02</td>
                                            <td>03</td>
                                            <td>04</td>
                                            <td>05</td>
                                            <td>06</td>
                                            <td>07</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="bhghh">
                                <div className="lkfhgfgf">
                                  <h5>Choose The Time Slot:</h5>

                                  <button className="btngdfr">
                                    13:00 - 17:30
                                  </button>

                                  <div className="dfghjffg mt-3">
                                    <button className="btn btn-main">
                                      BOOK NOW
                                    </button>
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
    </>
  );
};

export default Mentordash;
