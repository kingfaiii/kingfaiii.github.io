import PropTypes from "prop-types";

const Button = ({ link, target, btnValue }) => {
  return (
    <>
      <a className="cta" href={link} target={target}>
        <span>{btnValue}</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </a>
    </>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  target: PropTypes.string,
  btnValue: PropTypes.string.isRequired,
};
export default Button;
