import React from 'react';
import './Contact.css';

const ContactInfo = () => {
    return (
            <div>

                <div className="iconSection">
                    <div className="icon"><ion-icon name="call-outline"></ion-icon></div>
                    <div className="info"><p>+27 64 121 1582</p></div>
                </div>
                <div className="iconSection">
                    <div><ion-icon name="mail-outline"></ion-icon></div>
                    <div className="info"><p>bevdesigns001@gmail.com</p></div>
                </div>
                <div className="iconSection">
                    <div><ion-icon name="location-outline"></ion-icon></div>
                    <div className="info"><p>Cape Town, South Africa</p></div>
                </div>

            </div>
    )
}

export default ContactInfo;