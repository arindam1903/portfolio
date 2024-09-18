import Head from 'next/head';
import Header from './components/Header';
import Intro from './components/Intro';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css'
export default function Home() {
  return (
    <div id='home_container'>
      <Head>
        <title>Arindam Dutta | Senior Software Engineer</title>
        <meta
          name="description"
          content="Arindam Dutta, Senior Software Engineer at Informatica"
          key="desc"
        />
        <meta property="og:title" content="Arindam Dutta, Senior Software Engineer at Informatica" />
        <meta
          property="og:description"
          content="Arindam Dutta is a Senior Software Engineer at Informatica, Bengaluru. Arindam is a frontend developer with 3.5 years of experience. Arindam lives in 
            Bengaluru (Bangalore), India. Arindam Dutta worked at Trademo as a front-end developer in Gurugram (Gurgaon), India. Arindam was part of the core engineering team at Trademo. He is from Dhanbad, Jharkhand, India."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deznixscd/image/upload/v1693749049/portfolio/arindam_dutta_software_engineer_frontend_developer_c0646h.png"
        />
        <link rel="icon" href="/arindam_dutta_software_engineer_frontend_developer.ico" />
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      </Head>
      <Header />
      <Intro />
      <TechStack />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
