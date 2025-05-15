import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import resume from "../../assets/docs/cv.pdf";


const Home = () => {
 
  return (
    <>
      <div className="container-fuild home-container " id="home">
        <div className="contained home-contained">
          <h2>Hello👋🏼 I'm a </h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  'Frontend <span style="color: white;">Developer</span> !',
                ],
                autoStart: true,
                loop: true,
                html: true, // <-- THIS is important!
              }}
            />
          </h1>
          <div className="button">
          <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=03139838559"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
            <a className="btn btn-cv" href={resume} download="cv.pdf">
              My Cv
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
