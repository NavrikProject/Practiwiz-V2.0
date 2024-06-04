import React from "react";
import "./App.css";
import Header from "./lib/Header";
import Footer from "./lib/Footer";
import Home from "./component/Home-Page/Home.jsx";
import RegistrationForm from "./component/Register/registerform.jsx";
import About from "./component/AboutUs/about";
import Login from "./component/LoginForm/login";
import FindJob from "./component/Find-Job/FindJob.jsx";
import Mentee from "./component/Mentee/Mentee";
import ManteeDash from "./component/Mentee/Menteedash/Menteedash.jsx";
import Mentor from "./component/Mentor/Mentor";
import Mentordash from "./component/Mentor/Mentordash/Mentordash.jsx";
import MenteePSetting from "./component/Mentee/MenteeProflieSetting/MenteePSetting.jsx";
import MentorPSetting from "./component/Mentor/MentorProfileSetting/MentorPSetting.jsx";
import MentorClub from "./component/Mentorclub/MentorClub.jsx";
import SingleCousre from "./component/SingleCourse/SingleCourse";
import BusinessMentor from "./component/Businessmentor/BusinessMentor.jsx";
import { ContactUs, GoogleMap, Section7 } from "./component/Contactus/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MentorRegister from "./component/Mentor-Registration/MentorRegister.jsx";
import "react-toastify/dist/ReactToastify.css";
import UploadPhotoField from "./component/Test/camera.jsx";
import MentorRegistration from "./component/MentorRegUpdated/MentorRegistration.js";
const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <>
                <Header />
                <Login />
                <Footer />
              </>
            }
          />{" "}
          <Route
            exact
            path="/register"
            element={
              <>
                <Header />
                <RegistrationForm />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <>
                <Header />
                <ContactUs />
                <GoogleMap />
                <Section7 />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/findjob"
            element={
              <>
                <Header /> <FindJob />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/mentee"
            element={
              <>
                <Header />
                <Mentee />
                <Footer />
              </>
            }
          />
          <Route exact path="/menteedash" element={<ManteeDash />} />{" "}
          <Route
            exact
            path="/mentor"
            element={
              <>
                <Header /> <Mentor /> <Footer />
              </>
            }
          />
          <Route
            exact
            path="/singlecourse"
            element={
              <>
                <Header />
                <SingleCousre />
                <Footer />
              </>
            }
          />
          {/* need to check */}
          <Route
            exact
            path="/menteepsetting"
            element={
              <>
                <MenteePSetting />
              </>
            }
          />
          <Route
            exact
            path="/mentordash"
            element={
              <>
                <Mentordash />
              </>
            }
          />{" "}
          {/* completed */}
          <Route
            exact
            path="/mentorpsetting"
            element={
              <>
                <MentorPSetting />
              </>
            }
          />
          <Route
            exact
            path="/mentorclub"
            element={
              <>
                <Header />
                <MentorClub />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/businessmentor"
            element={
              <>
                <BusinessMentor />
                <Footer></Footer>
              </>
            }
          />
          <Route
            exact
            path="/mentorregister"
            element={
              <>
                <Header />
                <MentorRegister />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/camera"
            element={
              <>
                <UploadPhotoField />
              </>
            }
          />
          <Route
            exact
            path="/mentor-update"
            element={
              <>
                <Header />
                <MentorRegistration />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
