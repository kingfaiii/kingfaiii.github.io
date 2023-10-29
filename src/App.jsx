import reactLogo from "./assets/me_v1.png";
import "./App.css";
import PropTypes from "prop-types";

const ImageLink = ({ link, target, imagesrc, classname, alt }) => (
  <a href={link} target={target}>
    <img src={imagesrc} alt={alt} className={classname} />
  </a>
);

ImageLink.propTypes = {
  link: PropTypes.string.isRequired,
  target: PropTypes.string,
  imagesrc: PropTypes.string.isRequired,
  classname: PropTypes.string,
  alt: PropTypes.string,
};

ImageLink.defaultProps = {
  target: "_blank",
  classname: "",
  alt: "",
};

const MyApp = () => {
  return (
    <div className="flex">
      <ImageLink link="https://vitejs.dev" target="_blank" imagesrc={reactLogo} alt="Vite logo" classname="logo" />
    </div>
  );
};
const App = () => {
  return (
    <section className="root">
      <div className="content">
      <h1>KING FAI <span>AARON</span></h1>
      <div className="card">
        <p>Web Developer | Zambales, Philippines</p>
        <p>I am a seasoned web developer with a proven track record in the information technology and services sector, boasting a high level of expertise in content management systems, particularly WordPress.</p>
      </div>
      </div>
      <MyApp />
    </section>
  );
};

export default App;
