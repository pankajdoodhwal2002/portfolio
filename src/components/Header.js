import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import "../Css/Header.css";
import Mobileheader from "../Elements/Mobile/Mobileheader";
import { Link } from "react-scroll";

const Header = () => {
  let [menuicon, setmenuicon] = useState(true);
  const [click, setclick] = useState(false);
  const togleicons = () => {
    setmenuicon(!menuicon);
  };
  const closemenu = () => {
    setclick(false);
  };

  return (
    <>
      <div className="headermain">
        <div className="header">
          <div className="logoicon">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="logolink"
            >
              <img src="images/passport1.jpg" alt="" />
              <h2 className="nameHeading">Pankaj Doodhwal</h2>
            </Link>
          </div>
          <div className="menu">
            {menuicon ? (
              <AiOutlineMenu onClick={togleicons} />
            ) : (
              <RxCross2 onClick={togleicons} />
            )}
            {!menuicon ? <Mobileheader /> : <></>}
          </div>
          <div className="menuicons">
            <ul>
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={closemenu}
                  className="buttonlink"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={closemenu}
                  className="buttonlink"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={closemenu}
                  className="buttonlink"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={closemenu}
                  className="buttonlink"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
