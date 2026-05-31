import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const MotionLink = motion(Link);

  return (
    <Router>
      <div className="app">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-copyright">
                <p>© {new Date().getFullYear()} Moeid Abdul Hayee — All rights reserved.</p>
              </div>

              <div className="footer-social">
                <motion.a
                  href="https://github.com/moeid-526"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-github"></i>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/moeidabdulhayee"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </motion.a>
                <motion.a
                  href="https://wa.me/923391226003"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <i className="fab fa-whatsapp"></i>
                </motion.a>
                <MotionLink
                  to="/contact"
                  className="footer-social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-envelope"></i>
                </MotionLink>
              </div>

              <motion.button
                onClick={scrollToTop}
                className="back-to-top"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                ↑
              </motion.button>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}