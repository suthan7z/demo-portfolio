import React from "react";
import styles from "./Contact.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className={styles.container}id="contact">
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.subtitle}>Connect with me on LinkedIn, GitHub, or send me an email!</p>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:youremail@example.com">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
