import React, { useState, useEffect } from 'react';
import Home from "../../pages/Home/Home";
import "./Layout.css";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Menu from './Menus/Menu';

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // toggle sidebar
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Add bubble animation dynamically
  useEffect(() => {
    const section = document.querySelector('.sidebare-section');

    if (section) {
      for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = 10 + Math.random() * 30;
        bubble.style.width = bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${6 + Math.random() * 10}s`;
        section.appendChild(bubble);
      }
    }

    // Cleanup on unmount (optional but good practice)
    return () => {
      const bubbles = document.querySelectorAll('.bubble');
      bubbles.forEach(bubble => bubble.remove());
    };
  }, []);

  return (
    <>
      <div className='sidebare-section'>
        <div className={toggle ? "sidebare-toggle sidebare" : "sidebare"}>
          <div className='sidebare-toggleicon'>
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className='container'>
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
