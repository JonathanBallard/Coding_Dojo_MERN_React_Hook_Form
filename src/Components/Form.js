
import React, { useState } from 'react';


const Form = props => {
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        cpassword: "",
    })

    const field1 = {
        labelName: "first_name",
        labelValue: "First Name",
        inputType: "text",
        inputValue: "",
    }
      
    const field2 = {
        labelName: "last_name",
        labelValue: "Last Name",
        inputType: "text",
        inputValue: "",
    }
      
    const field3 = {
        labelName: "email",
        labelValue: "Email",
        inputType: "email",
        inputValue: "",
    }
      
    const field4 = {
        labelName: "password",
        labelValue: "Password",
        inputType: "password",
        inputValue: "",
    }
      
    const field5 = {
        labelName: "cpassword",
        labelValue: "Confirm Password",
        inputType: "password",
        inputValue: "",
    }
    
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleValue = e => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const handleFirstName = e => {
        handleValue(e);
        if(e.target.value.length < 1){
            setFirstNameError("First Name is required");
        }
        else if(e.target.value.length < 2){
            setFirstNameError("First Name must be equal to or longer than 2 characters");
        }
        else {
            setFirstNameError('');
        }
    }

    const handleLastName = e => {
        handleValue(e);
        if(e.target.value.length < 1){
            setLastNameError("Last Name is required");
        }
        else if(e.target.value.length < 2){
            setLastNameError("Last Name must be equal to or longer than 2 characters");
        }
        else {
            setLastNameError('');
        }
    }

    const handleEmail = e => {
        handleValue(e);
        if(e.target.value.length < 1){
            setEmailError("Email is required");
        }
        else if(e.target.value.length < 5){
            setEmailError("Email must be equal to or longer than 5 characters");
        }
        else {
            setEmailError('');
        }
    }

    const handlePassword = e => {
        handleValue(e);
        if(e.target.value.length < 1){
            setPasswordError("Password is required");
        }
        else if(e.target.value.length < 8){
            setPasswordError("Password must be equal to or longer than 8 characters");
        }
        else {
            setPasswordError('');
        }
    }

    const handleConfirmPassword = e => {
        handleValue(e);
        if(e.target.value.length < 1){
            setConfirmPasswordError("Confirm Password is required");
        }
        else if(e.target.value != state.password){
            setConfirmPasswordError("Confirm Password must match Password");
        }
        else {
            setConfirmPasswordError('');
        }
    }




    return (
        <>
            <form onSubmit = { e => e.preventDefault() } >
                <div className="form-group">
                    <label htmlFor={field1.labelName}>{field1.labelValue}</label>
                    <input className="form-control" name={field1.labelName} type={field1.inputType} onChange= { handleFirstName }></input>
                    { firstNameError ? 
                    <p style={{color:'red'}} > { firstNameError }</p> : 
                    '' }
                </div>
                <div className="form-group">
                    <label htmlFor={field2.labelName}>{field2.labelValue}</label>
                    <input className="form-control" name={field2.labelName} type={field2.inputType} onChange= { handleLastName } ></input>
                    { lastNameError ? 
                    <p style={{color:'red'}} > { lastNameError }</p> : 
                    '' }
                </div>
                <div className="form-group">
                    <label htmlFor={field3.labelName}>{field3.labelValue}</label>
                    <input className="form-control" name={field3.labelName} type={field3.inputType} onChange= { handleEmail } ></input>
                    { emailError ? 
                    <p style={{color:'red'}} > { emailError }</p> : 
                    '' }
                </div>
                <div className="form-group">
                    <label htmlFor={field4.labelName}>{field4.labelValue}</label>
                    <input className="form-control" name={field4.labelName} type={field4.inputType} onChange= { handlePassword } ></input>
                    { passwordError ? 
                    <p style={{color:'red'}} > { passwordError }</p> : 
                    '' }
                </div>
                <div className="form-group">
                    <label htmlFor={field5.labelName}>{field5.labelValue}</label>
                    <input className="form-control" name={field5.labelName} type={field5.inputType} onChange= { handleConfirmPassword } ></input>
                    { confirmPasswordError ? 
                    <p style={{color:'red'}} > { confirmPasswordError }</p> : 
                    '' }
                </div>
                <input type="Submit" value="Submit"></input>
            </form>
            <div>
                <p>First Name: {state.first_name}</p>
                <p>Last Name: {state.last_name}</p>
                <p>Email: {state.email}</p>
                <p>Password: {state.password}</p>
                <p>Confirm Password: {state.cpassword}</p>
            </div>
        </>
    )

}








export default Form;
