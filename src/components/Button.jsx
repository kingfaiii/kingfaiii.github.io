import PropTypes from 'prop-types';

const Button = ({link,target,btnValue}) =>{
    return(
        <>
        <a href={link} target={target}>{btnValue}</a>
        </>
    );
}

Button.propTypes = {
    link: PropTypes.string.isRequired,
    target: PropTypes.string, 
    btnValue: PropTypes.string.isRequired,
  };
export default Button