import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I&apos;m Aman Kumar. </span>
            Full Stack Developer
          </h1>
          <p className="home__description">
            Passionate Full Stack Developer with Expertise in MERN Stack <br />
            Crafting Dynamic Web Applications with React, Node.js, and Tailwind
            CSS <br /> Top Performer in Hackathons and Skilled in Solving
            Complex Algorithms <br /> Dedicated to Building Innovative Solutions
            and Enhancing User Experiences
          </p>
          <Link to="/about" className="button">
            More About Me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
