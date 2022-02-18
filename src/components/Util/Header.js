import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <header className="header shadow-md shadow-blue-400 sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-2xl mr-10 text-blue">
            Piggy Bank
          </Link>
          <HashLink
            to="#how-it-works"
            smooth
            scroll={(el) => scrollWithOffset(el)}
            className="mx-4 text-blue hover:underline hover:underline-offset-8"
          >
            How It Works
          </HashLink>
          <HashLink
            to="#features"
            className="mx-4 text-blue hover:underline hover:underline-offset-8"
            scroll={(el) => scrollWithOffset(el)}
          >
            Features
          </HashLink>
          <HashLink
            to="#help"
            scroll={(el) => scrollWithOffset(el)}
            className="mx-4 text-blue hover:underline hover:underline-offset-8"
          >
            Help
          </HashLink>
        </div>
        <div className="flex items-center">
          <NavLink
            to="/login"
            className="mx-4 text-blue font-bold hover:underline hover:underline-offset-8"
          >
            Log In
          </NavLink>
          <NavLink
            to="/register"
            className="mx-4 font-bold px-5 py-2 bg-blue-800 rounded-md text-white"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
