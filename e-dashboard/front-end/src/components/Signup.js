import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = (e) => {
    e.preventDefault(); 
    console.log(name, email, password);

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={collectData}>
        <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name" required/>
        <input className="inputBox" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email" required/>
        <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password" required/>
        <button className="appButton" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
