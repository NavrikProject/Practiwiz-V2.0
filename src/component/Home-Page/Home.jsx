import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import "../../js/homeeffect.js";
const Home = () => {
  // useEffect(() => {}, []);
  const [mentorDetails, setMentorDetails] = useState([]);
  const [isDataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    const getMentors = async () => {
      const res = await axios.get(
        `https://practiwiz-backend.azurewebsites.net/api/mentor/get/all`
      );
      if (res.data.mentors) {
        setMentorDetails(res.data.mentors);
        setDataLoaded(true);
      } else {
        // Handle case where mentors data is empty
        setMentorDetails([]);
        setDataLoaded(true);
      }
    };
    getMentors();
  }, []);
  return (
    <>
      <div className="banner">
        <div className="banner_content">
          <div className="container px-5">
            <div className="row align-items-center">
              <div className="col-lg-8 mb-4">
                <div className="iduherr_left">
                  <h1>Share Your Superpower Become a Mentor</h1>

                  <p id="typing" className="mb-0 mt-3"></p>

                  <button className="btn mt-5 btn-main">Register</button>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
                <div className="iduherr_right">
                  <div className="diehjrrr_intern position-relative">
                    <div className="uidgher_circle position-absolute">
                      <img
                        src={"images/wdrtjh.png"}
                        alt="wdrth"
                        style={{ width: "100%" }}
                      />
                    </div>

                    <div>
                      <img
                        src={"images/csdfsfgdf.png"}
                        className="position-absolute"
                        alt="csdfs"
                        style={{ width: "56%" }}
                      />
                    </div>
                  </div>

                  <div className="diehjsdrrr_intern position-relative">
                    <div className="uidgher_circle position-absolute">
                      <img
                        src="images/dfsh.png"
                        alt="dfsh"
                        style={{ width: "100%" }}
                      />
                    </div>

                    <div>
                      <img
                        src="images/mkwef.png"
                        className="position-absolute"
                        alt="mkwef"
                        style={{ width: "56%" }}
                      />
                    </div>
                  </div>

                  <div className="owl-carousel udguafr_slider owl-theme">
                    <div className="item">
                      <div className="uihderr_slider text-center">
                        <img
                          src="images/mentors1.jpeg"
                          alt="mentor"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>

                    <div className="item">
                      <div className="uihderr_slider text-center">
                        <img
                          src="images/rdtere5rt.jpg"
                          alt="rdtere"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>

                    <div className="item">
                      <div className="uihderr_slider text-center">
                        <img
                          src="images/adse.png"
                          alt="adse"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 py-5 section-hor-gap">
        <div className="container py-5">
          <div className="hjfgdfgfg">
            <h2>Our Featured Mentors</h2>
          </div>

          <div>
            {isDataLoaded ? (
              <div className="khjfdgdf">
                <div className="owl-carousel ihdieruir_slider owl-theme">
                  {mentorDetails?.slice(0, 6)?.map((mentorDetail) => (
                    <div className="item" key={mentorDetail.mentor_dtls_id}>
                      <div className="iheroijr_inner bg-white text-center overflow-hidden position-relative">
                        <div className="diegrher overflow-hidden">
                          <img
                            src={mentorDetail.mentor_image}
                            alt="mentors1"
                            style={{
                              width: "240px !important",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>

                        <div className="doiuher_content">
                          <h4 className="mb-0">
                            {mentorDetail.mentor_firstname
                              .charAt(0)
                              .toUpperCase() +
                              mentorDetail.mentor_firstname.slice(1) +
                              " " +
                              mentorDetail.mentor_lastname
                                .charAt(0)
                                .toUpperCase() +
                              mentorDetail.mentor_lastname.slice(1)}
                          </h4>

                          <p className="profession">
                            {mentorDetail.mentor_current_role}
                          </p>

                          <p className="rating mb-0">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className="loading"
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                Loading mentors...
              </div>
            )}
          </div>

          <div className="dhhfff text-center">
            <button className="btn btn-main">
              VIEW ALL MENTORS <i className="fa-solid fa-circle-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="section3 section-hor-gap overflow-hidden py-5">
        <div className="container py-5">
          <div className="diuehrr_wrapper">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-3">
                <div className="idheirr_content">
                  <h2 className="mb-0">
                    Industry Interaction Should be a
                    <br />
                    <span>Culture</span>
                    <br />
                    Not a Transaction
                  </h2>

                  <p>Learn From The Corporate, Step Into Corporate World!</p>

                  <button className="btn me-2 btn-main">
                    Register Your Institute
                  </button>
                  <button className="btn btn-main">Learn More</button>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cuierr_image position-relative">
                  <img
                    src="images/csdfsfgdf.png"
                    alt="csdfsfgdf"
                    className="uidghegbr__uerww dieghrytretew_image position-absolute"
                    style={{ width: "25%" }}
                  />
                  <img
                    src="images/architecture-independence-palace-ho-chi-minh-city-min.jpg"
                    className="dertgrtyf_image position-relative"
                    alt="architecture"
                    style={{ width: "100%" }}
                  />

                  <img
                    src="images/mkwef.png"
                    alt="mkwef"
                    className="uidghegbr__uerww duihueirjt_image position-absolute"
                    style={{ width: "25%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section4 section-hor-gap py-5">
        <div className="container py-5">
          <div className="bghfdg">
            <h2>HOW MENTOR CONNECT MAKES A DIFFERENCE</h2>
          </div>

          <div className="diherrr_content text-center mt-4">
            <h3>
              <span>For Colleges</span>
            </h3>

            <div className="ihdiuherr mt-4">
              <div className="row">
                <div className="col-lg-4 mb-3">
                  <div className="diuehr_box p-3">
                    <div className="dihuiehr_circle">
                      <img src="images/pic1.png" alt="pic11" />
                    </div>

                    <h4>Access to Alumni & Non-Alumni Registered Mentors</h4>
                  </div>
                </div>

                <div className="col-lg-4 mb-3">
                  <div className="diuehr_box p-3">
                    <div className="dihuiehr_circle">
                      <img src="images/pic2.png" alt="pic2" />
                    </div>

                    <h4>Topic Specific Guest Lectures</h4>
                  </div>
                </div>

                <div className="col-lg-4 mb-3">
                  <div className="diuehr_box p-3">
                    <div className="dihuiehr_circle">
                      <img src="images/pic3.png" alt="pic3" />
                    </div>

                    <h4>Only Mentors with 10 plus years of experience</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="diherrr_content text-center mt-4">
            <h3>
              <span>For Students & Professional</span>
            </h3>

            <div className="ihdiuherr mt-4">
              <div className="row">
                <div className="col-lg-4 mb-3">
                  <div className="diuehr_box p-3">
                    <div className="dihuiehr_circle">
                      <img src="images/pic4.png" alt="pic4" />
                    </div>

                    <h4>One-On-One Mentor Sessions</h4>
                  </div>
                </div>

                <div className="col-lg-4 mb-3">
                  <div className="diuehr_box p-3">
                    <div className="dihuiehr_circle">
                      <img src="images/pic5.png" alt="pic5" />
                    </div>

                    <h4>AI Based Mentor Matching</h4>
                  </div>
                </div>

                <div className="col-lg-4 mb-3">
                  <div className="diuehr_box p-3">
                    <div className="dihuiehr_circle">
                      <img src="images/pic6.png" alt="pic6" />
                    </div>

                    <h4>Session Certificate for Resume</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section5a py-5">
        <div className="container">
          <div className="gnjhbff">
            <h2>OUR PARTNERS</h2>
          </div>

          <div className="duygerre_partners mt-4">
            <div className="owl-carousel opslider owl-theme">
              <div className="item">
                <div className="diuehrrtrer">
                  <img
                    src="images/wide-angle-shot-schonbrunn-palace-vienna-austria-with-cloudy-blue-sky-min.jpg"
                    alt="wide"
                  />
                </div>
              </div>

              <div className="item">
                <div className="diuehrrtrer">
                  <img
                    src="images/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany-min.jpg"
                    alt="hercules"
                  />
                </div>
              </div>

              <div className="item">
                <div className="diuehrrtrer">
                  <img
                    src="images/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany-min.jpg"
                    alt="hall"
                  />
                </div>
              </div>

              <div className="item">
                <div className="diuehrrtrer">
                  <img
                    src="images/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany-min.jpg"
                    alt="surrounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section6 section-hor-gap pb-5">
        <div className="container py-5">
          <div className="hjgvydfgfmiddle">
            <div className="jnhfgj">
              <div className="diherrr_content text-center mt-4">
                <h3>News & Blogs</h3>
              </div>

              <h2 className="mb-0 mt-4">Read Our Latest News & Blogs</h2>
            </div>

            <div className="duiherer_iuopjerr mt-5">
              <div className="row">
                <div className="col-lg-4 mb-4">
                  <div className="iduherr_box bg-white">
                    <img
                      src="images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg"
                      alt="amy"
                      style={{ width: "100%" }}
                    />

                    <div className="deirorner_content p-3">
                      <div className="csdghkeetr d-flex align-items-center">
                        <i className="fa-regular fa-clock me-2"></i>

                        <p className="mb-0">20 Feb, 2024</p>
                      </div>

                      <h4 className="my-3">
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                      </h4>

                      <p>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                        ipsum Lorem ipsum Lorem ipsum
                      </p>

                      <button className="btn btn-main px-0">
                        Read More{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-4">
                  <div className="iduherr_box bg-white">
                    <img
                      src="images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg"
                      alt="amy"
                      style={{ width: "100%" }}
                    />

                    <div className="deirorner_content p-3">
                      <div className="csdghkeetr d-flex align-items-center">
                        <i className="fa-regular fa-clock me-2"></i>

                        <p className="mb-0">20 Feb, 2024</p>
                      </div>

                      <h4 className="my-3">
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                      </h4>

                      <p>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                        ipsum Lorem ipsum Lorem ipsum
                      </p>

                      <button className="btn btn-main px-0">
                        Read More{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mb-4">
                  <div className="iduherr_box bg-white">
                    <img
                      src="images/amy-hirschi-K0c8ko3e6AA-unsplash.jpg"
                      alt="amy"
                      style={{ width: "100%" }}
                    />

                    <div className="deirorner_content p-3">
                      <div className="csdghkeetr d-flex align-items-center">
                        <i className="fa-regular fa-clock me-2"></i>

                        <p className="mb-0">20 Feb, 2024</p>
                      </div>

                      <h4 className="my-3">
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                      </h4>

                      <p>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                        ipsum Lorem ipsum Lorem ipsum
                      </p>

                      <button className="btn btn-main px-0">
                        Read More{" "}
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="btn btn-main mt-4">View All Blogs</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section7">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="uiherr_wrapper">
                <div className="row align-items-center">
                  <div className="col-lg-6 mb-3">
                    <div className="diehrer_inner">
                      <h2>Register Now</h2>

                      <p>to study in Next Academic Year 2025</p>

                      <button className="btn btn-main mt-3">
                        Register Now
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <img
                      src="images/dcaffer.png"
                      alt="dcaffer"
                      style={{ width: "100%" }}
                    />
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

export default Home;
