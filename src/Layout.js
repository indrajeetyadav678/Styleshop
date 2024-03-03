
import { Link, Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { UseSelector, useSelector } from "react-redux";
import { FaBars } from "react-icons/fa6";

function dropmanu() {
    document.getElementById('dropdown').style.display = "block";
}
function dropnone() {
    document.getElementById('dropdown').style.display = "none";
}
function drophide() {
    let track = window.event.clientY;
    console.log(track)
    if (track < 5 ) {
        document.getElementById('dropdown').style.display = "none";
    }
    else if (track >55 ) {
        document.getElementById('dropdown').style.display = "none";
    }
 
}

const Layout = () => {
const mycartdata=useSelector(state=>state.mycart.cart);
var addcartvalue=mycartdata.length   

return (
        <>
            <body id="body1">
                <div className="navbar" onMouseLeave={drophide}>
                    <div id="navleft">
                        <Link to="shopname" className="nabbtn1">Styleshop</Link>
                    </div>
                    <div id="navmiddle">
                        <Link to="home" className="nabbtn2">Home</Link>
                        <Link to="men" className="nabbtn2">Men</Link>
                        <Link to="women" className="nabbtn4">Women</Link>
                        <Link to="baby" className="nabbtn5" onMouseEnter={dropmanu}>Baby collection</Link>
                        <Link to="about" className="nabbtn6">About Us</Link>
                        <Link to="contact" className="nabbtn7">Contact</Link>
                    </div>
                    <div id="navright">
                        <Link to="navsearch" className="Rnavbtn1" ><div id="sear-box"><IoIosSearch /></div></Link>
                        <div id="showcartno">{addcartvalue}</div>
                        <Link to="addcart" className="Rnavbtn1"><div id="carticon"><FaShoppingCart /></div></Link>
                        <Link to="navlike" className="Rnavbtn1" ><CiHeart color="red" /></Link>
                        <Link to="navcreateacc" className="Rnavbtn1" ><FaUser /></Link>
                    </div>
                </div>
                <ul id="dropdown" onMouseLeave={dropnone}>
                    <li> <Link to="shopname" className="dropbtn1">Baby cloths</Link></li>
                    <li> <Link to="home" className="dropbtn2">Boby food</Link></li>
                    <li> <Link to="men" className="dropbtn3">Khilone</Link></li>
                </ul>
                <Outlet />
                <Footer />
            </body>
        </>
    );
}

export default Layout;