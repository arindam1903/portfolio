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
          content="Senior Software Engineer with expertise in scalable applications, system architecture, and modern web technologies. Based in Bengaluru, specializing in high-performance software solutions."
          key="desc"
        />
        <link rel="canonical" href="https://arindamdutta.in" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arindamdutta.in" />
        <meta property="og:title" content="Arindam Dutta | Senior Software Engineer" />
        <meta
          property="og:description"
          content="Software Engineer crafting scalable applications and architectural solutions. Experienced in modern web technologies, system design, and performance optimization."
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
            "jobTitle": "Senior Software Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "Informatica"
            },
            "description": "Software Engineer with expertise in scalable applications, system architecture, and modern development practices. Skilled in building high-performance solutions with focus on code quality and user experience.",
            "knowsAbout": [
              "Software Architecture",
              "Web Development",
              "System Design",
              "Application Performance",
              "React.js",
              "JavaScript",
              "Modern Web Technologies"
            ],
            "skills": [
              "Professional Software Development",
              "Research & Analysis",
              "Highly Skilled Engineer",
              "Technical Leadership",
              "Enterprise Solutions",
              "Software Architecture Research",
              "System Analysis",
              "Artificial Intelligence",
              "AI",
              "Large Language Models (LLMs)",
            ],
            "keywords": [
              "Professional Engineer",
              "Research-Driven Development",
              "Highly Skilled Developer",
              "Enterprise Software",
              "Technical Innovation"
            ]
          }
        ` }} />
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
