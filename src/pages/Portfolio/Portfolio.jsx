import PortfolioItem from "../../Components/PortfolioItem";
import "./Portfolio.css";
import { portfolio } from "../../data";
const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item}/>;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
