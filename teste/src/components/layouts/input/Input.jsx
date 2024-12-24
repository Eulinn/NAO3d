import React from "react";
import styleSheet from "./input.module.css";



const Input = ({placeHolder, value, onChange}) =>{

    return(
        <label>
            <input type="text" placeholder={placeHolder || "Sem valor"} value={value || "0"} onChange={onChange} />
        </label>
    )
}


const Select = () =>{

    return(
        <div></div>
    )
}


const Color = ({value = "#fff", onChange, id}) =>{

    return(
        <label style={{backgroundColor: value}} htmlFor={id} className={styleSheet.color}>
            <input id={id} type="color" value={value} onChange={onChange} />
        </label>
    )
}


export {Input, Select, Color};