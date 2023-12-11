import PropTypes from "prop-types";
const CardStack = (props) => {
  return (
    <div className={props.cardStyle}>
      <img className="" src={props.image} />
    </div>
  );
};

CardStack.propTypes = {
  cardStyle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default CardStack;
