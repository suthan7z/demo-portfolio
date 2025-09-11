import React from "react";
import { useState } from "react";
import MenuIcon from "./MenuIcon";
import styles from './Navbar.module.css'

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
    
      <nav className={styles.navbar}>
       <a className={styles.title} href="/">portfolio</a>

        
      
      <div className={styles.menu}>

      {/* Hamburger button */}
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}  
        aria-label="menu"
      >
        <MenuIcon isOpen={isOpen} />
      </button>

        <ul className={`${styles.menulist} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(false)}>
          <li> <a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      
      </nav>
    
  )
}

export default Navbar
