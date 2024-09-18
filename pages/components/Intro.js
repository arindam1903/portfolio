import React from "react";
import Image from "next/image";


export default function Intro() {
    return <main id='intro_container'>
        <div id='redirect-intro' className="intro-container">
            <div className="desc-section">
                Hi 👋, <br />
                My name is <br />
                <span className='name d-block'>Arindam Dutta</span>
                I build things for web
            </div>
            <div className="img-section">
                <Image style={{borderRadius: '50%'}}  fill={true}  alt='arindam_dutta_senior_software_engineer_frontend_developer_photo_informatica_trademo_bangalore_gurugram_bengaluru_dhanbad' src='https://res.cloudinary.com/deznixscd/image/upload/v1693749049/portfolio/arindam_dutta_senior_software_engineer_frontend_developer_informatica_trademo_dhanbad_bengaluru.png'/>
            </div>
        </div>

    </main>
}
