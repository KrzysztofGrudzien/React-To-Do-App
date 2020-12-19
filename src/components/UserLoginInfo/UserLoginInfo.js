import React from "react";
import ImgAvatar from "../../assets/images/author@2x.jpg";
import "./UserLoginInfo.scss";

const UserLoginInfo = () => {
  return (
    <div className="welcome-box-wrapper">
      <div className="welcome-box">
        <h2 className="welcome-box-title">
          <b>Hi, Krzysztof Grudzień</b>
        </h2>
        <p className="welcome-box-email">krzysztof.grudzien.fed@gmail.com</p>
      </div>
      <img src={ImgAvatar} alt="author" className="welcome-box-avatar" />
    </div>
  );
};

export default UserLoginInfo;
