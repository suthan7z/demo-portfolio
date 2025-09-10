
import React from "react";
import projects from "./ProjectsData";
import styles from "./Projects.module.css";

const Projects = () => (
  <section className={styles.container} id="projects">
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.projectsGrid}>
      {projects.map((p, i) => (
        <div key={i} className={styles.card}>
          <img src={p.image} alt={p.title} className={styles.image} />
          <div className={styles.content}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className={styles.links}>
              <a href={p.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>
              <a href={p.repo} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
