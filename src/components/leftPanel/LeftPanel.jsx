import React from "react";
import "./styles.scss";
import logo from "../../assets/logo.jpeg";
import cv from "../../assets/resume2PDF.pdf";
import { Icons } from "../../assets/Icons";

export const LeftPanel = () => {
  return (
    <div className="container">
      <div className="left_container">
        <img src={logo} className="left_container__logo" alt="logo" />
        <h1>Stan Hill</h1>
        <p>Software engineer</p>
        <a href="mailto: stasgill@gmail.com">stasgill@gmail.com</a>
        <a href="Tel: +380677882960">+380677882960</a>
        <div className="left_container__icons">
          <a href="https://www.linkedin.com/in/stanislavhill/" target="blank">
            <Icons type="linkedin" fill="white" />
          </a>
          <a href="https://github.com/StasGill" target="blank">
            <Icons type="git" fill="white" />
          </a>
          <a href="https://www.instagram.com/stas_hill/" target="blank">
            <Icons type="instagram" fill="white" />
          </a>
        </div>
        <a href={cv} download>
          Download CV
        </a>
      </div>
    </div>
  );
};
