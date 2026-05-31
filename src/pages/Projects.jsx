import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Card from "../components/Card";

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [projectsKey, setProjectsKey] = React.useState(0);

  // Reset animation when section comes into view
  useEffect(() => {
    if (isInView) {
      setProjectsKey(prev => prev + 1);
    }
  }, [isInView]);

  const projects = [
    {
      title: "LifeSync",
      description: "AI-Driven emotional wellness platform integrating NLP chatbot, blockchain logging, and progress analytics. Built with React, Node.js, and MongoDB for seamless mental health support.",
      link: "https://github.com/moeid-526/LifeSync",
      tech: ["React", "Node.js", "MongoDB", "AI", "Blockchain"],
      icon: "fab fa-react",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "NUML Complaint System",
      description: "University complaint and feedback web application with admin approval workflow, real-time notifications, and secure Firebase backend integration.",
      link: "https://github.com/moeid-526/NUML-Complaint-System",
      tech: ["React", "Firebase", "Bootstrap", "REST API"],
      icon: "fas fa-university",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "OutfitInsights.com",
      description: "Professional blogging platform focused on fashion, lifestyle, and outfit inspiration. Fully developed and maintained on WordPress with custom theme customization, plugin integration, and comprehensive SEO optimization for maximum reach.",
      link: "https://outfitinsights.com",
      tech: ["WordPress", "PHP", "MySQL", "SEO", "Elementor", "Hostinger"],
      icon: "fab fa-wordpress",
      gradient: "linear-gradient(135deg, #ffd700 0%, #ffb800 100%)",
      isLive: true
    },
    {
      title: "Portfolio Website",
      description: "Modern, animated portfolio showcasing skills and projects with premium UI/UX, responsive design, and smooth animations using Framer Motion.",
      link: "https://github.com/moeid-526/Portfolio",
      tech: ["React", "Framer Motion", "CSS3", "Responsive"],
      icon: "fas fa-briefcase",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="projects-bg-shapes">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="projects-badge"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <i className="fas fa-rocket"></i> My Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            className="projects-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <i className="fas fa-lightbulb"></i> Crafting innovative solutions that blend creativity with cutting-edge technology
          </motion.p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1, margin: "-50px" }}
          key={projectsKey}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card-wrapper"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="project-card">
                {/* Card Gradient Border */}
                <div className="card-glow" style={{ background: project.gradient }}></div>
                
                {/* Live Badge for OutfitInsights */}
                {project.isLive && (
                  <div className="live-badge">
                    <span className="live-dot"></span>
                    <i className="fas fa-globe"></i> Live
                  </div>
                )}
                
                {/* Card Icon */}
                <div className="project-icon" style={{ background: project.gradient }}>
                  <i className={project.icon}></i>
                </div>

                {/* Tech Tags */}
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Project Links */}
                <motion.a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{project.isLive ? "Visit Website" : "View Project"}</span>
                  <i className="fas fa-arrow-right"></i>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="projects-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/moeid-526"
            target="_blank"
            rel="noreferrer"
            className="view-more-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-github"></i> View All on GitHub
            <i className="fas fa-external-link-alt"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}