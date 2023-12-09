import PropTypes from "prop-types";

const ImageLink = (props) => {
  return (
    <>
      <a href={props.link} target={props.target}>
        <img src={props.imagesrc} alt={props.alt} className={props.classname} />
      </a>
    </>
  );
};
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
export default ImageLink;
