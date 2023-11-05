import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Button from '../components/Button';
import { data } from '../utils/PortfolioData';
import Card from '../components/Card'; 
import PropTypes from 'prop-types';

const settings = {
  dots: true,
  arrows:false,
  infinite: false,
  speed: 500,
  slidesToShow:1,
  slidesToScroll: 1,
  centerMode:true,
  variableWidth:true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
  centerMode:true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
};

const FirstImageData = ({ mydata }) => {
  return (
    <div>
      <a href={mydata.link} target="_blank" rel="noreferrer">
      <img src={mydata.imageSrc} alt={mydata.title} width="100%" />
      </a>
      <h3>{mydata.title}</h3>
      <Button link={mydata.link} target="_blank" btnValue="Visit Me" />
    </div>
  );
};
FirstImageData.propTypes = {
  mydata: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};
const Portfolio = () => {
  return (
    <section className="Portfolio">
      <p>My Works</p>
      <h2>Portfolio</h2>
      <Slider {...settings}>
      {(data || []).map(item => (
          <div key={item.id}>
            <Card cardContent={<FirstImageData mydata={item} />} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Portfolio;
