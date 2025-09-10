import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGithub } from "react-icons/si";

import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
<div className={styles.aboutItem}>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nulla et nostrum reprehenderit id tempora accusamus magnam soluta totam facere, amet est fuga unde nemo dolorem distinctio, deleniti quae vero?
        </p>
    
        </div>
      <section className={styles.skillsSection}>
      <h2 className={styles.title}>My Skills</h2>
      <div className={styles.icons}>
        <SiHtml5 className={styles.icon} />
        <SiCss3 className={styles.icon} />
        <SiJavascript className={styles.icon} />
        <SiReact className={styles.icon} />
       
      </div>
    </section>
      </div>
    </section>
  )
}

export default About
