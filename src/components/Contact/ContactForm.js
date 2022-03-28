import React from 'react';
import './Contact.css';
import UseForm from './UseForm';
import ValidateForm from './ValidateForm';

const ContactForm = ({submitForm}) => {

   const { handleChange, inputs, handleSubmit, errors } = UseForm(submitForm,ValidateForm);

    return (
            <div>
                <form className="formSection" onSubmit={handleSubmit}>

                    <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={inputs.username} name="username" onChange={handleChange}/>
                        {errors.username && <p className="errorP">{errors.username}</p>}

                    <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={inputs.email} name="email" onChange={handleChange}/>
                        {errors.email && <p className="errorP">{errors.email}</p>}
                   
                    <label htmlFor="message">Message:</label>
                        <textarea id="message" value={inputs.message} onChange={handleChange} rows="8" name="message" />
                        {errors.message && <p className="errorP">{errors.message}</p>}

                    <button type="submit" className="send">Submit</button>

                </form>
            </div>
    )
}

export default ContactForm;