import PropTypes from "prop-types";
const Button = (props) => {
  return <button className="text-gray-800 bg-white rounded-lg py-3 px-6 mt-4 font-semibold hover:bg-transparent hover:text-white border border-white transition-all hover:rounded-none hover:scale-75">{props.content}</button>;
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
}
export default Button;
