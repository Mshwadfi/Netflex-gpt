


const FormValidation = (email , password) =>{

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    return (!isValidEmail || !isValidPassword)? "Invalid Email Or Password!" : null;
}

export default FormValidation;