const ValidateForm = (inputs) => {
    let errors = {};

    // name validate
    if (!inputs.username.trim()) {
        errors.username = "Name required";
    }

    // email validate
    if (!inputs.email) {
        errors.email = "Email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
        errors.email = "Email address is invalid";
    }

    // message validate
    if (!inputs.message.trim()) {
        errors.message = "Message required";
    }

    return errors;
}


export default ValidateForm;