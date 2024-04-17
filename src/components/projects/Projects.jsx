import React from 'react';
import "./projects.css";  // CSS file for Projects component

function Projects() {
  return (
    <section className="projects container" id='projects'>
      <h2 className="section__title">My Projects</h2>

      <div className="projects__container grid">
       
        <div className="project__data">
          <div className="project__titles">
            <h3 className="project__name">Project 1 Weather App</h3>
          </div>
          <div className="project__description">
            <p>Project 1 is a web application built using React and CSS</p>
            <br></br>
            <p>This project uses the OpenWeather API to fetch and display weather data for a given city. It also utilizes Axios for API requests and dynamically changes the background image based on the searched city.</p>
          </div>
          <div className="project__link">
            <a href="https://weatherbn.netlify.app/" className="project btn">View Project</a>
          </div>
        </div>

        <div className="project__data">
          <div className="project__titles">
            <h3 className="project__name">Project 2 To-Do-List</h3>
          </div>
          <div className="project__description">
            <p>Project 2 To-Do-List app developed using React. and CSS</p>
          </div>
          <div className="project__link">
            <a href="https://todosbn.netlify.app/" className="project btn">View Project</a>
          </div>
        </div>

        <div className="project__data">
          <div className="project__titles">
            <h3 className="project__name">Project 3 Chef's Kiss</h3>
          </div>
          <div className="project__description">
          <p>Project 3 is a Cook Book website where the user can view and create recipes, this app is build with Mongoose, Express, React, and Node.js.</p>
          <br></br>
            <p>This platform offers users a comprehensive social experience:</p>
          </div>
          <div className="project__link">
            <a href="https://chefs-kiss-cookbook.netlify.app/" className="project btn">View Project</a>
          </div>
        </div>



        <div className="project__data">
          <div className="project__titles">
            <h3 className="project__name">Project 4 hobbyr</h3>
          </div>
          <div className="project__description">
          <p>Project 4 is an advanced Social Media Platform  app built with React, Django, SQL, and CSS.</p>
          <br></br>
            <p>This platform offers users a comprehensive social experience:</p>
          </div>
          <div className="project__link">
            <a href="https://hobbyr.netlify.app/" className="project btn">View Project</a>
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
