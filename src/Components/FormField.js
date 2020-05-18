import React, { useState } from 'react';

const FormField = props => {
    const {info} = props;
    return (
        <div>
            <label for={info.labelName}>{info.labelValue}</label>
            <input name={info.labelName} type={info.inputType} ></input>
        </div>
    )

}










export default FormField;


