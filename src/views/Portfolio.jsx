import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from "../utils/PortfolioData";
import Card from "../components/Card";
import getSliderSettings from "../utils/getSliderSettings";
const defaultSliderSettings = getSliderSettings();

const Portfolio = () => {
  return (
    <section className="md:mt-[200px] mt-10 md:max-w-7xl max-w-2xl m-auto md:px-11 px-4 flex flex-col justify-center">
      <h2 className="md:text-9xl text-6xl text-white mb-5">
        Projects<span className="text-custom">.</span>
      </h2>
      <div className="md:block hidden">
        <Slider {...defaultSliderSettings}>
          {data.map((projects) => {
            return (
              <div key={projects.id} className="p-5">
                <Card {...projects} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="md:hidden block mb-5">
      {data.map((projects) => {
            return (
              <div key={projects.id} className="p-5">
                <Card {...projects} />
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Portfolio;
