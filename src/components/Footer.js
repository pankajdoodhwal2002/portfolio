import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiCodeforces, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { BiSolidDownload } from "react-icons/bi";
import "../Css/Footer.css";
import resume from "../data/PankajDoodhwal_ArmyInstituteOfTechnology_BTSA_CV.pdf";

const Footer = () => {
  return (
    <div className="footerfull">
      <div className="footercomponent">
        <div className="footerupper">
          <div className="footerintro">
            <h1>Pankaj Doodhwal</h1>
            <p>
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div className="social">
            <h1>Social</h1>
            <div>
              <a
                href="https://www.linkedin.com/in/pankaj--doodhwal/"
                target="_blank"
              >
                <AiFillLinkedin className="socialIcon" />
              </a>
              <a href="https://github.com/pankajdoodhwal2002" target="_blank">
                <AiFillGithub className="socialIcon" />
              </a>
              <a
                href="https://codeforces.com/profile/quantum00"
                target="_blank"
              >
                <SiCodeforces className="socialIcon" />
              </a>
              <a href="https://leetcode.com/pankaj2004/" target="_blank">
                <SiLeetcode className="socialIcon" />
              </a>
              <a
                href="https://auth.geeksforgeeks.org/user/pankajdoodhwal0084395/"
                target="_blank"
              >
                <SiGeeksforgeeks className="socialIcon" />
              </a>
              <a href={resume} download="resume">
                <BiSolidDownload className="socialIcon" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            © Copyright 2023. Made by <a href="">Pankaj Doodhwal</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
