import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", "a10fc962-ae16-4902-90c3-d5dd7c65eaf7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      event.target.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      setResult("❌ Error sending message. Please try again.");
      setTimeout(() => setResult(""), 5000);
    }
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="contact-page-section">
      <motion.div
        className="contact-page-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="contact-page-title">
          <i className="fas fa-envelope"></i> Get In Touch
        </motion.h1>
        <motion.p variants={itemVariants} className="contact-page-subtitle">
          <i className="fas fa-comment-dots"></i> Have a project in mind? Let's collaborate and bring ideas to life.
        </motion.p>

        <div className="contact-page-grid">
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="contact-form-wrapper">
            <h2><i className="fas fa-paper-plane"></i> Send me a message</h2>
            <form onSubmit={onSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment"></i>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <><i className="fas fa-spinner fa-spin"></i> Sending...</>
                ) : (
                  <><i className="fas fa-paper-plane"></i> Send Message</>
                )}
              </motion.button>

              {result && (
                <div className={`form-result ${result.includes("✅") ? "success" : "error"}`}>
                  {result}
                </div>
              )}
            </form>
          </motion.div>

          {/* Other Ways to Connect */}
          <motion.div variants={itemVariants} className="connect-wrapper">
            <h2><i className="fas fa-link"></i> Other Ways to Connect</h2>
            <div className="connect-cards">
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/moeid-abdul-hayee-10aaa4315/"
                target="_blank"
                rel="noreferrer"
                className="connect-card linkedin"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="connect-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div className="connect-info">
                  <h3>LinkedIn</h3>
                  <p>Connect professionally</p>
                  <span className="connect-link">linkedin.com/in/moeid-abdul-hayee</span>
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/moeid-526"
                target="_blank"
                rel="noreferrer"
                className="connect-card github"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="connect-icon">
                  <i className="fab fa-github"></i>
                </div>
                <div className="connect-info">
                  <h3>GitHub</h3>
                  <p>Check my code</p>
                  <span className="connect-link">github.com/moeid-526</span>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/923391226003"
                target="_blank"
                rel="noreferrer"
                className="connect-card whatsapp"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="connect-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="connect-info">
                  <h3>WhatsApp</h3>
                  <p>Quick chat</p>
                  <span className="connect-link">+92 339 1226003</span>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:moeidabdulhayee@gmail.com"
                className="connect-card email"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="connect-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="connect-info">
                  <h3>Direct Email</h3>
                  <p>Send me an email manually or fill the contact form</p>
                  <span className="connect-link">moeidabdulhayee@gmail.com</span>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}