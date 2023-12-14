import {ExperienceData} from "../utils/ExperienceData";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <div className="md:mt-[200px] mt-10 md:max-w-7xl max-w-2xl m-auto md:px-11 px-4 flex flex-col justify-center">
      <h1 className="md:text-9xl text-6xl text-white mb-5">Experience.</h1>
      <div className="md:ms-12 text-white md:mt-10 mt-5">
        <p className="font-bold md:text-2xl text-xl md:leading-[110%]">As I continue to evolve in my career, I remain committed to pushing the boundaries of web development. Each experience has been a building block in my journey, and I&apos;m excited about the opportunities and challenges that lie ahead.</p>
      </div>
      {ExperienceData.map((experience) => {
            return (
              <div key={experience.id} className="last:last:mb-10 md:last:mb-0">
                <ExperienceCard {...experience} />
              </div>
            );
          })}
    </div>
  );
};

export default Experience;
