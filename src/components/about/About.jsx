import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';

function About() {
  return (
    <section className="about container" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">


          <p className="about__description">
    👋 Hey there, I'm Booker Ngoon!<br />

    👨‍💻 Software Engineer | 🎖️ 10-Year Army Veteran<br />

    🔥 <strong>About Me:</strong><br />
    As a dedicated Software Engineer with 10 years of military experience, I combine discipline, leadership, and problem-solving skills to leverage technology and solve real-world problems. I graduated from General Assembly's Software Engineering Bootcamp and served in the U.S. Army, reaching the rank of Staff Sergeant before my honorable discharge in 2021.<br />

    🚀 <strong>Why Work With Me?</strong><br />
    - <strong>Discipline:</strong> 10 years of military experience taught me the importance of discipline.<br />
    - <strong>Leadership:</strong> Achieving the rank of Staff Sergeant has equipped me with strong leadership skills.<br />
    - <strong>Problem-Solving:</strong> I thrive on solving complex challenges.<br />

    📫 <strong>Let's Connect:</strong><br />
    Feel free to reach out if you'd like to collaborate on a project, discuss tech trends, or simply chat!<br />

    🔗 <strong>GitHub:</strong> <a href="https://github.com/bngoon" target="_blank">github.com/bngoon</a><br />

    📧 <strong>Email:</strong> <a href="mailto:bookerngoon@gmail.com">bookerngoon@gmail.com</a><br />

    Let's build something awesome together! 🚀
</p>


            <a href="https://docs.google.com/document/d/1yugkjSE_2K4mptWzFe6ulipkhCsfl0Q4CsARmrmiwtg/edit?usp=sharing" className="btn">Download CV</a>
            
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skill__titles">
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar javascript" >
                <span className="skills__percentage" style={{ width: '90%' }}></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skill__titles">
                <h3 className="skills__name ">React</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar react">
                <span className="skills__percentage" style={{ width: '90%' }}></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skill__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar css">
                <span className="skills__percentage " style={{ width: '70%' }}></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skill__titles">
                <h3 className="skills__name">Node.js</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar nodejs">
                <span className="skills__percentage" style={{ width: '70%' }}></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skill__titles">
                <h3 className="skills__name">Python</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar python">
                <span className="skills__percentage" style={{ width: '70%' }}></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skill__titles">
                <h3 className="skills__name">Django</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar django">
                <span className="skills__percentage" style={{ width: '70%' }}></span>
              </div>
            </div>


            <div className="skills__data">
              <div className="skill__titles">
                <h3 className="skills__name">Figma</h3>
                <span className="skills__number">20%</span>
              </div>
              <div className="skills__bar figma">
                <span className="skills__percentage" style={{ width: '70%' }}></span>
              </div>
            </div>


          </div>
        </div>
      </div>
      <AboutBox/>
    </section>
  );
}

export default About;
