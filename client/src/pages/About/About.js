import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-pic">
            <img
              src="https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg"
              alt="profile-pic"
            />
          </div>
          <div className="col-md-6 about-content col-xl-6 col-lg-6 col-xs-12">
            <h2>ABOUT ME</h2>
            <p>
              <span>Saman Bibi – Frontend Software Engineer</span><br></br>Frontend Software Engineer
              with a strong focus on building responsive, user-friendly web
              interfaces using React, JavaScript, and Tailwind CSS. Passionate Frontend Software Engine
              about clean code, great design, and delivering seamless user
              experiences across all devices
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
