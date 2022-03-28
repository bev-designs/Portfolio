import React, { useState} from 'react';
import './Contact.css';
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import ContactFormSuccess from './ContactFormSuccess'

const ContactSection = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    }

    return (
            <div className="contactContainer">

                <p>Get in touch</p>
                <h1>Contact</h1>

                <div className="containerWrapper">

                    <div className="sectionLeft">
                        <ContactInfo />
                    </div>
                    <div className="sectionRight">
                        {!isSubmitted ? (
                        <ContactForm submitForm = {submitForm} /> ) : 
                        (<ContactFormSuccess />) }
                    </div>

                </div>
                
            </div>
    )
}

export default ContactSection;