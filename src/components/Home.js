import React from "react";
import "../Css/Home.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiCodeforces, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { BiSolidDownload } from "react-icons/bi";
import { Link } from "react-scroll";
import resume from "../data/PankajDoodhwal_ArmyInstituteOfTechnology_BTSA_CV.pdf";

const Home = () => {
  return (
    <div className="Homecomp" id="home">
      <div className="socialmedia">
        <a href="https://www.linkedin.com/in/pankaj--doodhwal/" target="_blank">
          <AiFillLinkedin className="socialMediaIcon" />
        </a>
        <a href="https://github.com/pankajdoodhwal2002" target="_blank">
          <AiFillGithub className="socialMediaIcon" />
        </a>
        <a href="https://codeforces.com/profile/quantum00" target="_blank">
          <SiCodeforces className="socialMediaIcon" />
        </a>
        <a href="https://leetcode.com/pankaj2004/" target="_blank">
          <SiLeetcode className="socialMediaIcon" />
        </a>
        <a
          href="https://auth.geeksforgeeks.org/user/pankajdoodhwal0084395/"
          target="_blank"
        >
          <SiGeeksforgeeks className="socialMediaIcon" />
        </a>
        <a href={resume} download="resume">
          <BiSolidDownload className="socialMediaIcon" />
        </a>
      </div>
      <div className="maincontent">
        <div>
          <h1>Hey, I'm Pankaj Doodhwal</h1>
          <p>
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="buttonlink"
          >
            Projects
          </Link>
        </div>
        <div className="mouse"></div>
      </div>
    </div>
  );
};

export default Home;
