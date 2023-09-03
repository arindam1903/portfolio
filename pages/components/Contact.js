import React from "react";
import styles from "../../styles/Contact.module.scss"


export default function Contact() {
    return <div id={styles.contact_container}>

        <div>You can reach me at
            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="arindam1903" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/arindam1903?trk=profile-badge"></a></div>
        </div>
        <div>Dowload my Resume
            <br />
            <button onClick={(e) => { window.open("https://drive.google.com/file/d/1LdbJ6a3E1HReWZ95PE0A6nqTNNDDDxyp/view?usp=sharing&export=download", "_blank"); }}
                type="button" class="btn btn-primary btn-lg">Resume</button>
        </div>


    </div>
}