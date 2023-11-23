import React from "react";
import screen3 from "../../assets/screen3.jpg";
import screen4 from "../../assets/screen4.png";
import screen5 from "../../assets/screen5.png";
import { ProjectItem } from "./ProjectItem";
import { data } from "../../assets/data";
import "./styles.scss";

export const RightPanel = () => {
  return (
    <div className="right_container">
      <h2>About</h2>
      <p>{data.about}</p>
      <div className="right_container__divider"></div>
      <h2>My stack</h2>
      <p>
        <b>Front-end: </b> HTML, CSS, SASS, JavaScript, React, NextJS, React
        Hooks, Redux, Redux Toolkit, MobX, React Native, Expo.
      </p>
      <p>
        <b>Back-end: </b>
        Node.js, Express, MongoDB, GraphQL, SocketIO.
      </p>
      <p>
        <b>Tools:</b> Git, Linux, Webpack, Storybook, Jest, Google Analytics,
        Docker. APIs: RESTful APIs.{" "}
      </p>
      <p>
        <b>Additional:</b> TypeScript.
      </p>
      <div className="right_container__divider"></div>
      <h2>Experience</h2>
      <p>
        <a href="https://smissltd.com/" target="blank">
          <b>SMISS</b>
        </a>{" "}
        : 3+ years as Frontend developer.
      </p>
      <div className="right_container__divider"></div>
      <h2>Projects</h2>
      <ProjectItem
        pic={screen4}
        name="DAZN"
        link="https://www.dazn.com/en-DE/home"
        desc="Platform for streaming sport events. Participated in the development of a sports streaming web application,
        focusing on subscription management and error handling improvements."
        stack="React, React hooks, Redux saga, SASS, Jest,
        Socket IO."
      />
      <ProjectItem
        pic={screen5}
        name="Merkur Slots"
        link="https://www.merkurslots.com/uk/en/home.html#/"
        desc="Contributed to the development of a gambling web application,
        introducing features for player and game control while optimising the
        codebase and resolving bugs."
        stack="React, React native, React Hooks, Redux Saga,
        SASS, Jest, Storybook, Google Analytics."
      />

      <ProjectItem
        pic={screen3}
        name="Movies"
        link="https://movie-b.netlify.app/"
        desc="Movies base application with Frontend part."
        repo="https://github.com/StasGill/react_movie"
        stack="React, Redux, Material UI, Node, MongoDB."
      />
      {/* <ProjectItem
        pic={screen1}
        name="Places"
        link="https://places-a.netlify.app/"
        desc="Travel blog with Frontend and Backend part."
        repo="https://github.com/StasGill/react_memories"
        stack="React, Redux, Material UI, Node, MongoDB."
      />
      <ProjectItem
        pic={screen2}
        name="Notice"
        link="https://notice-a.netlify.app"
        desc="Notice application with Frontend and Backend part."
        repo="https://github.com/StasGill/react_notice"
        stack="React, Redux, Material UI, Node, MongoDB."
      /> */}
    </div>
  );
};
