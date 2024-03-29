import React from 'react'
import "./services.css"
import Image1 from "../../assets/javascript-logo-javascript-icon-transparent-free-png.webp"
import Image2 from "../../assets/download.png"
import Image3 from "../../assets/node.png"


const data = [
  {
    id: 1,
    image: Image1,
    title: "JavaScript",
    description:
      "Proficient in JavaScript for both front-end and back-end development, with a strong understanding of ES6+ features and asynchronous programming.",
  },
  {
    id: 2,
    image: Image2,
    title: "React.js",
    description:
      "Skilled in building dynamic and responsive web applications using React.js, including state management and context API.",
  },
  {
    id: 3,
    image: Image3,
    title: "Node.js",
    description:
      "Experienced in building server-side applications using Node.js, Express.js, and integrating with databases like MongoDB.",
  }]
//   {
//     id: 4,
//     image: Image4,
//     title: "CSS & SASS",
//     description:
//       "Proficient in styling and layout techniques with CSS and SASS, including frameworks like Bootstrap and Material-UI.",
//   },
//   {
//     id: 5,
//     image: Image5,
//     title: "Git & Version Control",
//     description:
//       "Skilled in version control using Git and GitHub, proficient in branching, merging, and collaborating with teams.",
//   },
//   {
//     id: 6,
//     image: Image6,
//     title: "Agile Methodologies",
//     description:
//       "Practiced in Agile methodologies, including Scrum and Kanban, with experience in iterative development and sprints.",
//   },
//   {
//     id: 7,
//     image: Image7,
//     title: "Full-Stack Development",
//     description:
//       "Experienced in building full-stack web applications from scratch, proficient in both front-end and back-end development.",
//   },
// ];

function Services() {
  return (
  <section className="services container section" id="services">
    <h2 className="section__title">Services</h2>

    <div className="services__container grid">
      {data.map(({id, image, title, description})=> {
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        )
      })}
    </div>
  </section>
  )
}

export default Services