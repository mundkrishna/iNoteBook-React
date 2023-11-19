import { HttpStatusCode } from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Login() {

    const [credential, setCredential] = useState({ email: "", password: "" });
    const history = useHistory();

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://run.mocky.io/v3/b123529b-9620-4f2d-b731-d99d93a605f3", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: credential.email, password: credential.password })
        });
        const json = await response.json();

        let success = HttpStatusCode.Ok === 200 ? true : false;
        if (success) {
            // redirect
            console.log(HttpStatusCode.Ok, json);
            localStorage.setItem("SignUpDetails", credential.email);
            history.push("/");
        }
        else {
            alert("Invalid Credentials");
        }
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credential.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credential.password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
