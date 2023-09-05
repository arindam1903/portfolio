import React from "react";


export default function Contact() {
    return <div id='contact_container'>

        <div id='redirect-contact'>You can reach me at
            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="arindam1903" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/arindam1903?trk=profile-badge"></a></div>
        </div>
        <div className="resume-section">Download my Resume
            <br />
            <button onClick={(e) => { window.open("https://drive.google.com/file/d/1N1V4jYB4CmALEzsqjF3t5BeSOeRu_IgF/view?usp=sharing", "_blank"); }}
                type="button">
                Resume</button>
        </div>


    </div>
}