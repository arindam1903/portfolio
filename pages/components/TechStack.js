import React from "react";
import Image from "next/image";
const icons = [
    { img: 'https://res.cloudinary.com/deznixscd/image/upload/v1693754767/portfolio/vscode-icons_file-type-html_c3gajd.svg', name: 'HTML 5' },
    { img: 'https://res.cloudinary.com/deznixscd/image/upload/v1693755020/portfolio/vscode-icons_file-type-css_qrrygw.svg', name: 'CSS' },
    { img: 'https://res.cloudinary.com/deznixscd/image/upload/v1693755020/portfolio/vscode-icons_file-type-js-official_jam5ch.svg', name: 'JavaScript' },
    { img: 'https://res.cloudinary.com/deznixscd/image/upload/v1693755019/portfolio/logos_react_vg9rmd.svg', name: 'React' },
    { img: 'https://res.cloudinary.com/deznixscd/image/upload/v1693755019/portfolio/logos_bootstrap_qxif6i.svg', name: 'Bootstrap' },
    { img: 'https://res.cloudinary.com/deznixscd/image/upload/v1693755020/portfolio/Vector_xe7fq3.svg', name: 'Redux' },
    { img: 'https://res.cloudinary.com/deznixscd/image/upload/v1693755019/portfolio/logos_sass_oq1u7u.svg', name: 'SCSS' },
    { img: 'https://res.cloudinary.com/deznixscd/image/upload/v1693755021/portfolio/vscode-icons_file-type-tailwind_pb8uda.svg', name: 'Tailwind' },
    { img: 'https://res.cloudinary.com/deznixscd/image/upload/v1693755019/portfolio/logos_git-icon_hds9do.svg', name: 'Git' },
    { img: 'https://res.cloudinary.com/deznixscd/image/upload/v1693755394/portfolio/akar-icons_github-fill_oddceu.svg', name: 'Github' },
]


export default function TechStack() {
    return <div id='techstack_container'>
        <div id='redirect-tech-stack' className="header-section">
            My Tech Stack
            <p className="mt-3">
                Technologies I’ve been working with recently
            </p>
        </div>
        <div className="icons-section">
            {icons.map((item) =>
                <div>
                    <span>
                        <Image width={88} height={88} src={item.img} />
                    </span>
                    <span>{item.name}</span>

                </div>
            )}


        </div>
    </div>
}