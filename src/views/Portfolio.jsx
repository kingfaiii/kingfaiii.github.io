import Button from "../components/Button";
import Card from "../components/Card.jsx";
import { data } from "../utils/PortfolioData";

const firstImageData = () => {
  const { imageSrc, title, link } = data[0];
  return (
    <div>
      <img src={imageSrc} alt={title} width="100%"/>
      <h3>{title}</h3>
      <Button link={link} target="_blank" btnValue="Visit Me" />
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className="Portfolio">
      <p>My Works</p>
      <h2>Portfolio</h2>
      <Card cardContent={firstImageData} />
    </section>
  );
};

export default Portfolio;
