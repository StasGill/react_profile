import React from "react";
import screen1 from "../../assets/screen1.jpg";
import screen2 from "../../assets/screen2.jpg";
import screen3 from "../../assets/screen3.jpg";
import "./styles.scss";

export const RightPanel = () => {
  return (
    <div className="right_container">
      <h2>About</h2>
      <p>
        Frontend developer with three years experience in developing web and
        mobile application. Worked in big international team in sphere of Sport
        Streaming and gambling. Familiar with business process and tasks.
        Friendly for learning new technologies.
      </p>
      <div className="right_container__divider"></div>
      <h2>My stack</h2>
      <p>
        JavaScript, TypeScript, React, React native, Redux, Redux toolkit, Node,
        Express, Mongo DB, WebPack, Bootstrap, Material UI, SASS.
      </p>
      <div className="right_container__divider"></div>
      <h2>Experience</h2>
      <p>
        <b>Smiss</b> : 2 years as Frontend developer.
      </p>
      <p>
        <b>Dazn</b> : 1 year as Frontend developer.
      </p>
      <div className="right_container__divider"></div>
      <h2>My projects</h2>
      <div className="right_container__card">
        <div className="right_container__card-left">
          <h3>Movies</h3>
          <img src={screen3} alt="screen" />
        </div>
        <div className="right_container__card-right">
          <p>Movies base application with Frontend part.</p>
          <h3>Technology</h3>
          <p>React, Redux.</p>
          <h3>Repo</h3>
          <a href="https://github.com/StasGill/react_movie" target="blank">
            https://github.com/StasGill/react_movie
          </a>
          <h3>Link</h3>
          <a href="https://movie-b.netlify.app/" target="blank">
            https://movie-b.netlify.app/
          </a>
        </div>
      </div>
      <div className="right_container__divider"></div>
      <div className="right_container__card">
        <div className="right_container__card-left">
          <h3>Places</h3>
          <img src={screen1} alt="screen" />
        </div>
        <div className="right_container__card-right">
          <p>Travel blog with Frontend and Backend part.</p>
          <h3>Technology</h3>
          <p>React, Redux, Material UI, Node, MongoDB.</p>
          <h3>Repo</h3>
          <a href="https://places-a.netlify.app/" target="blank">
            https://github.com/StasGill/react_memories
          </a>
          <h3>Link</h3>
          <a href="https://places-a.netlify.app/" target="blank">
            https://places-a.netlify.app/
          </a>
        </div>
      </div>
      <div className="right_container__divider"></div>
      <div className="right_container__card">
        <div className="right_container__card-left">
          <h3>Notice</h3>
          <img src={screen2} alt="screen" />
        </div>
        <div className="right_container__card-right">
          <p>Notice application with Frontend and Backend part.</p>
          <h3>Technology</h3>
          <p>React, Material UI, Node, MongoDB.</p>
          <h3>Repo</h3>
          <a href="https://github.com/StasGill/react_notice/" target="blank">
            https://github.com/StasGill/react_notice
          </a>
          <h3>Link</h3>
          <a href="https://notice-a.netlify.app/" target="blank">
            https://notice-a.netlify.app
          </a>
        </div>
      </div>
      <div className="right_container__divider"></div>
    </div>
  );
};
