import Button from "../components/Button";
import Robot from "../assets/robot.png";
import CV from "../assets/King_Fai_Aaron_Sit_CV.pdf";
const Home = () => {
  return (
    <div className="md:flex block md:h-90vh justify-center flex-wrap items-center mt-11 md:mt-auto md:max-w-7xl w-full m-auto md:px-11 px-4">
      <div className="lg:w-1/2">
        <p className="md:text-xl text-sm text-custom">Front End Developer</p>
        <h1 className="lg:text-7xl md:text-6xl text-[42px] font-normal md:mb-5 mb-2 text-white">King Fai Aaron Sit</h1>
        <p className="text-white opacity-70 text-sm mb-7">As a Front-End Developer, I bring a diverse set of skills to the table, ensuring that every project I undertake is executed with precision and creativity. My proficiency extends across various technologies and methodologies, making me a versatile and effective developer.</p>
        <Button link={CV} content="Download CV" />
      </div>
      <div className="lg:w-1/2 container-glow flex md:justify-end justify-center">
        <img className="bounce md:w-3/4 w-36 md:mt-0 mt-10" src={Robot} />
      </div>
    </div>
  );
};
export default Home;
