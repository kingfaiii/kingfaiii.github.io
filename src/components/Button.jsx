import PropTypes from "prop-types";
const Button = (props) => {
  return <a href={props.link} target="_blank" rel="noreferrer" className="text-gray-800 bg-white rounded-lg py-3 px-6 font-semibold hover:bg-transparent hover:text-white border border-white transition-all hover:rounded-none hover:scale-75">{props.content}</a>;
};

Button.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}
export default Button;
