import React from "react";
import Header2 from "../../../lib/Header2";
import Mentordashfuntion from "../Dashboard/Mentordashfuntion";
import MenteeProfile from "../../Mentee/MenteeProflieSetting/MenteeProfile";

const MentorPSetting = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div class="md-header">
        <Header2></Header2>
        <div class="mentor_dashboard">
          <div class="row">
            <Mentordashfuntion></Mentordashfuntion>
            <MenteeProfile></MenteeProfile>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorPSetting;
