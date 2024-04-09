import { useState } from "react";
import ContactInfo from "../pages/ContactInfo/ContactInfo";
import Home from "../pages/Home/Home";
import Footer from "./Footer";
import Header from "./Header";
import './MainContainer.css';

function MainContainer(){
    const [page, setPage] = useState('home');
    function onPageChange(page){
        setPage(page);
    }
    return(
        <div>
            <Header onPageChange={onPageChange}/>
            <div className="wrapper">
            {page==='home' && <Home/>}
            {page==='company-info' && <ContactInfo/>}
            </div>
            <Footer/>
        </div>
    )
}

export default MainContainer;