import React, { useRef } from 'react'
import { useState } from 'react';
import './App.css';

const Contact = () => {
    const refInput = useRef();
    console.log(refInput) ;
    // const InputRef = useRef();
    // console.log(InputRef);
  
    const [fname, setFname] = useState("");
    const [pass, setPass] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(fname);
        console.log(pass);
        // setFname(e.target.fname.value)
        //   InputRef.current.style.backgroundColor = "yellow";
        //   refInput.current.style.backgroundColor = "yellow";
    }
        
    return (
    <>
        <h1>Form</h1>
            <form onSubmit={submitHandler}>
            <input type="text" value={fname}  placeholder='User Name' 
            onChange={ (e) => setFname(e.target.value)} /> 
        <br />
            <input type="text" onChange={ (e) =>  setPass(e.target.value) } 
         value={pass} placeholder='Password' /> <br />

        {/* <input type="text" placeholder='Password'  ref={refInput} /> */}

        <br />
            <button type='submit'>Submit</button>
        </form>
    
    </>

  )
}

export default Contact;

