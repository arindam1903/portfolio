import Head from 'next/head';
import Header from './components/Header';
import Intro from './components/Intro';
import TechStack from './components/TechStack';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css'
export default function Home() {
  return (
    <div id='home_container'>
      <Head>
        <title>Arindam Dutta | Full-Stack Software Engineer · AI Systems</title>
        <meta
          name="description"
          content="Full-stack software engineer building AI-driven systems — LLMs, vision APIs, and product platforms. 5+ years of experience. Member of Technical Staff at Salesforce, Bengaluru."
          key="desc"
        />
        <link rel="canonical" href="https://arindamdutta.in" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arindamdutta.in" />
        <meta property="og:title" content="Arindam Dutta | Full-Stack Software Engineer · AI Systems" />
        <meta
          property="og:description"
          content="Full-stack software engineer building AI-driven systems — LLMs, vision APIs, and scalable product platforms."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deznixscd/image/upload/v1693749049/portfolio/arindam_dutta_software_engineer_frontend_developer_c0646h.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arindam_1903" />
        <link rel="icon" href="/arindam_dutta_software_engineer_frontend_developer.ico" />
        <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

        {/* JSON-LD structured data for Person */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Arindam Dutta",
            "url": "https://arindamdutta.in",
            "sameAs": [
              "https://github.com/arindam1903",
              "https://www.linkedin.com/in/arindam1903/",
              "https://twitter.com/arindam_1903"
            ],
            "jobTitle": "Full-Stack Software Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "Salesforce"
            },
            "email": "arindam408@gmail.com",
            "description": "Full-stack software engineer building AI-driven systems with LLMs, vision APIs, and scalable product platforms.",
            "knowsAbout": [
              "Artificial Intelligence",
              "Large Language Models",
              "OpenAI API",
              "Computer Vision",
              "Python",
              "FastAPI",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "System Design",
              "REST APIs",
              "Microservices"
            ],
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "MAKAUT, West Bengal"
            }
          }
        ` }} />
      </Head>
      <Header />
      <Intro />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
