import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [aboutKey, setAboutKey] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      setAboutKey(prev => prev + 1);
    }
  }, [isInView]);

  const infoCards = [
    { icon: "fas fa-user", label: "Name", value: "Moeid Abdul Hayee" },
    { icon: "fas fa-calendar-alt", label: "Date of Birth", value: "December 26, 2003" },
    { icon: "fas fa-map-marker-alt", label: "Place of Birth", value: "Sarai Alamgir, District Gujrat, Punjab, Pakistan" },
    { icon: "fas fa-home", label: "Current Residence", value: "Wah Cantt, District Rawalpindi, Pakistan" },
    { icon: "fas fa-birthday-cake", label: "Age", value: "22 Years" },
    { icon: "fas fa-graduation-cap", label: "CGPA", value: "3.97 / 4.00" },
    { icon: "fas fa-chart-line", label: "Current Status", value: "Learning, Managing outfitinsights.com, and looking for opportunities" },
    { icon: "fas fa-brain", label: "Philosophy", value: "Hard work + Smart work combined" }
  ];

  return (
    <section className="about-page-section" ref={sectionRef}>
      <div className="about-bg-shapes">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <div className="about-container">
        {/* Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
            <motion.div 
                        className="about-badge"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                      >
                        <i className="fas fa-user-circle"></i> Get to Know Me
                      </motion.div>
          <h1>
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="about-subtitle">
            <i className="fas fa-quote-left"></i> Passionate developer focused on creating impactful digital solutions
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Left Column - Profile Info */}
          <div>
            <motion.div
              className="profile-image-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="profile-image">
                <i className="fas fa-code"></i>
              </div>
              <div className="profile-status">
                <span className="status-dot"></span>
                Open for Opportunities
              </div>
            </motion.div>

            <motion.div
              className="profile-quote"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <i className="fas fa-quote-right"></i>
              <p>"Building bridges between ideas and reality through clean code and innovative solutions"</p>
            </motion.div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="about-info-grid" key={aboutKey}>
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                className="info-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="info-icon">
                  <i className={card.icon}></i>
                </div>
                <div className="info-content">
                  <h3>{card.label}</h3>
                  <p>{card.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="about-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/contact" className="cta-btn">
            <i className="fas fa-paper-plane"></i> Let's Work Together
          </Link>
          <a href="/Moeid%20-%20Professional%20CV.pdf" download className="cta-btn secondary">
            <i className="fas fa-download"></i> Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}