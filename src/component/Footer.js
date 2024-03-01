
import {Link, Outlet} from "react-router-dom";

const Footer=()=>{
    return(
        <>
        <div className="footerbox">
            <div className="shopname">Styleshop</div>
            <ul className="linkbox">
                <li className="foottitle">Men</li>
                <li className="footlink1"><Link to="cloth" className="footlink2">Clothing Fashion</Link></li>
                <li className="footlink1"><Link to="summer" className="footlink2">Summer</Link></li>
                <li className="footlink1"><Link to="winter" className="footlink2">Winter</Link></li>
                <li className="footlink1"><Link to="farmal" className="footlink2">Formal</Link></li>
                <li className="footlink1"><Link to="casual" className="footlink2">Casual</Link></li>
            </ul>
            <ul className="linkbox">
                <li className="foottitle">Women</li>
                <li className="footlink1"><Link to="cloth" className="footlink2">Clothing Fashion</Link></li>
                <li className="footlink1"><Link to="summer" className="footlink2">Summer</Link></li>
                <li className="footlink1"><Link to="winter" className="footlink2">Winter</Link></li>
                <li className="footlink1"><Link to="farmal" className="footlink2">Formal</Link></li>
                <li className="footlink1"><Link to="casual" className="footlink2">Casual</Link></li>
            </ul>
            <ul className="linkbox">
                <li className="foottitle">Baby Collection</li>
                <li className="footlink1"><Link to="cloth" className="footlink2">Clothing Fashion</Link></li>
                <li className="footlink1"><Link to="summer" className="footlink2">Summer</Link></li>
                <li className="footlink1"><Link to="winter" className="footlink2">Winter</Link></li>
                <li className="footlink1"><Link to="farmal" className="footlink2">Formal</Link></li>
                <li className="footlink1"><Link to="casual" className="footlink2">Casual</Link></li>
            </ul>
            <ul className="linkbox">
                <li className="foottitle">Quick Links</li>
                <li className="footlink1"><Link to="cloth" className="footlink2">Clothing Fashion</Link></li>
                <li className="footlink1"><Link to="summer" className="footlink2">Summer</Link></li>
                <li className="footlink1"><Link to="winter" className="footlink2">Winter</Link></li>
                <li className="footlink1"><Link to="farmal" className="footlink2">Formal</Link></li>
                <li className="footlink1"><Link to="casual" className="footlink2">Casual</Link></li>
            </ul>
        </div>
        <div className="developer">&#169; Developed by Indrajeet Yaduwanshi</div>
        </>
    );
}

export default Footer;