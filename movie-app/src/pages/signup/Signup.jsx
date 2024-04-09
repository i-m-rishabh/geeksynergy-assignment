import { useState } from "react";
import './Signup.css';

function Signup({onSignedUp}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [profession, setProfession] = useState('software-developer');

    function handleFormSubmit(event){
        event.preventDefault();
        if(name.trim()==="" || email.trim()==="" || phone.trim()==="" || password.trim()==="" || profession===""){
            alert('some fields are empty');
            return;
        }
        let userData = {
            name,
            email,
            password,
            phone,
            profession,
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        onSignedUp(true);
    }

    function handleNameChange(event){
        let name = event.target.value;
        setName(name);
    }

    function handlePasswordChange(event){
        let password = event.target.value;
        setPassword(password);
    }

    function handleEmailChange(event){
        let email = event.target.value;
        setEmail(email);
    }

    function handlePhoneChange(event){
        let phone = event.target.value;
        setPhone(phone);
    }

    function handleProfessionChange(event){
        let profession = event.target.value;
        setProfession(profession);
    }
    return (
        <div className="signup-container">
            <h1>Signup</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type='text' id="name" value={name} onChange={handleNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type='email' id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type='password' id="password" value={password} onChange={handlePasswordChange} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type='tel' id="phone" value={phone} onChange={handlePhoneChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="profession">Profession</label>
                    <select id="profession" value={profession} onChange={handleProfessionChange}>
                        <option value='software-developer'>Software Developer</option>
                        <option value='teacher'>Teacher</option>
                        <option value='nurse'>Nurse</option>
                        <option value='sales'>Sales</option>
                        <option value='accountant'>Accountant</option>
                        <option value='electrician'>Electrician</option>
                        <option value='lawyer'>Lawyer</option>
                        <option value='chef'>Chef</option>
                        <option value='others'>Others</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit">Signup</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;
