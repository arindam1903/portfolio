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
        <title>Arindam Dutta | Software Engineer</title>
        <meta
          name="description"
          content="Arindam Dutta, Software Engineer in Gurgaon / Gurugram, Frontend developer at Trademo"
          key="desc"
        />
        <meta property="og:title" content="Arindam Dutta, Software Engineer at Trademo" />
        <meta
          property="og:description"
          content="Arindam is a Software engineer currently working at Trademo. He is a frontend developer with 2.5 years of experience. He lives in Gurgaon / Gurugram"
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
