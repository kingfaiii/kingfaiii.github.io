import Bootstrap from "../assets/bootstrap.png";
import Laravel from "../assets/laravel.png";
import MySQL from "../assets/mysql.png";
import Tailwind from "../assets/tailwind.png";
import React from "../assets/react.png";
import WordPress from "../assets/wordpress.png";
import Shopify from "../assets/shopify.png";

import CardStack from "../components/CardStack";

const About = () => {
  const cardStyle = "bg-white rounded-xl shadow-md w-[14%] shadow-white md:p-3 p-1";
  return (
    <div className="md:mt-[200px] mt-10 md:max-w-7xl max-w-2xl m-auto md:px-11 px-4 flex flex-col justify-center">
      <h1 className="md:text-9xl text-6xl text-white">About.</h1>
      <div className="md:ms-12 text-white md:mt-10 mt-5">
        <p className="font-bold md:text-2xl text-xl md:leading-[110%]">Welcome to my corner of digital universe! I&apos;m King, a passionate Front End Developer with keen eye for creating visually appealing and user-friendly websites.</p>
      </div>
      <p className="font-bold md:text-xl text-3xl mt-5 block md:hidden text-white">Tech Stack</p>
      <div className="md:hidden flex md:gap-10 mt-2 gap-2 justify-center">
            <CardStack image={Bootstrap} cardStyle={cardStyle}/>
            <CardStack image={Laravel} cardStyle={cardStyle}/>
            <CardStack image={MySQL} cardStyle={cardStyle}/>
            <CardStack image={Tailwind} cardStyle={cardStyle}/>
            <CardStack image={React} cardStyle={cardStyle}/>
            <CardStack image={WordPress} cardStyle={cardStyle}/>
            <CardStack image={Shopify} cardStyle={cardStyle}/>
          </div>
      <div className="md:flex block md:mt-14 mt-10 gap-16 text-white leading-[1.75rem]">
        <div className="md:w-[35%] md:mb-0 mb-5">
          <p className="font-bold text-xl">Let&apos;s Build Something Amazing:</p>
          <p className="mt-3 text-justify">Whether you&apos;re looking to revamp your existing website, launch a new project, or dive into the world of e-commerce, I&apos;m here to help. Let&apos;s collaborate and turn your digital dreams into a stunning reality.</p>
        </div>
        <div className="md:w-[65%] text-justify">
          <p className="font-bold text-xl mb-2">Philosophy</p>
          <p className="mb-6">
            My approach to development is rooted in a fusion of creativity and functionality. I believe that a website should not only look good but also perform exceptionally well. Every line of code I write is a piece of a larger puzzle, contributing to a digital landscape that is both
            aesthetically pleasing and highly functional.
          </p>
          <p className="font-bold text-xl mb-2">What I do?</p>
          <p className="mb-6">
            Back in 2014 during my college, I started to have interest on Web Development and I created my first potfolio on notepad Learning the basic skills. Before I graduated on college I got an award a Best Thesis and started to Learn and get Certificates on
            <b> SoloLearn</b>. Fast-forward to today, I&apos;ve had the privillege of building Websites for <b>Digital Marketing Agency,</b> a <b>Huge Corporation</b>.
          </p>
          <p className="mb-6">
            My main focus these days is building projects, creating web application using <b>MERN Stack</b> to showcase my skills. In my free time I&apos;ve also Joined on a community on Discord which is <b>Acdemind</b> which collaborating with another developer to build and to learn with them.
          </p>
          <p className="mb-6">When I&apos;m not at the computer, I&apos;m usually taking some rest, planning what will be my next step on my life, hanging out with my Girlfriend or Visiting my siblings on my grandparents.</p>
          <p className="hidden md:block font-bold text-xl mb-3">Tech Stack</p>
          <div className="md:flex md:gap-10 hidden gap-2 justify-center mb-5">
            <CardStack image={Bootstrap} cardStyle={cardStyle}/>
            <CardStack image={Laravel} cardStyle={cardStyle}/>
            <CardStack image={MySQL} cardStyle={cardStyle}/>
            <CardStack image={Tailwind} cardStyle={cardStyle}/>
            <CardStack image={React} cardStyle={cardStyle}/>
            <CardStack image={WordPress} cardStyle={cardStyle}/>
            <CardStack image={Shopify} cardStyle={cardStyle}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
