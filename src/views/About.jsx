import Mystacks from "../components/MyStacks";
const About = () => {
  return (
    <div className="h-90vh max-w-7xl m-auto px-11 flex flex-col justify-center">
      <h1 className="text-9xl text-white">About.</h1>
      <div className="ms-12 text-white mt-10">
        <p className="font-bold text-3xl leading-[110%]">Welcome to my corner of digital universe! I&apos;m King, a passionate Front End Developer with keen eye for creating visually appealing and user-friendly websites.</p>
      </div>
      <div className="flex mt-10 gap-10 text-white text-xl leading-[1.75rem]">
        <div className="w-[35%]">
          <p className="font-bold text-2xl">Let&apos;s Build Something Amazing:</p>
          <p className="mt-3">Whether you&apos;re looking to revamp your existing website, launch a new project, or dive into the world of e-commerce, I&apos;m here to help. Let&apos;s collaborate and turn your digital dreams into a stunning reality.</p>
        </div>
        <div className="w-[65%]">
          <p className="">
            My approach to development is rooted in a fusion of creativity and functionality. I believe that a website should not only look good but also perform exceptionally well. Every line of code I write is a piece of a larger puzzle, contributing to a digital landscape that is both
            aesthetically pleasing and highly functional.
          </p>
          <Mystacks />
        </div>
      </div>
    </div>
  );
};

export default About;
