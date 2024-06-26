import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async () => {
        const userData = { name, email, password };
        
        try {
            const response = await fetch("http://localhost:8000/api/register", {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("user-info", JSON.stringify(data));
                navigate("/");
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error("Failed to register:", error);
            alert('Failed to register: ' + error.message);
        }
    };

    return (
        <>
            
            <div className="col-sm-6 offset-sm-3">
                <h1>Register Page</h1>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="Name"
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Password"
                />
                <br />
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Email"
                />
                <br />
                <button onClick={handleSignUp} className="btn btn-primary">Sign Up</button>
            </div>
        </>
    );
}

export default Register;
