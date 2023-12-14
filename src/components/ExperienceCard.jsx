import PropTypes from "prop-types";
const ExperienceCard = (props) => {
  return (
    <div className="md:flex block md:ms-12 gap-2 mb-2 mt-10 justify-start text-white">
      <div className="md:placeholder:w-1/12">
        <p className="md:opacity-50 opacity-75 text-sm">{props.year}</p>
      </div>
      <div className="md:w-1/3">
        <p className="text-custom md:text-xl text-3xl font-semibold">{props.position}</p>
        <div className="flex"></div>
        <p className="text-5xl leading-[110%] mb-2"></p>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  year: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default ExperienceCard;
