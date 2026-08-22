import React from "react";
import Image from "next/image";

const icons = [
    { img: 'https://cdn.jsdelivr.net/npm/simple-icons@11.2.0/icons/openai.svg', name: 'OpenAI' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', name: 'FastAPI' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', name: 'Redis' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', name: 'Next.js' },
    { img: 'https://res.cloudinary.com/deznixscd/image/upload/v1693755019/portfolio/logos_react_vg9rmd.svg', name: 'React' },
    { img: 'https://res.cloudinary.com/deznixscd/image/upload/v1693755020/portfolio/vscode-icons_file-type-js-official_jam5ch.svg', name: 'JavaScript' },
    { img: 'https://res.cloudinary.com/deznixscd/image/upload/v1693755019/portfolio/logos_git-icon_hds9do.svg', name: 'Git' },
    { img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', name: 'Jest' },
]

export default function TechStack() {
    return <div id='techstack_container'>
        <div id='redirect-tech-stack' className="header-section">
            My Tech Stack
            <p className="mt-3">
                Languages, models, and services I use to ship full-stack and AI systems
            </p>
        </div>
        <div className="icons-section">
            {icons.map((item) =>
                <div key={item.name}>
                    <span>
                        <Image
                            width={88}
                            height={88}
                            src={item.img}
                            alt={`${item.name} icon - Technology I work with`}
                        />
                    </span>
                    <span>{item.name}</span>
                </div>
            )}
        </div>
        <p className="practices">LLMs · Vision APIs · AI microservices · System Design · REST APIs · CI/CD</p>
    </div>
}
