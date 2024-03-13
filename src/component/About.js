import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const gif1 = "https://data2.nssmag.com/images/galleries/9606/thumbs/pleingif.gif";
const img1="https://as1.ftcdn.net/v2/jpg/03/34/79/68/1000_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg";
const img2="https://cdn1.vectorstock.com/i/1000x1000/65/80/female-fashion-clothes-icon-vector-18456580.jpg";
const img3="https://static.vecteezy.com/system/resources/previews/024/772/453/non_2x/fashion-designer-working-on-dress-on-dummy-photo.jpg";
const img4="";
const img5="";


const About = () => {
    return (
        <div id="" className="About_us-page">
            <div id="aboutdiv1">
                <div id="one"></div>
                <div id="two">
                    <label>About Us</label>
                    <div id="content">
                        The Style Shop is a public, student-run online shopping website
                        its office is located at the New Style Fashion for new Generation  on
                        Kolar road Beema kunj Bhopal Madhya Pradesh.
                        We carry up-and-coming student designer pieces and on-trend
                        fashion items, in addition to our own line of branded FIT
                        merchandise , Customer and must-have vintage finds.
                    </div><br /><br />
                    <button id="aboutbtn">More...</button>
                </div>
            </div>
            <div id="aboutdiv2">
                <div id="story">
                    <label>Our Story</label><br />
                    <div id="content">
                        Welcome to StyleShop, where fashion meets comfort,
                        and trends meet affordability. At StyleShop, we believe
                        that everyone deserves to look and feel their
                        best without breaking the bank. Our journey began with a
                        simple idea – to provide a curated collection of stylish
                        and high-quality clothing that reflects the diverse tastes
                        and lifestyles of our customers.
                    </div>
                </div>
                <div id="mission">
                    <label>Our Mission</label><br />
                    <div id="content">
                        <h2>Empowering Your Style Journey</h2>
                        At StyleShop, our mission is to empower individuals
                        to express their unique style through fashion that
                        not only looks good but also feels good. We strive
                        to inspire confidence and self-expression by offering a
                        carefully curated selection of on-trend and timeless pieces.
                    </div>
                </div>
            </div>
            <h1 id="aboutaparts">What Sets Us Apart</h1>
            <div id="aboutdiv3">
                <div id="one">
                    <h2>Quality Meets Affordability</h2>
                    We understand that fashion is not just
                    about the latest trends; it's about quality too.
                    At StyleShop, we meticulously source fabrics and
                    materials to ensure that every piece you purchase
                    meets our high standards. We believe that looking
                    stylish should be accessible to everyone, which is
                    why we are committed to offering affordable
                    fashion without compromising on quality.
                </div>
                <div id="two">
                    <h2>Diverse Collections for Every Style</h2>
                    Whether you're into casual chic, bohemian vibes,
                    or sophisticated elegance, StyleShop has something
                    for every style preference. Our diverse collections
                    are curated to cater to a wide range of tastes and
                    occasions, ensuring that you find the perfect outfit
                    for every moment.
                    <br /><br /><br />
                </div>
            </div>
            <div id="aboutdiv4">
                <aside>
                    <img src={img1} alt="" />
                </aside>
                <h1>Our Commitment to Sustainability</h1>
                <h3>Fashion with a Conscience</h3>
                <div id="one">
                    StyleShop is committed to making a positive
                    impact on the environment. We are continually
                    working towards incorporating sustainable practices
                    in our business, from sourcing eco-friendly materials
                    to minimizing our carbon footprint. Join us
                    in the journey towards a more sustainable and
                    stylish future.
                </div>
            </div>
            <div id="aboutdiv5">
                <aside>
                    <img src={img2} alt="" />
                </aside>
                <h1>Customer-Centric Approach</h1>
                <h3>Your Satisfaction, Our Priority</h3>
                <div id="one">
                    At StyleShop, we value our customers above
                    all else. Our dedicated customer support team
                    is here to assist you every step of the way.
                    Whether you have a question about sizing, need
                    styling advice, or have any concerns, we're here
                    to ensure your shopping experience with us
                    is seamless and enjoyable.
                </div>
            </div>
            <div id="aboutdiv6">
                <aside>
                    <img src="#" alt="" />
                </aside>
                <h1>Connect With Us</h1>
                <h3>Join the StyleShop Community</h3>
                <div id="aboutsocial_icon">
                   < FaInstagramSquare/>&nbsp;&nbsp;&nbsp;
                   <IoLogoWhatsapp/>&nbsp;&nbsp;&nbsp;
                   <FaFacebook />&nbsp;&nbsp;&nbsp;
                   <FaTwitter />&nbsp;&nbsp;&nbsp;
                   <FaLinkedinIn />&nbsp;&nbsp;&nbsp;
                   
                </div>
                <div id="one">
                    Stay updated on the latest trends, promotions,
                    and style tips by following us on social media.
                    Join our community of fashion enthusiasts and
                    share your StyleShop looks using #StyleShopStyle.
                    We love seeing how you make our pieces your own!
                </div>
                <label>
                    Thank you for choosing StyleShop – where fashion,
                    affordability, and individuality come together.
                </label>
            </div>



        </div>

    );
}

export default About;