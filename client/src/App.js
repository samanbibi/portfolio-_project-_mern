import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Tech from "./pages/Tech/Tech";
import Project from "./pages/Project/Project";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
// import "./components/Footer/Footer.css";
import "./pages/Footer/Footer.css"
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./components/Layout/MobileNav/MobileNav";

function App() {
  return (
    <>
      <MobileNav/>
      <Layout/>
      <div className="container">
      <About/>
      <Education/>
      <Tech/>
      <Project/>
      <Contact/>
      </div>
      <footer className="footer-section">
  <div className="footer-content text-center">
    <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    <div className="footer-links">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="mailto:youremail@example.com">Email</a>
    </div>
  </div>
</footer>
<ScrollToTop smooth  style={{
    borderRadius: '50%',
    backgroundColor: 'white', // Tailwind's slate-900 or choose your own
    color: 'black',
    width: '50px',
    height: '50px',
    right: '20px',
    bottom: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    zIndex: 1000,
  }}/>
    </>
  );
}

export default App;
