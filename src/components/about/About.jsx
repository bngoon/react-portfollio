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
            <p className="about__description">Hello, my name is Booker Ngoon, a software engineer from Boston, MA.</p>
            <a href="" className="btn">Download CV</a>
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
                <span className="skills__number">40%</span>
              </div>
              <div className="skills__bar python">
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
