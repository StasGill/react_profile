import React from "react";

export const ProjectItem = ({
  pic,
  name,
  link,
  desc,
  repo,
  stack,
  duration,
}) => {
  return (
    <a href={link} target="blank" className="right_container__card-link">
      <div className="right_container__card">
        <div className="right_container__card-left">
          <img src={pic} alt="screen" />
          <h3>{name}</h3>
        </div>
        <div className="right_container__card-right">
          <p>{desc}</p>
          <h3>Tech stack</h3>
          <p>{stack}</p>
          <h3>Duration</h3>
          <p>{duration}</p>
          {repo && (
            <>
              <h3>Repo</h3>
              <a href={repo} target="blank">
                {repo}
              </a>
            </>
          )}
          <h3>Link</h3>
          <a href={link} target="blank">
            {link}
          </a>
        </div>
      </div>
      {/* <div className="right_container__divider"></div> */}
    </a>
  );
};
