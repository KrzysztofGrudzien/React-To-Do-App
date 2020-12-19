import React from "react";
import ImgTasks from "../../assets/images/tasks@2x.jpg";
import "./WelcomeBox.scss";

const WelcomeBox = () => {
  return (
    <div className="welcome-box-wrapper">
      <section className="welcome-box">
        <h2 className="welcome-box-title">
          Hello, Krzysztof <br /> welcome to your task manager again!
        </h2>
        <p className="welcome-box-description">
          A task manager app is a SPA program used to provide information about
          projects progress and everything that is required for the development
          project and not only this.
        </p>
      </section>
      <img src={ImgTasks} alt="task manager" className="welcome-box-image" />
    </div>
  );
};

export default WelcomeBox;
