import PropTypes from "prop-types";

const Circle = ({ id }) => {
  return (
    <div className="img">
      <div className="circleRadiant" id={id}></div>
    </div>
  );
};

Circle.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Circle;
