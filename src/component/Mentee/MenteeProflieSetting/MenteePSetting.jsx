import React from "react";
import "./MenteePSetting.css";
import Header2 from "../../../lib/Header2";
import MenteeProfile from "./MenteeProfile";
import Menteedashfuntion from "../DashboardM/Menteedashfuntion";

const MenteePSetting = () => {
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
        <Header2 />
        <div className="mentor_dashboard">
          <div className="row">
            <Menteedashfuntion></Menteedashfuntion>
            <MenteeProfile></MenteeProfile>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenteePSetting;
