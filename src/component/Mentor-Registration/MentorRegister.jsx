import React, { useState, useEffect, useRef } from "react";
import "./MentorRegister.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import countrydata from "../../CountryData.json";

const MentorRegister = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [interested, setInterest] = useState(false);
  const [showMoreFields, setShowMoreFields] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [expertise, setExpertise] = useState("");
  const [subExpertise, setSubExpertise] = useState("");
  const [value, setValue] = useState(0);
  const [state, setState] = useState([]);
  const inputRef = useRef("");

  const handleRating = (newValue) => {
    setValue(newValue);
  };
  const expertiseOptions = [
    "Technology",
    "Career Guidence",
    "Personality Development",
    "Business",
    "Legal",
  ];
  const subExpertiseOptions = {
    Technology: [
      "Software Development",
      "Data Science",
      "Cybersecurity",
      " Artificial Intelligence",
      "User Experience Design",
    ],
    Business: [
      "Marketing Strategy",
      "Operations Management",
      "Human Resources",
      "Entrepreneurship",
      "Supply Chain Management",
    ],
    Legal: [
      "Corporate Law",
      "Intellectual Property Law",
      "Criminal Law",
      "International Law",
      "Family Law",
    ],
    "Career Guidence": [
      "Self-assessment",
      "Goal setting",
      "Education and training",
      "Job search strategies",
      "Entrepreneurship",
    ],
    "Personality Development": [
      "Self-awareness",
      "Communication skills",
      "Interpersonal skills",
      "Emotional intelligence",
      "Adaptability",
    ],
  };

  let options;

  if (expertise === "Technology") {
    options = [
      "HTML/CSS",
      "Java",
      "React.js",
      "React Native",
      "Android",
      "C++",
      "Python",
      "Data Analysis",
      "Project Management",
    ];
  } else if (expertise === "Business") {
    options = [
      "Active listening",
      "Communication",
      "Research",
      "Adaptability",
      "Time Management",
      "Networking",
      "Negotiation",
      "Teamwork",
    ];
  } else if (expertise === "Legal") {
    options = [
      "Writing Skills",
      "Analytical Thinking",
      "Problem-Solving",
      "Legal Drafting",
      "Advocacy",
      "Ethical Judgment",
    ];
  } else if (expertise === "Career Guidence") {
    options = [
      "Active listening",
      "Problem-Solving",
      "Resourcefulness",
      "Cultural Competence",
      "Time Management",
      "Self-Awareness and Self-Care",
    ];
  } else if (expertise === "Personality Development") {
    options = [
      "Career Exploration",
      "Goal Setting",
      "Education and Training Guidance",
      "Entrepreneurship Guidance",
      "Digital Literacy",
    ];
  } else {
    options = [];
  }

  const handleExpertiseChange = (e) => {
    setExpertise(e.target.value);
    setSubExpertise("");
  };

  const handleSubExpertiseChange = (e) => {
    setSubExpertise(e.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const optionsArray = value.split(",").map((option) => option.trim());
    setSelectedOptions(optionsArray.filter((option) => option !== ""));
  };

  const handleOptionClick = (option) => {
    const updatedSelectedOptions = [...selectedOptions, option];
    setSelectedOptions(updatedSelectedOptions);
    setInputValue(updatedSelectedOptions.join(", "));
    setShowOptions(false);
  };

  const handleInterest = (e) => {
    setInterest(e.target.checked);
    setShowMoreFields(e.target.checked);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  const handlecountry = (e) => {
    const getcountryId = e.target.value;
    console.log(getcountryId);
    const getStatedata = countrydata.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="regis_background"
      style={{
        background: "url(images/fsdssdd.webp) no-repeat",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="iuhieiuihaw_left sticky-top">
              <h3>
                Grow Your Professional Career with
                <span className="span222">Top-Rated</span> Mentors
              </h3>

              <p>
                Join us to upgrade your professional career with our mentor’s
                guidance. We provide a personalised training approach to improve
                your project management skills. Master the skill to work under
                pressure on various projects within tight deadlines. At
                Practiwiz we have courses for working professionals, MBA
                students, and aspiring IT business analysts. Hurry up and
                reserve your mentorship class today.
              </p>

              <h5 className="mt-4">Benefits of Our Mentorship Course:</h5>

              <ul className="ps-0 mt-3">
                <li className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-circle-check" i="true"></i>

                    <p className="mb-0">Self-paced training</p>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-circle-check" i="true"></i>

                    <p className="mb-0">Flexible timing and scheduling</p>
                  </div>
                </li>

                <li className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-circle-check" i="true"></i>

                    <p className="mb-0">
                      Career guidance from experienced mentors
                    </p>
                  </div>
                </li>

                <li className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-circle-check" i="true"></i>

                    <p className="mb-0">Expert advice and guidance</p>
                  </div>
                </li>

                <li className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-circle-check" i="true"></i>

                    <p className="mb-0">
                      <a href="/register">Sign Up Now!</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="iuhieiuihaw_right bg-white p-5">
              <div className="uherrr_text text-center">
                <h6>Page 2/2</h6>
                <br />
                <h4>Mentor Registration</h4>
              </div>
              <br />

              <div className="ihduwfr_form_wrapper mt-3">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputSkills" className="form-label">
                      Present Designation
                    </label>
                    <input
                      className="form-control"
                      id="exampleInputprofession"
                      placeholder="Please enter your present designation"
                      aria-describedby="professionHelp"
                      required
                      type="text"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputExpertise"
                      className="form-label"
                    >
                      Years of experience
                    </label>
                    <input
                      className="form-control"
                      id="exampleInputyears"
                      placeholder="Years of experience"
                      required
                      type="text"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputExpertise"
                      className="form-label"
                    >
                      Industry Experience
                    </label>
                    <select
                      className="form-control"
                      id="exampleInputExpertise"
                      value={expertise}
                      onChange={handleExpertiseChange}
                      required
                    >
                      <option value="">Select Prefrence</option>
                      {expertiseOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    {/* Sub-options dropdown */}
                    {expertise && subExpertiseOptions[expertise] && (
                      <div className="mt-3">
                        <label
                          htmlFor="exampleInputSubExpertise"
                          className="form-label"
                        >
                          {expertise === "Technology"
                            ? "Select Technology"
                            : expertise === "Business"
                            ? "Select Field"
                            : "Select option"}
                        </label>
                        <select
                          className="form-control"
                          id="exampleInputSubExpertise"
                          value={subExpertise}
                          onChange={handleSubExpertiseChange}
                          required
                        >
                          <option value="">Select Sub-Preference</option>
                          {subExpertiseOptions[expertise].map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                  <div className="mb-3" style={{ position: "relative" }}>
                    <label htmlFor="exampleInputAboutMe" className="form-label">
                      Your Super Power
                    </label>
                    <input
                      className="form-control"
                      id="exampleInputpower"
                      placeholder="Skills"
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      onFocus={() => setShowOptions(true)}
                      ref={inputRef}
                    />
                    {showOptions && (
                      <div className="options-box">
                        {options.map((option, index) => (
                          <div
                            key={index}
                            className="option"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleInputGuestLectures"
                      checked={interested}
                      onChange={handleInterest}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleInputGuestLectures"
                    >
                      Are you interested in delivering one on one lectures with
                      alumni?
                    </label>
                  </div>
                  {showMoreFields && (
                    <>
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleInputCaseStudies"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleInputCaseStudies"
                        >
                          Interested in being free alumni?
                        </label>
                      </div>
                    </>
                  )}
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleInputCaseStudies"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleInputCaseStudies"
                    >
                      Are you interested in co-creating case studies with
                      Practiwiz team?
                    </label>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputcountry" className="form-label">
                      Country
                    </label>
                    <select
                      name="country"
                      className="form-control"
                      onChange={(e) => handlecountry(e)}
                    >
                      <option value="">--Select Country--</option>
                      {countrydata.map((getcountry, index) => (
                        <option value={getcountry.country_id} key={index}>
                          {getcountry.country_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputstate" className="form-label">
                      State
                    </label>
                    <select name="state" className="form-control">
                      <option value=""> --Select State--</option>
                      {state.map((getstate, index) => (
                        <option value={getstate.state_id} key={index}>
                          {getstate.state_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputHours" className="form-label">
                      Preferred timings
                    </label>
                    <br />
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      placeholderText="Select date and time"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputAboutMe" className="form-label">
                      About me
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleInputAboutMe"
                      placeholder="Tell us about yourself"
                      rows="4"
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputLinkedin"
                      className="form-label"
                    >
                      Linkedin Profile
                    </label>
                    <input
                      className="form-control"
                      id="exampleInputLinkedin"
                      placeholder="Your Linkedin Profile"
                      type="text"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputwebsite" className="form-label">
                      Persional Website
                    </label>
                    <input
                      className="form-control"
                      id="exampleInputwebsite"
                      placeholder="You can add your blog, GitHub profile or similar here"
                      type="text"
                    />
                  </div>
                  <br />

                  <div className="mb-3">
                    <label htmlFor="exampleInputRateus" className="form-label">
                      Rate our registration page
                    </label>
                    <br />
                    {[1, 2, 3, 4, 5].map((index) => (
                      <span
                        key={index}
                        onClick={() => handleRating(index)}
                        style={{
                          cursor: "pointer",
                          color: index <= value ? "#2dbedb" : "gray",
                          fontSize: "25px",
                        }}
                        className="fa-solid fa-star"
                      ></span>
                    ))}
                  </div>

                  <button type="submit" className="btn btn-main py-3 mt-3">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorRegister;
