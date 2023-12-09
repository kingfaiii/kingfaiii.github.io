import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from "../utils/PortfolioData";
import Card from "../components/Card";
import getSliderSettings from "../utils/getSliderSettings";
const defaultSliderSettings = getSliderSettings();

const Portfolio = () => {
  return (
    <section className="max-w-7xl m-auto h-90vh flex flex-col justify-evenly">
      <h2 className="text-white text-6xl mb-5">Projects<span className="text-custom">.</span></h2>
      <Slider {...defaultSliderSettings}>
        {data.map((projects) => {
          return (
            <div key={projects.id} className="p-5">
              <Card {...projects} />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Portfolio;
