import React from "react";
import { Icons } from "../../assets/Icons";

const ContactSection = () => {
  return (
    <div className="contact_section">
      <p>Gdansk / Poland</p>
      <a href="mailto: stasgill@gmail.com" id="contacts">
        stasgill@gmail.com
      </a>
      <br />
      <a href="Tel: +380677882960">+48571244563</a>
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
    </div>
  );
};

export default ContactSection;
