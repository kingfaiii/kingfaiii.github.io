import WhatsApp from "../assets/WhatsApp.png";
import LinkedIn from "../assets/linkedin.png";
import Gmail from "../assets/gmail.png";

const Contact = () => {
  return (
    <div className="md:mt-[200px] mt-10 md:max-w-7xl max-w-2xl m-auto md:px-11 px-4 flex flex-col justify-center">
      <h1 className="md:text-9xl text-6xl text-white mb-5">Contact.</h1>
      <div className="md:ms-12 text-white md:mt-10">
        <p className="font-semibold opacity-75 text-4xl">Get in touch, let&apos;s talk.</p>
        <p className="mt-5 text-xl opacity-75">Feel free to connect with me:</p>
        <div className="mt-3 flex gap-4">
          <a href="https://wa.me/639062118931" target="_blank" rel="noreferrer">
            <img className="w-7" src={WhatsApp} alt="WhatsApp" />
          </a>
          <a href="https://www.linkedin.com/in/king-fai-aaron-sit-15b677211/" target="_blank" rel="noreferrer">
            <img className="w-7" src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="mailto:kfasit1016@gmail.com">
            <img className="w-7" src={Gmail} alt="Gmail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
