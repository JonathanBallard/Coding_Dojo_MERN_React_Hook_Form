
import React, { useState } from 'react';
import FormField from './FormField'

const Form = props => {
    const [state1, setState1] = useState(0);
    const [state2, setState2] = useState(0);
    const [state3, setState3] = useState(0);
    const [state4, setState4] = useState(0);
    const [state5, setState5] = useState(0);

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
                    <input name={field1.labelName} type={field1.inputType} onChange= { e => setState1({field1: e.target.value}) }></input>
                </div>
                <div>
                    <label for={field2.labelName}>{field2.labelValue}</label>
                    <input name={field2.labelName} type={field2.inputType} onChange= { e => setState2({field2: e.target.value}) } ></input>
                </div>
                <div>
                    <label for={field3.labelName}>{field3.labelValue}</label>
                    <input name={field3.labelName} type={field3.inputType} onChange= { e => setState3({field3: e.target.value}) } ></input>
                </div>
                <div>
                    <label for={field4.labelName}>{field4.labelValue}</label>
                    <input name={field4.labelName} type={field4.inputType} value={state4.field4} onChange= { e => setState4({field4: e.target.value}) } ></input>
                </div>
                <div>
                    <label for={field5.labelName}>{field5.labelValue}</label>
                    <input name={field5.labelName} type={field5.inputType} onChange= { e => setState5({field5: e.target.value}) } ></input>
                </div>
                <input type="Submit" value="Submit"></input>
            </form>
            <div>
                <p>First Name: {state1.field1}</p>
                <p>Last Name: {state2.field2}</p>
                <p>Email: {state3.field3}</p>
                <p>Password: {state4.field4}</p>
                <p>Confirm Password: {state5.field5}</p>
            </div>
        </>
    )

}








export default Form;
