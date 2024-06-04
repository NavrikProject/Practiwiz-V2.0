import React from "react";
import { useState } from "react";
import "./FindJob.css";

const FindJob = () => {
  const [selectedOption, setSelectedOption] = useState("0"); // Default value is "Sort By"

  const handleSortChange = (e) => {
    setSelectedOption(e.target.value);
    // You can add sorting logic here based on the selected option
  };

  const handleClearAll = () => {
    setSelectedOption("0"); // Reset to default option
    // You can add logic here to clear any other filters or selections
  };

  const renderSelectedOptionText = () => {
    switch (selectedOption) {
      case "1":
        return "Latest Jobs";
      case "2":
        return "Older Jobs";
      case "3":
        return "30+ Days";
      default:
        return "Sort By";
    }
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />

      <div className="aslkhghj">
        <div className="container-fluid px-5">
          <div className="jgfgfg">
            <h2>Find Job</h2>
            <p>THE DOOR OF SUCCESS IS A CLICK AWAY FROM YOU</p>
          </div>
        </div>
      </div>

      {/* Responsive filter start */}
      <div
        className="khgjfgfhg2252 iuheirhggg_ihberr ugenhuhrtniu d-none"
        id="duygerncrttt"
      >
        <div className="knjghjfggfgfghgh">
          <div className="huirebff_close">
            <i className="fa-solid fa-circle-xmark" id="close-filter"></i>
          </div>

          <div className="label2">Search by Keywords</div>

          <div className="inputWithIcon">
            <input type="text" placeholder="Job title, keywords, or company" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="knjghjfggfgfghgh">
          <div className="label2">Location</div>
          <div className="inputWithIcon">
            <input type="text" placeholder="City or postcode" />
            <i className="fa-solid fa-location-arrow"></i>
          </div>
        </div>

        <div className="knjghjfggfgfghgh">
          <div className="label2">Category</div>
          <div className="inputWithIcon">
            <input type="text" placeholder="Choose a category" />
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </div>

        <div className="njghbfgfhhg">
          <h4>Job Type</h4>

          <div className="oidjaioerr">
            <div className="gghfthghdf">
              <div className="hfghgf225">
                <label className="toggleSwitch nolabel" onClick="">
                  <input type="checkbox" />
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                </label>
              </div>

              <div className="khgjfgf">
                <p>Freelance</p>
              </div>
            </div>

            <div className="gghfthghdf">
              <div className="hfghgf225">
                <label className="toggleSwitch nolabel" onclick="">
                  <input type="checkbox" />
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                </label>
              </div>

              <div className="khgjfgf">
                <p>Fulltime</p>
              </div>
            </div>

            <div className="gghfthghdf">
              <div className="hfghgf225">
                <label className="toggleSwitch nolabel" onclick="">
                  <input type="checkbox" />
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                </label>
              </div>

              <div className="khgjfgf">
                <p>PartTime</p>
              </div>
            </div>

            <div className="gghfthghdf">
              <div className="hfghgf225">
                <label className="toggleSwitch nolabel" onclick="">
                  <input type="checkbox" />
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                </label>
              </div>

              <div className="khgjfgf">
                <p>Temporary</p>
              </div>
            </div>

            <div className="gghfthghdf">
              <div className="hfghgf225">
                <label className="toggleSwitch nolabel" onclick="">
                  <input type="checkbox" />
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                </label>
              </div>

              <div className="khgjfgf">
                <p>Temporary</p>
              </div>
            </div>

            <div className="gghfthghdf">
              <div className="hfghgf225">
                <label className="toggleSwitch nolabel" onclick="">
                  <input type="checkbox" />
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                </label>
              </div>

              <div className="khgjfgf">
                <p>Temporary</p>
              </div>
            </div>
          </div>
        </div>

        {/* Date Posted */}

        <div className="mkdfhgjgh">
          <h4>Date Posted</h4>

          <div className="klfgf">
            <form action="#">
              <p>
                <input type="radio" id="test1" name="radio-group" default />
                <label htmlFor="test1">All</label>
              </p>

              <p>
                <input type="radio" id="test2" name="radio-group" />
                <label htmlFor="test2">Last Posted</label>
              </p>

              <p>
                <input type="radio" id="test3" name="radio-group" />
                <label htmlFor="test3">Last 24 Hour</label>
              </p>

              <p>
                <input type="radio" id="test4" name="radio-group" />
                <label htmlFor="test4">Last 7 Hour</label>
              </p>

              <p>
                <input type="radio" id="test5" name="radio-group" />
                <label htmlFor="test5">Last 14 Hour</label>
              </p>

              <p>
                <input type="radio" id="test6" name="radio-group" />
                <label htmlFor="test6">Last 30 Hour</label>
              </p>

              <p>
                <input type="radio" id="test7" name="radio-group" />
                <label htmlFor="test7">Last 30 Hour</label>
              </p>

              <p>
                <input type="radio" id="test8" name="radio-group" />
                <label htmlFor="test8">Last 30 Hour</label>
              </p>
            </form>
          </div>
        </div>
        {/*Experience */}

        <div className="kjghfhgj">
          <h4>Experience Level</h4>

          <div className="klfgf">
            <div className="gghfthghdf">
              <div className="hfghgf225">
                <label className="toggleSwitch nolabel" onClick="">
                  <input type="checkbox" default />
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                </label>
              </div>

              <div className="khgjfgf">
                <p>Freshers</p>
              </div>
            </div>

            <div className="gghfthghdf">
              <div className="hfghgf225">
                <label className="toggleSwitch nolabel" onClick="">
                  <input type="checkbox" default />
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                </label>
              </div>

              <div className="khgjfgf">
                <p>1 Year</p>
              </div>
            </div>

            <div className="gghfthghdf">
              <div className="hfghgf225">
                <label className="toggleSwitch nolabel" onClick="">
                  <input type="checkbox" default />
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                </label>
              </div>

              <div className="khgjfgf">
                <p>2 Year</p>
              </div>
            </div>

            <div className="gghfthghdf">
              <div className="hfghgf225">
                <label className="toggleSwitch nolabel" onClick="">
                  <input type="checkbox" default />
                  <span>
                    <span></span>
                    <span></span>
                  </span>
                </label>
              </div>

              <div className="khgjfgf">
                <p>Freelance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lkrhhdfgfdfgfhf">
        <div className="container-fluid px-5">
          <div className="dkjbghdfgfd">
            <div className="row">
              <div className="col-lg-3">
                <div className="khgjfgfhg2252 sticky-top">
                  <div className="knjghjfggfgfghgh">
                    <div className="label2">Search by Keywords</div>
                    <div className="inputWithIcon">
                      <input
                        type="text"
                        placeholder="Job title, keywords, or company"
                      />
                      <i className="fa-solid fa-magnifying-glass" />
                    </div>
                  </div>
                  <div className="knjghjfggfgfghgh">
                    <div className="label2">Location</div>
                    <div className="inputWithIcon">
                      <input type="text" placeholder="City or postcode" />
                      <i className="fa-solid fa-location-arrow" />
                    </div>
                  </div>
                  <div className="knjghjfggfgfghgh">
                    <div className="label2">Category</div>
                    <div className="inputWithIcon">
                      <input type="text" placeholder="Choose a category" />
                      <i className="fa-solid fa-bag-shopping" />
                    </div>
                  </div>
                  <div className="njghbfgfhhg">
                    <h4>Job Type</h4>
                    <div className="oidjaioerr">
                      <div className="gghfthghdf">
                        <div className="hfghgf225">
                          <label className="toggleSwitch nolabel" onclick="">
                            <input type="checkbox" />
                            <span>
                              <span />
                              <span />
                            </span>
                            <a></a>
                          </label>
                        </div>
                        <div className="khgjfgf">
                          <p>Freelance</p>
                        </div>
                      </div>
                      <div className="gghfthghdf">
                        <div className="hfghgf225">
                          <label className="toggleSwitch nolabel" onclick="">
                            <input type="checkbox" />
                            <span>
                              <span />
                              <span />
                            </span>
                            <a />
                          </label>
                        </div>
                        <div className="khgjfgf">
                          <p>Fulltime</p>
                        </div>
                      </div>
                      <div className="gghfthghdf">
                        <div className="hfghgf225">
                          <label className="toggleSwitch nolabel" onclick="">
                            <input type="checkbox" />
                            <span>
                              <span />
                              <span />
                            </span>
                            <a />
                          </label>
                        </div>
                        <div className="khgjfgf">
                          <p>PartTime</p>
                        </div>
                      </div>
                      <div className="gghfthghdf">
                        <div className="hfghgf225">
                          <label className="toggleSwitch nolabel" onclick="">
                            <input type="checkbox" />
                            <span>
                              <span />
                              <span />
                            </span>
                            <a />
                          </label>
                        </div>
                        <div className="khgjfgf">
                          <p>Temporary</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<div className="mkdfhgjgh">*/}
                  {/*    <h4>Date Posted</h4>*/}
                  {/*    <div className="klfgf">*/}
                  {/*        <form action="#">*/}
                  {/*            <p>*/}
                  {/*              <input type="radio" id="test1" name="radio-group"  >*/}
                  {/*              <label for="test1">All</label>*/}
                  {/*            </p>*/}
                  {/*            <p>*/}
                  {/*              <input type="radio" id="test2" name="radio-group">*/}
                  {/*              <label for="test2">Last Posted</label>*/}
                  {/*            </p>*/}
                  {/*            <p>*/}
                  {/*              <input type="radio" id="test3" name="radio-group">*/}
                  {/*              <label for="test3">Last 24 Hour</label>*/}
                  {/*            </p>*/}
                  {/*            <p>*/}
                  {/*                <input type="radio" id="test4" name="radio-group">*/}
                  {/*                <label for="test4">Last 7 Hour</label>*/}
                  {/*            </p>*/}
                  {/*            <p>*/}
                  {/*                <input type="radio" id="test5" name="radio-group">*/}
                  {/*                <label for="test5">Last 14 Hour</label>*/}
                  {/*            </p>*/}
                  {/*            <p>*/}
                  {/*                <input type="radio" id="test6" name="radio-group">*/}
                  {/*                <label for="test6">Last 30 Hour</label>*/}
                  {/*            </p>*/}
                  {/*            <p>*/}
                  {/*                <input type="radio" id="test6" name="radio-group">*/}
                  {/*                <label for="test6">Last 30 Hour</label>*/}
                  {/*            </p>*/}
                  {/*            <p>*/}
                  {/*                <input type="radio" id="test6" name="radio-group">*/}
                  {/*                <label for="test6">Last 30 Hour</label>*/}
                  {/*            </p>*/}
                  {/*        </form>*/}
                  {/*    </div>*/}
                  {/*</div>*/}
                  <div className="kjghfhgj">
                    <h4>Date Posted</h4>
                    <div className="klfgf">
                      <div className="gghfthghdf">
                        <div className="hfghgf225">
                          <label className="toggleSwitch nolabel" onclick="">
                            <input type="checkbox" />
                            <span>
                              <span />
                              <span />
                            </span>
                            <a />
                          </label>
                        </div>
                        <div className="khgjfgf">
                          <p>All</p>
                        </div>
                      </div>
                      <div className="gghfthghdf">
                        <div className="hfghgf225">
                          <label className="toggleSwitch nolabel" onclick="">
                            <input type="checkbox" />
                            <span>
                              <span />
                              <span />
                            </span>
                            <a />
                          </label>
                        </div>
                        <div className="khgjfgf">
                          <p>Last Posted</p>
                        </div>
                      </div>
                      <div className="gghfthghdf">
                        <div className="hfghgf225">
                          <label className="toggleSwitch nolabel" onclick="">
                            <input type="checkbox" />
                            <span>
                              <span />
                              <span />
                            </span>
                            <a />
                          </label>
                        </div>
                        <div className="khgjfgf">
                          <p>Last 24 Hour</p>
                        </div>
                      </div>
                      <div className="gghfthghdf">
                        <div className="hfghgf225">
                          <label className="toggleSwitch nolabel" onclick="">
                            <input type="checkbox" />
                            <span>
                              <span />
                              <span />
                            </span>
                            <a />
                          </label>
                        </div>
                        <div className="khgjfgf">
                          <p>Last 7 Hour</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="kjghfhgj">
                    <h4>Experience Level</h4>
                    <div className="klfgf">
                      <div className="gghfthghdf">
                        <div className="hfghgf225">
                          <label className="toggleSwitch nolabel" onclick="">
                            <input type="checkbox" />
                            <span>
                              <span />
                              <span />
                            </span>
                            <a />
                          </label>
                        </div>
                        <div className="khgjfgf">
                          <p>Freshers</p>
                        </div>
                      </div>
                      <div className="gghfthghdf">
                        <div className="hfghgf225">
                          <label className="toggleSwitch nolabel" onclick="">
                            <input type="checkbox" />
                            <span>
                              <span />
                              <span />
                            </span>
                            <a />
                          </label>
                        </div>
                        <div className="khgjfgf">
                          <p>1 Year</p>
                        </div>
                      </div>
                      <div className="gghfthghdf">
                        <div className="hfghgf225">
                          <label className="toggleSwitch nolabel" onclick="">
                            <input type="checkbox" />
                            <span>
                              <span />
                              <span />
                            </span>
                            <a />
                          </label>
                        </div>
                        <div className="khgjfgf">
                          <p>2 Year</p>
                        </div>
                      </div>
                      <div className="gghfthghdf">
                        <div className="hfghgf225">
                          <label className="toggleSwitch nolabel" onclick="">
                            <input type="checkbox" />
                            <span>
                              <span />
                              <span />
                            </span>
                            <a />
                          </label>
                        </div>
                        <div className="khgjfgf">
                          <p>Freelance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="ihdsrfgbg pt-3">
                  <div className="csdfygtyy d-flex justify-content-between mb-4">
                    <h5 className="mb-0">SHOWING 7 JOBS</h5>

                    <div className="cfbghed d-none" id="uidgerr_text">
                      <i className="fa-solid fa-filter"></i> Filter by
                    </div>

                    <div className="dieirherr_btn">
                      <div
                        className="custom-select sfgrwwe_btn btn btn-main me-2"
                        style={{ width: "14rem" }}
                      >
                        <select
                          value={selectedOption}
                          onChange={handleSortChange}
                        >
                          <option value="0">Sort By</option>
                          <option value="1">Latest Jobs</option>
                          <option value="2">Older Jobs</option>
                          <option value="3">30+ Days</option>
                        </select>
                        <div className="select-selected">
                          {renderSelectedOptionText()}
                        </div>
                      </div>

                      <button className="btn btn-main" onClick={handleClearAll}>
                        Clear All
                        <span>
                          <i className="fa-solid ms-2 fa-circle-xmark"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12 mb-4">
                    <div className="kjdhhjgd p-3">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-4">
                          <div className="hjgfdfg">
                            <img src="./images/download (21).webp" alt="" />
                          </div>
                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-12 ps-lg-0 ps-sm-2">
                          <div className="kfhgjfgfh mb-2 d-flex align-items-center justify-content-between">
                            <div className="jhgjgf">
                              <h4 className="mb-0">Sr. PHP Developer</h4>
                            </div>

                            <div className="jhgjgf1">
                              <div className="mhgf position-relative text-center">
                                <i className="fa-regular fa-bookmark position-absolute"></i>
                              </div>
                            </div>
                          </div>

                          <div className="nfhjdfghfdghf mb-3">
                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-location-arrow me-1"></i>{" "}
                                Newtown,kolkata
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-sack-dollar me-1"></i>{" "}
                                $24k-$30k
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-bag-shopping me-1"></i>{" "}
                                4yr. Exp.
                              </p>
                            </button>

                            <button className="rlknjhgjfg1 oidefrgtry px-2 py-1">
                              Full Time
                            </button>
                          </div>

                          <div className="hjgfjgfgf">
                            <button>PHP</button>

                            <button>Java</button>

                            <button>Magento</button>

                            <button>Laravel</button>

                            <button>Photoshop</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="kjdhhjgd p-3">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-4">
                          <div className="hjgfdfg">
                            <img src="./images/download (21).webp" alt="" />
                          </div>
                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-12 ps-lg-0 ps-sm-2">
                          <div className="kfhgjfgfh mb-2 d-flex align-items-center justify-content-between">
                            <div className="jhgjgf">
                              <h4 className="mb-0">Sr. PHP Developer</h4>
                            </div>

                            <div className="jhgjgf1">
                              <div className="mhgf position-relative text-center">
                                <i className="fa-regular fa-bookmark position-absolute"></i>
                              </div>
                            </div>
                          </div>

                          <div className="nfhjdfghfdghf mb-3">
                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-location-arrow me-1"></i>{" "}
                                Newtown,kolkata
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-sack-dollar me-1"></i>{" "}
                                $24k-$30k
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-bag-shopping me-1"></i>{" "}
                                4yr. Exp.
                              </p>
                            </button>

                            <button className="rlknjhgjfg1 oidefrgtry px-2 py-1">
                              Full Time
                            </button>
                          </div>

                          <div className="hjgfjgfgf">
                            <button>PHP</button>

                            <button>Java</button>

                            <button>Magento</button>

                            <button>Laravel</button>

                            <button>Photoshop</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="kjdhhjgd p-3">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-4">
                          <div className="hjgfdfg">
                            <img src="./images/download (21).webp" alt="" />
                          </div>
                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-12 ps-lg-0 ps-sm-2">
                          <div className="kfhgjfgfh mb-2 d-flex align-items-center justify-content-between">
                            <div className="jhgjgf">
                              <h4 className="mb-0">Sr. PHP Developer</h4>
                            </div>

                            <div className="jhgjgf1">
                              <div className="mhgf position-relative text-center">
                                <i className="fa-regular fa-bookmark position-absolute"></i>
                              </div>
                            </div>
                          </div>

                          <div className="nfhjdfghfdghf mb-3">
                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-location-arrow me-1"></i>{" "}
                                Newtown,kolkata
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-sack-dollar me-1"></i>{" "}
                                $24k-$30k
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-bag-shopping me-1"></i>{" "}
                                4yr. Exp.
                              </p>
                            </button>

                            <button className="rlknjhgjfg1 oidefrgtry px-2 py-1">
                              Full Time
                            </button>
                          </div>

                          <div className="hjgfjgfgf">
                            <button>PHP</button>

                            <button>Java</button>

                            <button>Magento</button>

                            <button>Laravel</button>

                            <button>Photoshop</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="kjdhhjgd p-3">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-4">
                          <div className="hjgfdfg">
                            <img src="./images/download (21).webp" alt="" />
                          </div>
                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-12 ps-lg-0 ps-sm-2">
                          <div className="kfhgjfgfh mb-2 d-flex align-items-center justify-content-between">
                            <div className="jhgjgf">
                              <h4 className="mb-0">Sr. PHP Developer</h4>
                            </div>

                            <div className="jhgjgf1">
                              <div className="mhgf position-relative text-center">
                                <i className="fa-regular fa-bookmark position-absolute"></i>
                              </div>
                            </div>
                          </div>

                          <div className="nfhjdfghfdghf mb-3">
                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-location-arrow me-1"></i>{" "}
                                Newtown,kolkata
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-sack-dollar me-1"></i>{" "}
                                $24k-$30k
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-bag-shopping me-1"></i>{" "}
                                4yr. Exp.
                              </p>
                            </button>

                            <button className="rlknjhgjfg1 oidefrgtry px-2 py-1">
                              Full Time
                            </button>
                          </div>

                          <div className="hjgfjgfgf">
                            <button>PHP</button>

                            <button>Java</button>

                            <button>Magento</button>

                            <button>Laravel</button>

                            <button>Photoshop</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="kjdhhjgd p-3">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-4">
                          <div className="hjgfdfg">
                            <img src="./images/download (21).webp" alt="" />
                          </div>
                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-12 ps-lg-0 ps-sm-2">
                          <div className="kfhgjfgfh mb-2 d-flex align-items-center justify-content-between">
                            <div className="jhgjgf">
                              <h4 className="mb-0">Sr. PHP Developer</h4>
                            </div>

                            <div className="jhgjgf1">
                              <div className="mhgf position-relative text-center">
                                <i className="fa-regular fa-bookmark position-absolute"></i>
                              </div>
                            </div>
                          </div>

                          <div className="nfhjdfghfdghf mb-3">
                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-location-arrow me-1"></i>{" "}
                                Newtown,kolkata
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-sack-dollar me-1"></i>{" "}
                                $24k-$30k
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-bag-shopping me-1"></i>{" "}
                                4yr. Exp.
                              </p>
                            </button>

                            <button className="rlknjhgjfg1 oidefrgtry px-2 py-1">
                              Full Time
                            </button>
                          </div>

                          <div className="hjgfjgfgf">
                            <button>PHP</button>

                            <button>Java</button>

                            <button>Magento</button>

                            <button>Laravel</button>

                            <button>Photoshop</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="kjdhhjgd p-3">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-4">
                          <div className="hjgfdfg">
                            <img src="./images/download (21).webp" alt="" />
                          </div>
                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-12 ps-lg-0 ps-sm-2">
                          <div className="kfhgjfgfh mb-2 d-flex align-items-center justify-content-between">
                            <div className="jhgjgf">
                              <h4 className="mb-0">Sr. PHP Developer</h4>
                            </div>

                            <div className="jhgjgf1">
                              <div className="mhgf position-relative text-center">
                                <i className="fa-regular fa-bookmark position-absolute"></i>
                              </div>
                            </div>
                          </div>

                          <div className="nfhjdfghfdghf mb-3">
                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-location-arrow me-1"></i>{" "}
                                Newtown,kolkata
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-sack-dollar me-1"></i>{" "}
                                $24k-$30k
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-bag-shopping me-1"></i>{" "}
                                4yr. Exp.
                              </p>
                            </button>

                            <button className="rlknjhgjfg1 oidefrgtry px-2 py-1">
                              Full Time
                            </button>
                          </div>

                          <div className="hjgfjgfgf">
                            <button>PHP</button>

                            <button>Java</button>

                            <button>Magento</button>

                            <button>Laravel</button>

                            <button>Photoshop</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="kjdhhjgd p-3">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-4">
                          <div className="hjgfdfg">
                            <img src="./images/download (21).webp" alt="" />
                          </div>
                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-12 ps-lg-0 ps-sm-2">
                          <div className="kfhgjfgfh mb-2 d-flex align-items-center justify-content-between">
                            <div className="jhgjgf">
                              <h4 className="mb-0">Sr. PHP Developer</h4>
                            </div>

                            <div className="jhgjgf1">
                              <div className="mhgf position-relative text-center">
                                <i className="fa-regular fa-bookmark position-absolute"></i>
                              </div>
                            </div>
                          </div>

                          <div className="nfhjdfghfdghf mb-3">
                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-location-arrow me-1"></i>{" "}
                                Newtown,kolkata
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-sack-dollar me-1"></i>{" "}
                                $24k-$30k
                              </p>
                            </button>

                            <button className="rlknjhgjfg ps-0 btn btn-transparent">
                              <p className="mb-0">
                                <i className="fa-solid fa-bag-shopping me-1"></i>{" "}
                                4yr. Exp.
                              </p>
                            </button>

                            <button className="rlknjhgjfg1 oidefrgtry px-2 py-1">
                              Full Time
                            </button>
                          </div>

                          <div className="hjgfjgfgf">
                            <button>PHP</button>

                            <button>Java</button>

                            <button>Magento</button>

                            <button>Laravel</button>

                            <button>Photoshop</button>
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

      {/*last */}
      <div
        className="section7"
        style={{
          background: "url('images/bb2.webp') no-repeat",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid section-hor-gap py-5">
          <div className="duieghrrr_content">
            <div className="dskjdfhgdfgfgfd text-center">
              <h2>
                Breakthrough Your Career <br /> With <span>Knowledgeable </span>{" "}
                Experts
              </h2>

              <p className="mb-0">
                We try to help you boost a secure career with our professional{" "}
                <br /> experts. We are here to work with you on your educational
                journey.
              </p>
            </div>

            <div className="idcuhsewfrsedf mt-5">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-8 col-sm-12">
                  <div className="position-relative">
                    <i className="fa-solid fa-envelopes-bulk position-absolute"></i>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                    />

                    <button className="btn btn-main position-absolute">
                      <span>CONNECT FOR FREE</span>{" "}
                      <i className="fa-regular d-none position-absolute fa-paper-plane"></i>
                    </button>
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

export default FindJob;
