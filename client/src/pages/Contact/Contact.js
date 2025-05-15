import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }

      const res = await axios.post("http://localhost:8001/api/v1/portfolio/sendEmail", {

        name,
        email,
        msg,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message || "Failed to send message");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while sending the message");
    }
  };

  return (
    <div className="contact" id="contact">
      <ToastContainer />
      <div className="card card0 border-0">
        <div className="row justify-content-center">
          <div className="col-12">
            <motion.div
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="card2 d-flex card border-0 px-4 py-5"
            >
              <div className="row">
                <div className="row">
                  <h6>
                    Contact With
                    <BsLinkedin color="blue" size={30} className="ms-2" />
                    <BsGithub color="black" size={30} className="ms-2" />
                    <BsFacebook color="blue" size={30} className="ms-2" />
                  </h6>
                </div>

                <div className="row px-3 mb-4 align-items-center">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>
                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    className="mb-3"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <textarea
                    name="msg"
                    placeholder="Write your message"
                    className="mb-3"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </div>
                <div className="row px-3">
                  <button className="button1" onClick={handleSubmit}>
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
