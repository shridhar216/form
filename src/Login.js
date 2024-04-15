import React, { useState} from 'react';
import "./Login.css";


const Login = () => {
  let [nameInput , setNameInput] = useState("");
  let [userNameInput, setUserNameInput] = useState("");
  let [numInput, setNumInput] = useState();
  let [emailInput, setEmailInput] = useState("");
  let [passwordInput, setPasswordInput] = useState();
   
  const [nameError, setNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [numError, setNumError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validation = () => {
    setNameError("");
    setUserNameError("");
    setNumError("");
    setEmailError("");
    setPasswordError("");

    const namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!namePattern.test(nameInput)){
      setNameError("invalid name");
    }

    const userNamePattern = /^[0-9A-Za-z]{6,16}$/;

    if(!userNamePattern.test(userNameInput)){
      setUserNameError("only letters and numbers and 6-16 char long");
  
    }

    const emailPattern= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailPattern.test(emailInput)){
      setEmailError("Invalid email address!");
  
    }

    const numPattern = /^\d{10}$/;
    if(!numPattern.test(numInput)){
      setNumError("must be 10 digits only");
    }
     
    
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    if (!passwordPattern.test(passwordInput)) {
      setPasswordError("Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.");
    }

  } 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //alert("Name is " + nameInput + " username is " + userNameInput + " Phone Number is " + numInput + " email is " + emailInput);
    validation() ;
    };
  

  return (
   <>
            <p className="title">Registration Form</p>

            <form className="App" onSubmit= {handleFormSubmit} >
                <label for="name">Name</label>
                <input type="text" id="name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                <label for="name" className={"error"}> {nameError}</label>

                <label for="username">UserName</label>
                <input type="text" id="username" value= {userNameInput} onChange={(e) => setUserNameInput(e.target.value)} />
                <label for="username" className={"error"}> {userNameError}</label>

                <label for="num">Mobile</label>
                <input type="number" id="num" value= {numInput} onChange={(e) => setNumInput(e.target.value)} />
                <label for="num" className={"error"}> {numError}</label>

                <label for="email">Email Id</label>
                <input type="email" id="email" value= {emailInput} onChange={(e) => setEmailInput(e.target.value)}/>
                <label for="email" className={"error"}> {emailError}</label>

                <label for="pass">Password</label>
                <input type="password" id="pass" value= {passwordInput} onChange={(e) => setPasswordInput(e.target.value)}/>
                <label for="pass" className={"error"}> {passwordError}</label>

                <input type="submit" id="submit" value="submit" />
            </form>
        </>
  );
}

export default Login