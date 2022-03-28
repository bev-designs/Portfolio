import React, { useState, useEffect, useCallback } from 'react';
import emailjs from 'emailjs-com';
import ContactForm from './ContactForm';


const UseForm = (callback,ValidateForm) => {

    const [inputs, setInputs] = useState({ username: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
   
    const handleSubmit = (event) => {
        event.preventDefault();

        setErrors(ValidateForm(inputs));

        setIsSubmitting(true);

        emailjs.sendForm('service_muhishf', 'template_jx2ceor', event.target, 'G053dflVlWoqtH4BB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        event.target.reset();
    };   

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) { callback() }
    }, [errors])

    const handleChange = (event) => {
        setInputs({ ...inputs, [ event.target.name ]: event.target.value})
    };

    return { handleChange, inputs, handleSubmit, errors};

}

export default UseForm;