import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = "text-white mx-3 hover:opacity-75";
  return (
    <nav className="flex justify-between max-w-7xl m-auto px-11 py-5">
      <div>
        <p className="text-white uppercase font-bold text-2xl">
          King <span className="text-custom">Fai</span>
        </p>
      </div>
      <div className="items-center flex">
        <Link to="/" className={linkStyle}>
          Home
        </Link>
        <Link to="/about" className={linkStyle}>
          About
        </Link>
        <Link to="/projects" className={linkStyle}>
          Projects
        </Link>
        <Link to="/experience" className={linkStyle}>
          Experience
        </Link>
        <Link to="/contact" className={linkStyle}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
