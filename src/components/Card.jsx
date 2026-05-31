import React from "react";
import { motion } from "framer-motion";

export default function Card({ title, description, link, index }) {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, // Reduced from 50 to 30
      scale: 0.95 // Reduced from 0.9 to 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35, // Reduced from 0.6 to 0.35
        delay: Math.min(index * 0.03, 0.5), // Reduced from 0.1 to 0.03, max delay 0.5s
        ease: "easeOut"
      }
    },
    hover: {
      y: -8, // Reduced from -10 to -8 for smoother hover
      scale: 1.01, // Reduced from 1.02 to 1.01
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15 // Increased from 10 to 15 for less bounce
      }
    }
  };

  return (
    <motion.article 
      className="card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: false, margin: "-50px" }} // Changed once to false for replay
    >
      <div className="card-left-border"></div>
      <div className="card-content">
        <motion.h3
          whileHover={{ color: "#FFD700" }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ 
            duration: 0.3, // Added duration
            delay: Math.min(index * 0.04, 0.6), // Reduced from (index * 0.1 + 0.3) to (index * 0.04)
            ease: "easeOut" 
          }}
        >
          {description}
        </motion.p>
        {link && (
          <motion.a
            className="card-link"
            href={link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project ↗
          </motion.a>
        )}
      </div>
    </motion.article>
  );
}