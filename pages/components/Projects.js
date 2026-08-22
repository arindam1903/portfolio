import React from "react";

const projects = [
    {
        name: 'FoodScore',
        subtitle: 'AI-powered nutrition scoring — LLMs, vision, and microservices',
        highlights: [
            'Building an AI health-tech platform: GPT-4 Vision extracts nutrition data from food labels, FastAPI runs the model pipeline, and Next.js serves the product and API layer',
            'Designing PostgreSQL schemas with Prisma for users, catalog, and analytics; shipping REST APIs for auth, image processing, and privacy-compliant data aggregation',
            'Designed a dual-tier data model that separates private user scans from a verified public database, with a custom scoring algorithm based on WHO/ICMR nutritional guidelines',
        ],
        stack: ['GPT-4 Vision', 'OpenAI API', 'Python (FastAPI)', 'Next.js', 'PostgreSQL', 'Docker', 'React Native'],
    },
]

export default function Projects() {
    return (
        <div id="projects_container">
            <div id="redirect-projects">
                <span className="header-text">Projects</span>
                <p className="section-intro">AI-driven product work, built as full-stack systems.</p>
            </div>
            {projects.map((project) => (
                <div className="project-card" key={project.name}>
                    <span className="project-name">{project.name}</span>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <ul className="highlights">
                        {project.highlights.map((highlight) => (
                            <li key={highlight}>{highlight}</li>
                        ))}
                    </ul>
                    <div className="stack-list">
                        {project.stack.map((tech) => (
                            <span className="stack-tag" key={tech}>{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
