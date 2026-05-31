import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import moeidImg from "../assets/Moeid.jpeg";
import webBg from "../assets/web.png";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const [skillsKey, setSkillsKey] = useState(0);
  const skillsSectionRef = useRef(null);
  const isSkillsInView = useInView(skillsSectionRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (isSkillsInView) {
      setSkillsKey(prev => prev + 1);
    }
  }, [isSkillsInView]);

  const education = [
    {
      title: "BS Information Technology",
      description:
        "National University of Modern Languages (NUML) – Islamabad (Main Campus)\n" +
        "2022 – 2026 | 8th Semester | CGPA: 3.97\n" +
        "Focused on software development, AI technologies, machine learning, and modern web frameworks.",
    },
    {
      title: "Intermediate (FSc Pre-Engineering)",
      description:
        "Sir Syed College – Campus 2, Wah Cantt\n" +
        "2019 – 2021 | Percentage: 75%\n" +
        "Studied core engineering and mathematical principles.",
    },
    {
      title: "Matric (Science Group)",
      description:
        "Saint Francis Schools & Colleges – New Campus, Sarai Alamgir\n" +
        "2019 | Percentage: 88%\n" +
        "Completed foundational science education with distinction.",
    },
  ];

  const skills = [
    {
      name: "React Development",
      description: "Building dynamic, component-based user interfaces using modern React.js, hooks, and state management patterns.",
      icon: "fab fa-react"
    },
    {
      name: "Frontend Development",
      description: "Creating responsive, accessible, and visually engaging web interfaces using HTML, CSS, and JavaScript.",
      icon: "fas fa-code"
    },
    {
      name: "Node.js Backend",
      description: "Developing scalable server-side applications, APIs, and backend logic using Node.js and Express.js.",
      icon: "fab fa-node"
    },
    {
      name: "PHP Backend Development",
      description: "Building dynamic server-side applications, custom functionality, and database-driven websites using PHP.",
      icon: "fab fa-php"
    },
    {
      name: "MySQL Database",
      description: "Designing and managing relational databases, writing complex queries, and optimizing database performance using MySQL.",
      icon: "fas fa-database"
    },
    {
      name: "REST API Development",
      description: "Designing and integrating secure, efficient RESTful APIs for seamless frontend and backend communication.",
      icon: "fas fa-exchange-alt"
    },
    {
      name: "MongoDB Database",
      description: "Designing flexible NoSQL database schemas and managing data efficiently using MongoDB and aggregation pipelines.",
      icon: "fas fa-leaf"
    },
    {
      name: "Firebase Services",
      description: "Building real-time applications using Firebase authentication, Firestore database, and cloud hosting solutions.",
      icon: "fas fa-fire"
    },
    {
      name: "WordPress Development",
      description: "Developing, customizing, and managing WordPress websites with Elementor, themes, plugins, custom PHP code, and MySQL database integration.",
      icon: "fab fa-wordpress"
    },
    {
      name: "Hostinger Deployment",
      description: "Deploying WordPress websites and web applications on Hostinger with domain configuration, SSL setup, MySQL database management, and performance optimization.",
      icon: "fas fa-server"
    },
    {
      name: "SEO Optimization",
      description: "Improving website visibility through on-page SEO, keyword research, and technical content optimization strategies.",
      icon: "fas fa-chart-line"
    },
    {
      name: "Python Programming",
      description: "Writing efficient Python scripts for automation, backend logic, data processing, and AI-based integrations.",
      icon: "fab fa-python"
    },
    {
      name: "Git & Version Control",
      description: "Managing code versions, collaboration workflows, and deployments using Git, GitHub, and CI/CD practices.",
      icon: "fab fa-git-alt"
    },
    {
      name: "Vercel Deployment",
      description: "Deploying fast, scalable web applications with optimized performance using Vercel and modern hosting workflows.",
      icon: "fas fa-bolt"
    },
    {
      name: "Authentication Systems",
      description: "Implementing secure login systems, JWT authentication, and user session management in web applications.",
      icon: "fas fa-lock"
    },
    {
      name: "AI Integration",
      description: "Integrating AI tools, APIs, and intelligent features into web applications for enhanced user experiences.",
      icon: "fas fa-robot"
    },
    {
      name: "Responsive Design",
      description: "Ensuring pixel-perfect layouts and seamless experiences across mobile, tablet, and desktop devices.",
      icon: "fas fa-mobile-alt"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-full" id="about">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h3
              className="intro"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <i className="fas fa-hand-wave"></i> Hello, I'm
            </motion.h3>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Moeid <span className="accent">Abdul Hayee</span>
            </motion.h1>

            <motion.h2
              className="hero-role"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              <i className="fas fa-laptop-code"></i> Full-Stack Developer & WordPress Expert
            </motion.h2>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Building modern web applications with React, Node.js, and PHP/WordPress. 
              Specializing in AI integrations, SEO optimization, and creating impactful digital solutions 
              that drive results. 1.5 years of experience in full-stack development.
            </motion.p>

            {/* Tech Stack Tags with Font Awesome */}
            <motion.div
              className="hero-tech-stack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <span className="tech-stack-label">Tech Stack:</span>
              <div className="tech-stack-icons">
                <motion.i className="fab fa-react tech-icon" whileHover={{ scale: 1.1, y: -3 }} title="React.js"></motion.i>
                <motion.i className="fab fa-node tech-icon" whileHover={{ scale: 1.1, y: -3 }} title="Node.js"></motion.i>
                <motion.i className="fab fa-php tech-icon" whileHover={{ scale: 1.1, y: -3 }} title="PHP"></motion.i>
                <motion.i className="fab fa-wordpress tech-icon" whileHover={{ scale: 1.1, y: -3 }} title="WordPress"></motion.i>
                <motion.i className="fas fa-leaf tech-icon" whileHover={{ scale: 1.1, y: -3 }} title="MongoDB"></motion.i>
                <motion.i className="fas fa-database tech-icon" whileHover={{ scale: 1.1, y: -3 }} title="MySQL"></motion.i>
                <motion.i className="fas fa-fire tech-icon" whileHover={{ scale: 1.1, y: -3 }} title="Firebase"></motion.i>
                <motion.i className="fas fa-robot tech-icon" whileHover={{ scale: 1.1, y: -3 }} title="AI Integration"></motion.i>
              </div>
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-primary">
                  <i className="fas fa-envelope"></i> Let's Connect
                </Link>
              </motion.div>
              <motion.a
                href="/Moeid%20-%20Professional%20CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-primary secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download"></i> View / Download CV
              </motion.a>
            </motion.div>

            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              <motion.a
                href="https://github.com/moeid-526"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/moeidabdulhayee"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-linkedin-in"></i>
              </motion.a>
              <motion.a
                href="https://outfitinsights.com"
                aria-label="Blog"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-wordpress"></i>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 200 }}
            whileHover={{
              scale: 1.05,
              rotate: 5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <img
              src={moeidImg}
              alt="Moeid Abdul Hayee"
              className="hero-photo floating"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="floating-shape shape-1"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="floating-shape shape-2"
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </section>

      {/* EDUCATION JOURNEY */}
      <section className="section education-section">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-graduation-cap"></i> Education Journey
        </motion.h2>

        <div className="journey-wrapper">
          <div className="journey-svg-container">
            <svg className="journey-path" viewBox="0 0 1400 600" preserveAspectRatio="none">
              <motion.path
                d="M80 470 C 260 260, 470 260, 690 380 S 1080 520, 1320 180"
                fill="transparent"
                stroke="url(#goldGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ pathLength: { duration: 1.5, ease: "easeInOut" }, opacity: { duration: 0.5 } }}
              />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="50%" stopColor="#FFA500" />
                  <stop offset="100%" stopColor="#FFD700" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="journey-groups-container">
            {education.map((item, index) => {
              const icons = ["fas fa-school", "fas fa-book", "fas fa-graduation-cap"];
              const years = ["2022-2026", "2019 - 2021", "2019"];
              const animationDelay = index * 0.15;
              
              return (
                <motion.div
                  key={index}
                  className={`journey-group journey-group-${index}`}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: animationDelay, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.div
                    className="journey-node"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: animationDelay + 0.1 }}
                    whileHover={{ scale: 1.15, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                  >
                    <i className={icons[index]}></i>
                  </motion.div>

                  <motion.div 
                    className="journey-connector"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: animationDelay + 0.2, ease: "easeOut" }}
                    style={{ transformOrigin: "top" }}
                  />

                  <motion.div
                    className={`journey-card ${index === 2 ? 'journey-card-2' : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: animationDelay + 0.25, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                  >
                    <motion.div 
                      className="journey-year"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: animationDelay + 0.35, ease: "easeOut" }}
                    >
                      <i className="fas fa-calendar-alt"></i> {years[index]}
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: animationDelay + 0.45, ease: "easeOut" }}
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.35, delay: animationDelay + 0.55, ease: "easeOut" }}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Tree */}
      <section className="section" ref={skillsSectionRef}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-code"></i> Technical Skills
        </motion.h2>

        <div className="skills-tree-wrapper">
          <div className="skills-trunk"></div>
          <div className="skills-branches">
            {skills.map((skill, i) => (
              <motion.div
                key={`${skillsKey}-${i}`}
                className={`skill-branch ${i % 2 === 0 ? "left" : "right"}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2, margin: "-50px" }}
                transition={{ duration: 0.35, delay: i * 0.03, ease: "easeOut" }}
              >
                <div className="branch-connector"></div>
                <div className="skill-circle">
                  <div className="skill-circle-icon">
                    <i className={skill.icon}></i>
                  </div>
                </div>
                <div className="skill-card-wrapper">
                  <Card title={skill.name} description={skill.description} index={i} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}