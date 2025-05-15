import React from "react";
import "./Menu.css";
import { Link } from "react-scroll";
import { FcHome, FcAbout } from "react-icons/fc";
import { GrTechnology, GrProjects } from "react-icons/gr";
import { MdCastForEducation } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

const Menu = ({ toggle }) => {
  return (
    <div className="menu-container">
      {toggle ? (
        <>
          <div className="profile-pic">
            <img
              src="https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg"
              alt="profile pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-links">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome />
                  home
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-links">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout />
                  About
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-links">
                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                  <MdCastForEducation />
                  Education details
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-links">
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                  <GrTechnology />
                  Tech Stack
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-links">
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                  <GrProjects />
                  Projects
                </Link>
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-links">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                  <IoIosContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-item">
            <div className="nav-links">
              <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                <FcHome />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-links">
              <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                <FcAbout />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-links">
              <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                <MdCastForEducation />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-links">
              <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                <GrTechnology />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-links">
              <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                <GrProjects />
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-links">
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                <IoIosContact />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;
