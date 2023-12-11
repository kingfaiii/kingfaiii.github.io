import Button from "../components/Button";
import Robot from "../assets/robot.png";
const Home = () => {
  return (
    <div className="flex h-90vh items-center max-w-7xl m-auto px-11">
      <div className="w-1/2">
        <p className="text-xl text-custom">Front End Developer</p>
        <h1 className="text-7xl font-normal mb-5 text-white">King Fai Aaron Sit</h1>
        <p className="text-white opacity-70 text-sm">I am a seasoned web developer with a proven track record in the information technology and services sector, boasting a high level of expertise in content management systems, particularly WordPress.</p>
        <Button content="Download CV" />
      </div>
      <div className="w-1/2 container-glow flex justify-end">
        <img className="bounce w-3/4" src={Robot} />
      </div>
    </div>
  );
};
export default Home;
