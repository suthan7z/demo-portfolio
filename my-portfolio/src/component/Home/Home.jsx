import React from 'react'
import main2 from "../../assets/Home/main2.jpg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Ace</h1>
    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero est sit veniam ipsum sequi laborum commodi ea, aliquid voluptates nisi!</p>
    <a href="mailto:mail@gmail.com" className={styles.contactBtn}>Contact Me</a>
    
      </div>
      <img src={main2} alt="Hero" className={styles.heroImg}/>

    </section>
  )
}

export default Home
