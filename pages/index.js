import Head from 'next/head';
import Header from './components/Header';
import Intro from './components/Intro';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import styles from "../styles/Home.module.scss"
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css'
export default function Home() {
  return (
    <div id={styles.home_container}>
      <Head>
        <title>Arindam Dutta</title>
        <link rel="icon" href="/arindam_dutta_software_engineer_frontend_developer.ico" />
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      </Head>
        <Header />
        <Intro />
        <TechStack />
        {/* <Projects /> */}
        <About />
        <Contact />
        {/* <Footer/> */}
    </div>
  )
}
