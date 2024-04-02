import React from 'react';
import "./projects.css";  // CSS file for Projects component

function Projects() {
  return (
    <section className="projects container" id='projects'>
      <h2 className="section__title">My Projects</h2>

      <div className="projects__container grid">
       
        <div className="project__data">
          <div className="project__titles">
            <h3 className="project__name">Project 1</h3>
          </div>
          <div className="project__description">
            <p>Project 1 is a web application built using React and Node.js.</p>
          </div>
          <div className="project__link">
            <a href="https://github.com/example/project1" className="project btn">View Project</a>
          </div>
        </div>

        <div className="project__data">
          <div className="project__titles">
            <h3 className="project__name">Project 2</h3>
          </div>
          <div className="project__description">
            <p>Project 2 is a mobile app developed using React.</p>
          </div>
          <div className="project__link">
            <a href="https://github.com/example/project2" className="project btn">View Project</a>
          </div>
        </div>

        <div className="project__data">
          <div className="project__titles">
            <h3 className="project__name">Project 3</h3>
          </div>
          <div className="project__description">
            <p>Project 3 is a database management system using SQL.</p>
          </div>
          <div className="project__link">
            <a href="https://github.com/example/project3" className="project btn">View Project</a>
          </div>
        </div>
        
        {/* <div className="project__data">
          <div className="project__titles">
            <h3 className="project__name">Project 4</h3>
          </div>
          <div className="project__description">
            <p>Project 4 is a cloud computing solution using AWS.</p>
          </div>
          <div className="project__link">
            <a href="https://github.com/example/project4" className="project btn">View Project</a>
          </div>
        </div> */}

      </div>
    </section>
  );
}

export default Projects;
