import { HttpStatusCode } from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Signup() {
    const [signUp, setSignUp] = useState({ name: "", email: "", password: "", cPassword: "" });
    const history = useHistory();

    const onChange = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = signUp;
        const response = await fetch("https://run.mocky.io/v3/5052a3d8-ede0-4ff4-9f2e-af4d8424dc97", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })
        const json = await response.json();
        //let success = HttpStatusCode.Ok === 200 ? true : false;
        if (signUp.name && signUp.email && signUp.password) {
            // redirect
            console.log(HttpStatusCode.Ok, json, signUp);
            localStorage.setItem("signUpEmail", signUp.email);
            localStorage.setItem("signUpPw", signUp.password);
            alert("Account created successfully");
        }
        let localsignUp = localStorage.getItem("signUpEmail");
        if (localsignUp) {
            history.push("/");
        }
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={signUp.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={signUp.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
