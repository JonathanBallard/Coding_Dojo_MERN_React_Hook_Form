
import React, { useState } from 'react';
import FormField from './FormField'

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
    


    return (
        <>
            <form onSubmit = { e => e.preventDefault() } >
                <div>
                    <label htmlFor={field1.labelName}>{field1.labelValue}</label>
                    <input name={field1.labelName} type={field1.inputType} onChange= { e => setState({...state, [e.target.name]: e.target.value}) }></input>
                </div>
                <div>
                    <label htmlFor={field2.labelName}>{field2.labelValue}</label>
                    <input name={field2.labelName} type={field2.inputType} onChange= { e => setState({...state, [e.target.name]: e.target.value}) } ></input>
                </div>
                <div>
                    <label htmlFor={field3.labelName}>{field3.labelValue}</label>
                    <input name={field3.labelName} type={field3.inputType} onChange= { e => setState({...state, [e.target.name]: e.target.value}) } ></input>
                </div>
                <div>
                    <label htmlFor={field4.labelName}>{field4.labelValue}</label>
                    <input name={field4.labelName} type={field4.inputType} onChange= { e => setState({...state, [e.target.name]: e.target.value}) } ></input>
                </div>
                <div>
                    <label htmlFor={field5.labelName}>{field5.labelValue}</label>
                    <input name={field5.labelName} type={field5.inputType} onChange= { e => setState({...state, [e.target.name]: e.target.value}) } ></input>
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
