import { personalInfo } from "../data";

const Info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className="info__item" key={index}>
            <span className="info__title">{title}</span>
            <h3 className="info__description">{description}</h3>
          </li>
        );
      })}
    </>
  );
};

export default Info;
