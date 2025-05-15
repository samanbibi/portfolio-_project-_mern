import React from "react";
import "./Project.css";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Here are some of my top recent projects, showcasing my skills in full-stack development, responsive design, and modern web technologies
        </p>

        {/* card design */}
        <div className="row" id="ads">
          <motion.div
            initial={{ rotate: -180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1 }}
            className="d-flex flex-wrap justify-content-center"
          >
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">

                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvn6r61CQID56FAhQdYkOLXXyE9P0ixvCTQ&s"
                    alt="project1"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                       Ecommerce Food Website
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/samanbibi/food--website-full-stack"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="project2"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Ecommerce Shopping Website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/samanbibi/ecommerce-fullstack-design"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTJUTsPu0f0du0AwZKvUKMWjLXqs3LQFMPA&s"
                    alt="project1"
                  />
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">React Project</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/samanbibi/React-project"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Project;
