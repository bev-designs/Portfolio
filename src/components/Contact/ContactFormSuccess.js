import React from 'react';
import './Contact.css';

const successIcon = {
    color: 'rgb(252, 240, 225)',
    fontSize: 80, 
}

const ContactFormSuccess = () => {

    return (
        <div className="formSuccess">
            <div style={successIcon}><ion-icon name="checkmark-outline" style={successIcon}></ion-icon></div> 
            <h2>Thank you!</h2>
            <p>Message request sent</p>
        </div>
    )
}

export default ContactFormSuccess;