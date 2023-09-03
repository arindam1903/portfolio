import React from "react";
import styles from "../../styles/Intro.module.scss"
import Image from "next/image";


export default function Intro() {
    return <main id={styles.intro_container}>
        <div className="intro-container">
            <div className="desc-section">
                Hi 👋, <br />
                My name is <br />
                <sapn className='name'>Arindam Dutta</sapn> <br />
                I build things for web
            </div>
            <div className="img-section">
                <Image style={{borderRadius: '50%'}}  fill={true}  alt='arindam_dutta_software_engineer_frontend_developer_photo' src='https://res.cloudinary.com/deznixscd/image/upload/v1693749049/portfolio/arindam_dutta_software_engineer_frontend_developer_c0646h.png'/>
            </div>
        </div>

    </main>
}