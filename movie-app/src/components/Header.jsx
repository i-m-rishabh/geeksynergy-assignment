import { useState } from 'react';
import './Header.css';
function Header({onPageChange}){
    const [active, setActive] = useState('home');
    function changeActivePage(page){
        onPageChange(page);
        setActive(page);
    }
    function handleLogout(){
        localStorage.clear();
        window.location.reload();
    }
    return(
        <div className="header">
            <ul className="nav">
                <li className={`nav-link ${active==='home'?"active":""}`} onClick={()=>{changeActivePage('home')}}>Home</li>
                <li className={`nav-link ${active==='company-info'?"active":""}`} onClick={()=>{changeActivePage('company-info')}}>Company Info</li>
            </ul>
            <button className='logout-button' onClick={handleLogout}>LogOut</button>
        </div>
    )
}

export default Header;