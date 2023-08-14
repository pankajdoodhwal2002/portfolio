import React from "react";
import projectlist from "../data/Project";
import "../Css/Project.css";

const Project = () => {
  return (
    <div className="Projectfull" id="projects">
      <div className="projectcomponent">
        <div className="projectintro">
          <h1>Projects</h1>
          <div className="underline"></div>
          <p className="projectsummery">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>
        <div className="projectslist">
          {projectlist.map((project) => (
            <div className="singleproject">
              <div className="projectimg">
                <img src={project.imageurl} alt="" />
              </div>
              <div className="projectdetails">
                <h1>{project.name}</h1>
                <p>{project.discription}</p>
                <a href={project.link}>Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
