import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
      <ImageLink link="https://vitejs.dev" target="_blank" imagesrc={viteLogo} alt="Vite logo" classname="logo" />
      <ImageLink link="https://react.dev" target="_blank" imagesrc={reactLogo} alt="React logo" classname="logo react" />
    </div>
  );
};
const App = () => {
  return (
    <section className="root">
      <div className="content">
      <h1>KING FAI AARON.</h1>
      <div className="card">
        <p>Web Developer | Zambales, Philippines</p>
        <p>Im Experienced Web Developer with a demonstrated history of working in the information technology and services industry. Highly skilled in CMS(WordPress)</p>
      </div>
      </div>
      <MyApp />
    </section>
  );
};

export default App;
