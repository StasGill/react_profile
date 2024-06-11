import React from "react";
import "./styles.scss";
import logo from "../../assets/logoJPG.jpg";
import cv from "../../assets/CV_STAN_HILL_PDF.pdf";
import { data } from "../../assets/data";

export const LeftPanel = () => {
  return (
    <div className="container">
      <div className="left_container">
        <div className="left_side">
          <img src={logo} className="left_container__logo" alt="logo" />
        </div>
        <div className="right_side">
          <h1>Stan Hill</h1>

          <p className="left_container-about">{data.about}</p>
          <div className="right_side-btn-container">
            <div className="right_side-btn">
              <a href={cv} download>
                Download CV
              </a>
            </div>
            <div className="right_side-btn">
              <a href="#contacts">Contact me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
