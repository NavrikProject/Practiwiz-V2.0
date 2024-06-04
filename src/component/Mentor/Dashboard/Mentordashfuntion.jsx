import React from "react";
import { useNavigate } from "react-router-dom";

const Mentordashfuntion = () => {
  const navigate = useNavigate();
  const handleClick = (i) => {
    if (i === 1) {
      navigate("/mentordash");
    } else {
      navigate("/mentorpsetting");
    }
  };

  return (
    <>
      <div className="col-lg-2 pe-0 csdegbfraedd">
        <div className="difuhtre_nav">
          <button
            className="btn btn-transparent text-center py-3"
            onClick={() => handleClick(1)}
          >
            <span className="d-block bg-white position-relative m-auto mb-3">
              <i className="fa-solid fa-user"></i>
            </span>

            <h5>Dashboard</h5>
          </button>

          <button
            className="btn btn-transparent text-center py-3"
            onClick={() => handleClick(2)}
          >
            <span className="d-block bg-white position-relative m-auto mb-3">
              <i className="fa-solid fa-bars"></i>
            </span>

            <h5>PROFILE SETTINGS</h5>
          </button>

          <button className="btn btn-transparent text-center py-3">
            <span className="d-block bg-white position-relative m-auto mb-3">
              <i className="fa-brands fa-rocketchat"></i>
            </span>

            <h5>MESSAGES</h5>
          </button>

          <button className="btn btn-transparent text-center py-3">
            <span className="d-block bg-white position-relative m-auto mb-3">
              <i className="fa-solid fa-bell"></i>
            </span>

            <h5>NOTIFICATIONS</h5>
          </button>

          <button className="btn btn-transparent text-center py-3">
            <span className="d-block bg-white position-relative m-auto mb-3">
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </span>

            <h5>CHANGE PASSWORD</h5>
          </button>

          <button className="btn btn-transparent text-center py-3">
            <span className="d-block bg-white position-relative m-auto mb-3">
              <i className="fa-solid fa-right-from-bracket"></i>
            </span>

            <h5>LOG OUT</h5>
          </button>
        </div>
      </div>
    </>
  );
};

export default Mentordashfuntion;
