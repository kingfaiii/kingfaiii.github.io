import PropTypes from 'prop-types';
const Card = ({ cardContent }) => {
  return (
    <div className="card-portfolio">
      <div className="tools">
        <div className="circle">
          <span className="red box"></span>
        </div>
        <div className="circle">
          <span className="yellow box"></span>
        </div>
        <div className="circle">
          <span className="green box"></span>
        </div>
      </div>
      <div className="card__content">{cardContent}</div>
    </div>
  );
};

Card.propTypes = {
  cardContent: PropTypes.func.isRequired,
};
export default Card;
