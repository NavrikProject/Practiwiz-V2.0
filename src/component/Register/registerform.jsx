import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PhoneNumberUtil } from "google-libphonenumber";
import {
  hideLoadingHandler,
  showLoadingHandler,
} from "../../redux/loadingReducer";
import "./registerform.css";

const phoneUtil = PhoneNumberUtil.getInstance();
function RegistrationForm() {
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showIcon, setShowIcon] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const password = watch("password");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const dispatch = useDispatch();
  const [photoError, setPhotoError] = useState("");
  const handlePhotoUpload = (file) => {
    if (!file) {
      setPhotoError("Please select a photo.");
    } else if (file.size > 5242880) {
      setPhotoError("Photo size should be less than 5MB.");
    } else {
      setPhotoError("");
    }
  };
  const navigate = useNavigate();
  const moveTo = () => {
    navigate("/mentorregister");
  };

  const registerSubmitHandler = async (data) => {
    setError(" ");
    setSuccess(" ");
    if (data.firstname) {
      return console.log("Found space");
    }
    if (!validPhoneNumber) {
      return setPhoneNumberError("Mobile number must be valid");
    }

    try {
      dispatch(showLoadingHandler());
      const res = await axios.post(
        "https://practiwiz-backend.azurewebsites.net/api/auth/email-register",
        {
          data,
          phoneNumber,
        }
      );
      dispatch(hideLoadingHandler());
      if (res.data.required) {
        setError(res.data.required);
        toast.error(res.data.required, { position: "top-center" });
      }
      if (res.data.exists) {
        setError(res.data.exists);
        toast.error(res.data.exists, { position: "top-center" });
      }
      if (res.data.error) {
        setError(res.data.error);
        toast.error(res.data.error, { position: "top-center" });
      }
      if (res.data.success) {
        setSuccess(res.data.success);
        toast.success(res.data.success, { position: "top-center" });
        reset();
      }
    } catch (error) {
      return dispatch(hideLoadingHandler());
    }
  };

  const verifyMobileNumber = (event) => {
    const number = "+91" + event.target.value;
    if (number.length < 6 || number.length > 13) {
      return (
        setPhoneNumberError("Must be a valid phone number"),
        setValidPhoneNumber(false)
      );
    }
    const parsePhoneNumber = phoneUtil.parseAndKeepRawInput(number);
    // Check if the number is valid
    if (phoneUtil.isValidNumber(parsePhoneNumber) === true) {
      return (
        setPhoneNumberError(" "),
        setPhoneNumber(number),
        setValidPhoneNumber(true)
      );
    } else {
      // Not a valid number
      return (
        setPhoneNumberError("Must be a valid phone number"),
        setValidPhoneNumber(false)
      );
    }
  };
  return (
    <main>
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
                  Grow Your Professional Career with{" "}
                  <span className="span222">Top-Rated</span> Mentors
                </h3>

                <p>
                  Join us to upgrade your professional career with our mentor’s
                  guidance. We provide a personalised training approach to
                  improve your project management skills. Master the skill to
                  work under pressure on various projects within tight
                  deadlines. At Practiwiz we have courses for working
                  professionals, MBA students, and aspiring IT business
                  analysts. Hurry up and reserve your mentorship class today.
                </p>

                <h5 className="mt-4">Benefits of Our Mentorship Course:</h5>

                <ul className="ps-0 mt-3">
                  <li className="mb-3">
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-circle-check" i="true"></i>

                      <p className="mb-0">Self-paced training</p>
                    </div>
                  </li>
                  {error ? <p className="res-errorlog">{error}</p> : null}
                  {success ? <p className="res-sucesslog">{success}</p> : null}

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

            <div className="col-lg-6">
              <div className="iuhieiuihaw_right bg-white p-5">
                <div className="uherrr_text text-center">
                  <h6>Page 1/2 </h6>
                  <h4>Sign up</h4>
                  <div className="d-relative align-items-center">
                    <div className="btn btn-main">
                      <i className="fab fa-google me-1"></i>
                      Google
                    </div>

                    <div className="btn btn-main">
                      <i className="fab fa-facebook-square me-1"></i>
                      Facebook
                    </div>

                    <div className="btn btn-main">
                      <i className="fab fa-linkedin me-1"></i>
                      Linkedin
                    </div>
                  </div>
                  <br />
                  <p className="mb-0">
                    Already Have An Account? <a href="/login">Log In</a>
                  </p>
                </div>
                <br />

                <div className="ihduwfr_form_wrapper mt-3">
                  <form>
                    <div className="mb-3 d-flex">
                      <div className="me-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          First Name
                        </label>
                        <input
                          className="form-control"
                          id="example"
                          placeholder="First Name"
                          aria-describedby="emailHelp"
                          required
                          type="text"
                          {...register("firstName", {
                            required: "Firstname is Required",
                            minLength: {
                              value: 1,
                              message: "Must be 1 character at least",
                            },
                            pattern: {
                              value: /\S+(?:\s+\S+)*/g,
                              message: "Remove the space from the field",
                            },
                          })}
                          onKeyUp={() => {
                            trigger("firstName");
                          }}
                        />
                        {errors.firstName && (
                          <span className="errorMsg">
                            {errors.firstName.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Last Name
                        </label>
                        <input
                          className="form-control"
                          id="examplelastname"
                          placeholder="Last Name"
                          required
                          type="text"
                          {...register("lastName", {
                            required: "Last name is Required",
                            minLength: {
                              value: 1,
                              message: "Must be 1 character at least",
                            },
                            pattern: {
                              value: /\S+(?:\s+\S+)*/g,
                              message: "Remove the space from the field",
                            },
                          })}
                          onKeyUp={() => {
                            trigger("lastName");
                          }}
                        />
                        {errors.lastName && (
                          <span className="errorMsg">
                            {errors.lastName.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="inputnumber"
                        placeholder="Phone Number"
                        aria-describedby="emailHelp"
                        onChange={verifyMobileNumber}
                      />
                      <>
                        {phoneNumberError && (
                          <span className="errorMsg">{phoneNumberError}</span>
                        )}
                      </>
                    </div>

                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Email"
                        aria-describedby="emailHelp"
                        required
                        type="text"
                        {...register("email", {
                          required: "Enter an email to register",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("email");
                        }}
                      />
                      {errors.email && (
                        <span className="errorMsg">{errors.email.message}</span>
                      )}

                      <i
                        className="fa-solid fa-envelopes-bulk position-absolute"
                        i="true"
                      ></i>
                    </div>
                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label htmlFor="exampleInputPhoto" className="form-label">
                        Upload Photo
                      </label>
                      <div className="input-with-icon">
                        <i className="fa-solid fa-camera"></i>
                        <input
                          className="form-control"
                          id="exampleInputPhoto"
                          type="file"
                          accept="image/*"
                          onChange={(e) => handlePhotoUpload(e.target.files[0])}
                          required
                        />
                      </div>
                      {photoError && (
                        <span className="errorMsg">{photoError}</span>
                      )}
                    </div>

                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        className="form-control"
                        id="exampleInputPassword"
                        placeholder="Password must be at least 8 characters"
                        aria-describedby="emailHelp"
                        required
                        type={showIcon ? "text" : "password"}
                        {...register("password", {
                          required: "Password is Required",
                          pattern: {
                            value:
                              /^(?!.* )(?=.*[a-z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&.]{8,16}$/,
                            message:
                              "A min 8 - 16 characters contains a combination of upper, lowercase letter, number and special characters like @ $ ! % * ? & _ . without space",
                          },
                          maxLength: {
                            value: 16,
                            message: "Must be less than 16 characters.",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("password");
                        }}
                      />

                      <i
                        i="true"
                        onClick={() => setShowIcon(!showIcon)}
                        className={
                          showIcon
                            ? "fa-solid fa-eye position-absolute"
                            : "fa-solid fa-eye-slash position-absolute"
                        }
                      ></i>
                      {errors.password && (
                        <span className="errorMsg">
                          {errors.password.message}
                        </span>
                      )}
                    </div>

                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="form-control"
                        id="exampleInputConfirm"
                        placeholder="Type your password again"
                        aria-describedby="emailHelp"
                        required
                        type={showIcons ? "text" : "password"}
                        //onChange={(e) => setConfirmPassword(e.target.value)}
                        {...register("confirmPassword", {
                          required: "Enter confirm password",
                          validate: (value) =>
                            value === password || "Password must be matched",
                        })}
                        onKeyUp={() => {
                          trigger("confirmPassword");
                        }}
                      />

                      <i
                        i="true"
                        onClick={() => setShowIcons(!showIcons)}
                        className={
                          showIcons
                            ? "fa-solid fa-eye position-absolute"
                            : "fa-solid fa-eye-slash position-absolute"
                        }
                      />
                      {errors.confirmPassword && (
                        <span className="errorMsg">
                          {errors.confirmPassword.message}
                        </span>
                      )}
                    </div>

                    <div className="csfvgdtrfs mb-3 position-relative">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        I Want To Register As
                      </label>{" "}
                      <br />
                      <input
                        type="radio"
                        id="mentor1"
                        defaultChecked
                        className="radio-input"
                        value="mentor"
                        {...register("type", {
                          required: "User type  is Required",
                        })}
                      />
                      <label htmlFor="rdo1" className="radio-label">
                        {" "}
                        <span className="radio-border"></span> Mentor{" "}
                      </label>
                      <input
                        type="radio"
                        id="rdo2"
                        className="radio-input"
                        value="member"
                        {...register("type", {
                          required: "User type  is Required",
                        })}
                      />
                      <label htmlFor="rdo2" className="radio-label">
                        <span className="radio-border"></span> Mentee{" "}
                      </label>
                      <input
                        type="radio"
                        id="rdo3"
                        className="radio-input"
                        value="member"
                        {...register("type", {
                          required: "User type  is Required",
                        })}
                      />
                      <label htmlFor="rdo3" className="radio-label">
                        <span className="radio-border"></span> Job Seeker{" "}
                      </label>
                    </div>

                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        {...register("checkBox", {
                          required: "Must be checked before submission",
                        })}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        Creating your account and you accepting{" "}
                        <a href="/register">Terms & Conditions</a>
                      </label>
                    </div>
                    {errors.checkBox && (
                      <span className="errorMsg checkboxBorder">
                        {errors.checkBox.message}
                      </span>
                    )}

                    <button
                      type="submit"
                      className="btn btn-main py-3 mt-3"
                      onClick={moveTo}
                    >
                      Next Page
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RegistrationForm;
