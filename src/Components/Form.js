
import React, { useState } from 'react';
import FormField from './FormField'

const Form = props => {
    const [state, setState] = useState(0);

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
                    <label for={field1.labelName}>{field1.labelValue}</label>
                    <input name={field1.labelName} type={field1.inputType} onChange= { e => setState({field1: e.target.value}) }></input>
                </div>
                <div>
                    <label for={field2.labelName}>{field2.labelValue}</label>
                    <input name={field2.labelName} type={field2.inputType} onChange= { e => setState({field2: e.target.value}) } ></input>
                </div>
                <div>
                    <label for={field3.labelName}>{field3.labelValue}</label>
                    <input name={field3.labelName} type={field3.inputType} onChange= { e => setState({field3: e.target.value}) } ></input>
                </div>
                <div>
                    <label for={field4.labelName}>{field4.labelValue}</label>
                    <input name={field4.labelName} type={field4.inputType} value={state.field4} onChange= { e => setState({field4: e.target.value}) } ></input>
                </div>
                <div>
                    <label for={field5.labelName}>{field5.labelValue}</label>
                    <input name={field5.labelName} type={field5.inputType} onChange= { e => setState({field5: e.target.value}) } ></input>
                </div>
                <input type="Submit" value="Submit"></input>
            </form>
            <div>
                <p>First Name: {state.field1}</p>
                <p>Last Name: {state.field2}</p>
                <p>Email: {state.field3}</p>
                <p>Password: {state.field4}</p>
                <p>Confirm Password: {state.field5}</p>
            </div>
        </>
    )

}








export default Form;
