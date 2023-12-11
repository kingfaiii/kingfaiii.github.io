import WhatsApp from "../assets/WhatsApp.png";
import LinkedIn from "../assets/linkedin.png";
import Gmail from "../assets/gmail.png";

const Contact = () => {
  return (
    <div className="h-90vh max-w-7xl m-auto px-11 flex flex-col justify-center">
      <h1 className="text-9xl text-white">Contact.</h1>
      <div className="ms-12 text-white mt-10">
        <p className="font-semibold opacity-75 text-4xl">Get in touch, let&apos;s talk.</p>
        <p className="mt-5 text-xl opacity-75">Feel free to connect with me:</p>
        <div className="mt-3 flex gap-4">
          <a href="#">
            <img className="w-7" src={WhatsApp} alt="WhatsApp" />
          </a>
          <a href="#">
            <img className="w-7" src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="#">
            <img className="w-7" src={Gmail} alt="Gmail" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
