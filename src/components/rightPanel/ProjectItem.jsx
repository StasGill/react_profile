import React from "react";

export const ProjectItem = ({ pic, name, link, desc, repo, stack }) => {
  return (
    <>
      <div className="right_container__card">
        <div className="right_container__card-left">
          <a href={link} target="blank">
            <h3>{name}</h3>
            <img src={pic} alt="screen" />
          </a>
        </div>
        <div className="right_container__card-right">
          <p>{desc}</p>
          <h3>Tech stack</h3>
          <p>{stack}</p>
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
      <div className="right_container__divider"></div>
    </>
  );
};
