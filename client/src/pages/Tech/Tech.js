import React from "react";
import "./Tech.css";
import { techlist } from "../../utils/techlist";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div className="container techstack py-5" id="techstack">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <h2 className="text-center text-uppercase mb-3">Technologies Stack</h2>
        <hr />
        <p className="text-center mb-4">
          👉 including programming Languages, frameworks, databases, front-end
          and back-end tools, and APIs
        </p>
      </motion.div>

      <div className="tech-grid">
        {techlist.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              className="tech-card-wrapper d-flex align-items-stretch"
              key={tech._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className="card m-2 w-100 text-center tech-card">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <Icon className="tech-icon mb-2" />
                  <h6 className="mb-0">{tech.name}</h6>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;
