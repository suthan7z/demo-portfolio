
import styles from './App.module.css'
import About from './component/About/About'
import Contact from './component/Contact/Contact'

import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import Projects from './component/Projects/Projects'


function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
