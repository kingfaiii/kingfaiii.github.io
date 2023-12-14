import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card md:w-[300px] relative mx-0 my-auto h-[200px] bg-[#f2f2f2] rounded-xl flex items-center justify-center overflow-hidden">
      <img src={props.imageSrc} /> 
    <div className="card__content flex flex-col justify-between">
      <p className="card__title mb-5 text-3xl">{props.title}</p>
      <a className=" bg-slate-600 text-white py-3 px-6 transition-all hover:rounded-none hover:scale-75 rounded-lg font-semibold w-1/2 text-center" href={props.link}>View</a>
    </div>
  </div>
  
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default Card;
