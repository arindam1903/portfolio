import React from "react";


export default function Contact() {
    return <div id='contact_container'>

        <div id='redirect-contact'>You can reach me at
            <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="light"
                data-type="HORIZONTAL"
                data-vanity="arindam1903"
                data-version="v1"
                title="Arindam Dutta's LinkedIn Profile Badge"
            >
                <a
                    className="badge-base__link LI-simple-link"
                    href="https://in.linkedin.com/in/arindam1903?trk=profile-badge"
                    title="View Arindam's LinkedIn Profile"
                ></a>
            </div>
        </div>
        <div className="resume-section">Download my Resume
            <br />
            <a
                href="https://drive.google.com/file/d/1t-uiPvbmoHg9xpy4RBCs6PyM6PdJ7GlR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                aria-label="Download Resume PDF"
            >
                Resume
            </a>
        </div>


    </div>
}