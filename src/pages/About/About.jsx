import Info from "../../Components/Info";
import { FaDownload } from "react-icons/fa";
import Resume from "../../assets/Aman.pdf";
import Skills from "../../Components/Skills";
import Education from "../../Components/Education";
import "./about.css";
import { FaEye } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2>
          <div className="section__title">
            About <span>Me</span>
          </div>
        </h2>
        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <center>
              <a href={Resume} download="" className="button">
                Download Cv
                <span className="button__icon">
                  <FaDownload />
                </span>
              </a>
              <NavLink
                to={"/resume"}
                className="view"
                style={{
                  paddingLeft: "10rem",
                }}
              >
                <a className="button">
                  View Cv
                  <span className="button__icon">
                    <FaEye />
                  </span>
                </a>
              </NavLink>
            </center>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>
        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">Education</h3>
        <div className="resume__container grid">
          <div className="resume__data">
            <Education />
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
