import React from 'react';
import logo from './logo.svg';
import FormField from './Components/FormField'
import Contents from './Components/Contents'
import Form from './Components/Form'
import './App.css';




function App() {
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
    <div className="App">
      <Form />
      <Contents />
    </div>
  );
}

export default App;
