import './CompanyInfo.css';
function ContactInfo(){
    return(
        <div className="company-info">
            <div>
            <div><span className="heading">Company: </span> Geeksynergy Technologies Pvt Ltd</div>
            <div><span className="heading">Address: </span> Sanjaynagar, Bengaluru-56 </div>
            <div><span className="heading">Phone: </span> XXXXXXXXXX09</div>
            <div><span className="heading">Email: </span> <a href="mailto:XXXXXX@gmail.com">XXXXX@gmail.com</a></div>
            </div>
        </div>
    )
}

export default ContactInfo;