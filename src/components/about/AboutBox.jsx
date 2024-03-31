import React from 'react'
import './aboutbox.css'
function AboutBox() {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
        <i className="about__icon icon-fire" style={{ color: '#f57474', fontSize: 'var(--h1-font-size)' }}></i>

            <div>
                <h3 className="about__title">14</h3>
                <span className="about__subtitle">Projects Completed</span>
            </div>
        </div>

        <div className="about__box icon-cup">
            <i className="about__icon"></i>

            <div>
                <h3 className="about__title">12</h3>
                <span className="about__subtitle">Cup of coffee</span>
            </div>
        </div>


        <div className="about__box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">2</h3>
                <span className="about__subtitle">Satisfied Clients</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox