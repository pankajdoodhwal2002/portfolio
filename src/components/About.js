import React from "react";
import techskills from "../data/skills";
import { Link } from "react-scroll";
import "../Css/About.css";

const About = () => {
  return (
    <div className="aboutme" id="about">
      <div className="aboutme1">
        <div className="aboutmeintro">
          <h1>About me</h1>
          <div className="underline"></div>
          <p className="aboutsummery">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="introskills">
          <div className="intro">
            <h1 className="introheading">Get to know me!</h1>
            <div className="intropara">
              <p className="firstpara">
                I'm a{" "}
                <span className="introboldtext">Frontend Web Developer</span>{" "}
                building the Front-end of Websites and Web Applications that
                leads to the success of the overall product. Check out some of
                my work in the <span className="introboldtext">Projects</span>{" "}
                section.
              </p>
              <p className="middlepara">
                I also like sharing content related to the stuff that I have
                learned over the years in{" "}
                <span className="introboldtext">Web Development</span> so it can
                help other people of the Dev Community. Feel free to Connect or
                Follow me on my{" "}
                <a href="" className="introboldtext">
                  Linkedin
                </a>{" "}
                where I post useful content related to Web Development and
                Programming
              </p>
              <p className="lastpara">
                I'm open to <span className="introboldtext">Job</span>{" "}
                opportunities where I can contribute, learn and grow. If you
                have a good opportunity that matches my skills and experience
                then don't hesitate to{" "}
                <span className="introboldtext">contact</span> me.
              </p>
            </div>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="Projectbutton"
            >
              Projects
            </Link>
          </div>
          <div className="skills">
            <h1 className="skillsheading">My skills</h1>
            <div className="techskilldiv">
              {techskills.map((skill) => (
                <h5 className="">{skill}</h5>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
