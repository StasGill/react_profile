import React from "react";
import screen3 from "../../assets/screen3.jpg";
import screen4 from "../../assets/screen4.png";
import screen5 from "../../assets/screen5.png";
import { ProjectItem } from "./ProjectItem";
import "./styles.scss";

export const RightPanel = () => {
  return (
    <div className="right_container">
      <h2 id="stack">My stack</h2>
      <p>
        <b>Front-end: </b> HTML, CSS, SASS, JavaScript, ReactJS, NextJS, React
        Hooks, Redux, Redux Saga, Redux Thunk, Redux Toolkit, MobX, AEM,
        Tailwind, React Query, MUI.
      </p>
      <p>
        <b>Back-end: </b>
        Node.js, Express, MongoDB, GraphQL, SocketIO.
      </p>
      <p>
        <b>Tools:</b> Git, Linux, Webpack, Storybook, Jest, Google Analytics,
        Docker. APIs: RESTful APIs.
      </p>
      <p>
        <b>Additional:</b> TypeScript.
      </p>
      <div className="right_container__divider"></div>
      <h2 id="EXPERIENCE">Experience</h2>
      <p>
        <a href="https://smissltd.com/" target="blank">
          <b>SMISS COMPANY</b>
        </a>
        : Worked in company over four years as web developer. Worked on
        long-term projects involving sport streaming and gambling businesses was
        gain extensive experience in building complex user interfaces with
        React, managing state using Redux, and handling asynchronous operations
        with Redux Saga. Also worked on optimizing performance, integrating
        real-time features for sport streaming, and implementing complex user
        interactions for the gambling domain.
      </p>
      <div className="right_container__divider"></div>
      <h2 id="PROJECTS">Projects</h2>
      <div className="projects_container">
        <ProjectItem
          pic={screen4}
          name="DAZN"
          link="https://www.dazn.com/en-DE/home"
          desc="Platform for streaming sport events. Participated in the development of a sports streaming web application,
        focusing on subscription management and error handling improvements."
          stack="React, React hooks, Redux saga, SASS, Jest,
        Socket IO."
          duration="2 years"
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
          duration="2 years"
        />

        <ProjectItem
          pic={screen3}
          name="Movies"
          link="https://movie-b.netlify.app/"
          desc="Movies base application with Frontend part."
          repo="https://github.com/StasGill/react_movie"
          stack="React, Redux, Material UI, Node, MongoDB."
          duration="One month"
        />
      </div>
    </div>
  );
};
