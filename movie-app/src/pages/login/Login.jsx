
import { useState } from "react";
import './Login.css';

function Login({ onSuccess }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();

        if (name.trim() === "" || password.trim() === "") {
            alert('some fields are empty');
            return;
        }
        let userData = JSON.parse(localStorage.getItem("userData"));
        if (userData) {
            var userName = userData.name;
            var userPassword = userData.password;
            if (userName.toLowerCase() !== name.toLowerCase() || userPassword !== password) {
                setError('Invalid Credentials');
                return;
            } else {
                setError('login successful');
                onSuccess(true);
            }
        }else{
            setError('Invalid Credentials')
        }

    }

    function handleNameChange(event) {
        setError('');
        let name = event.target.value;
        setName(name);
    }

    function handlePasswordChange(event) {
        setError();
        let password = event.target.value;
        setPassword(password);
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type='text' id="name" value={name} onChange={handleNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type='password' id="password" value={password} onChange={handlePasswordChange} />
                </div>

                <div className="form-group">
                    <button type="submit">Login</button>
                </div>
            </form>
            {
                !!error && <p className="error-message">{error}</p>
            }
        </div>
    )
}

export default Login;
