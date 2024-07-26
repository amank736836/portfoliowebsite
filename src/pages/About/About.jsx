import Info from "../../Components/Info";
import { FaDownload } from "react-icons/fa";
import Resume from "../../assets/Aman.pdf";
import Stats from "../../Components/Stats";
import Skills from "../../Components/Skills";
import "./About.css";

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
            <a href={Resume}
              download=''
            className="button">
              Download CV{" "}
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stats/>
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
    </main>
  );
};

export default About;
