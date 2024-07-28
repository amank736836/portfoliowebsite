import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaSnapchat,
  FaTelegram,
} from "react-icons/fa";
import Codolio from "../../assets/codolio.svg";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import "./Contact.css";
import { FiSend } from "react-icons/fi";
const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don&apos;t be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelope className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">amankarguwal0@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91 6284 736 836</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.facebook.com/amank736836"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/amank736836"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>
            <a
              href="
              https://www.threads.net/amank736836"
              className="contact__social-link"
            >
              <FaThreads />
            </a>
            <a
              href="https://www.snapchat.com/add/amank736836"
              className="contact__social-link"
            >
              <FaSnapchat />
            </a>
            <a
              href="https://codolio.com/profile/amank736836"
              className="contact__social-link"
            >
              <img
                src={Codolio}
                alt="Codolio"
                className="contact__social-icon"
              />
            </a>

            <a href="https://t.me/amank736836" className="contact__social-link">
              <FaTelegram />
            </a>

            <a
              href="https://www.twitter.com/amank736836"
              className="contact__social-link"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/amank736836"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.github.com/amank736836"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <form
          action="https://formspree.io/f/mgvwardg"
          method="POST"
          className="contact__form"
        >
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="form__control"
                required
              />
            </div>
            <div className="form__input-div">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="form__control"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                name="subject"
                type="text"
                placeholder="Your Subject"
                className="form__control"
                required
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              name="message"
              placeholder="Your Message"
              className="form__control textarea"
              required
            ></textarea>
          </div>
          <div className="button-center">
            <button className="button" type="Submit">
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
