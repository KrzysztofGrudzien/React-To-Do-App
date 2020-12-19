import React from "react";
import ImgAvatar from "../../assets/images/author@2x.jpg";
import "./UserLoginInfo.scss";

const UserLoginInfo = () => {
  return (
    <div className="user-login-wrapper">
      <div className="user-login">
        <h2 className="user-login-title">
          <b>Hi, Krzysztof Grudzień</b>
        </h2>
        <p className="user-login-email">krzysztof.grudzien.fed@gmail.com</p>
      </div>
      <img src={ImgAvatar} alt="author" className="user-login-avatar" />
    </div>
  );
};

export default UserLoginInfo;
