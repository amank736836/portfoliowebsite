import Close from "../assets/close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const PortfolioItem = ({ img, title, details }) => {
  console.log(details);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div
      className="portfolio__item"
      // onClick={toggleModal}
    >
      <img src={img} alt="" className="portfolio__img" />
      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>
      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={Close}
              alt=""
              className="modal__close"
              onClick={toggleModal}
            />
            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
              {details.map((detail, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className="item__icon">{detail.icon}</span>
                    <div>
                      <span className="item__title">{detail.title}</span>
                      <span className="item__details">{detail.desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
