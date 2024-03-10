
import { Link, Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa6";

var sno = 0;
const shownavmanubar = () => {
    if (sno === 0) {
        document.getElementById('shownavmiddle').style.display = "block";
        sno = 1;
    }
    else if (sno === 1) {
        document.getElementById('shownavmiddle').style.display = "none";
        sno = 0;
    }
}

function dropmanu() {
    document.getElementById('dropdown').style.display = "block";
}
function dropnone() {
    document.getElementById('dropdown').style.display = "none";
}
function drophide() {
    let track = window.event.clientY;
    console.log(track)
    if (track < 5) {
        document.getElementById('dropdown').style.display = "none";
    }
    else if (track > 55) {
        document.getElementById('dropdown').style.display = "none";
    }
}

const Layout = () => {
    const mycartdata = useSelector(state => state.mycart.cart);
    var addcartvalue = mycartdata.length
    const mylikeddata = useSelector(state => state.mylike.likes);
    var addlikedvalue = mylikeddata.length

    return (
        <>
            <body id="body1">
                <div className="navbar" onMouseLeave={drophide}>
                    <div id="navleft">
                        <FaBars id="linemanu" onClick={shownavmanubar} />
                        <Link to="shopname" className="nabbtn1">Styleshop</Link>
                    </div>
                    <div id="navmiddle">
                        <Link to="home" className="nabbtn2">Home</Link>
                        <Link to="men" className="nabbtn2">Men</Link>
                        <Link to="women" className="nabbtn4">Women</Link>
                        <Link to="kids" className="nabbtn5" onMouseEnter={dropmanu}>Kids collection</Link>
                        <Link to="about" className="nabbtn6">About Us</Link>
                        <Link to="contact" className="nabbtn7">Contact</Link>
                    </div>
                    <div id="shownavmiddle">
                        <Link to="home" className="nabbtn2">Home</Link><br />
                        <Link to="men" className="nabbtn2">Men</Link><br />
                        <Link to="women" className="nabbtn4">Women</Link><br />
                        <Link to="kids" className="nabbtn5" onMouseEnter={dropmanu}>Kids collection</Link><br />
                        <Link to="about" className="nabbtn6">About Us</Link><br />
                        <Link to="contact" className="nabbtn7">Contact</Link><br />
                    </div>
                    <div id="navright">
                        <Link to="navsearch" className="Rnavbtn1" ><div id="sear-box"><IoIosSearch /></div></Link>

                        <Link to="addcart" className="Rnavbtn1">
                            <div id="addcartwrapper">
                                <div id="showcartno">{addcartvalue}</div>
                                <div id="carticon"><FaShoppingCart /></div>
                            </div>
                        </Link>
                        <div id="addlikewrapper" >
                            <div id="liked_p">{addlikedvalue}</div>
                            <Link to="navlike" className="heartbtn1" ><CiHeart color="red" /></Link>
                        </div>
                        <Link to="navcreateacc" className="Rnavbtn1" ><FaUser /></Link>
                    </div>

                </div>
                <ul id="dropdown" onMouseLeave={dropnone}>
                    <li> <Link to="kids" className="dropbtn1">Kids cloths</Link></li>
                    <li> <Link to="baby" className="dropbtn2">Boby cloths</Link></li>
                    <li> <Link to="babytoy" className="dropbtn3">Toys</Link></li>
                </ul>
                <Outlet />
                <Footer />
            </body>
        </>
    );
}

export default Layout;