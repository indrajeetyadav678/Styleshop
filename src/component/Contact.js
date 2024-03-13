import Carouselslider from "./Carouselslider";
import { sliderimg } from "../Database/HomeData";
const contactimg = "https://im'g.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37943.jpg?w=740&t=st=1710319715~exp=1710320315~hmac=4850231276c1d004d22c41ddde26e52ada799493528c0aefe5da56f4180024f2";
// const video1 = "https://assets.visme.co/templates/banners/videoThumbnails/i_Summer-Sale-Facebook-Video-Ad-full.mp4";
const Contact = () => {
    return (
        <>
            <div id="form_div">
                <div id="contact_top">
                    <div id="one">
                        <h1> Get in touch</h1>
                        <h5>
                            We value your feedback, inquiries, and suggestions. Please feel free
                            to get in touch with us using the contact details below.....
                        </h5>
                    </div>
                    <div id="two"></div>
                </div>
                <div id="contactpage_body">
                    <aside>
                        <address id="gmap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7335.712421914094!2d77.41374799999998!3d23.175447499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4371c453b66b%3A0x57c4e7bb0089c717!2sAashirwad%20Colony%2C%20Kolar%20Rd%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1710322018281!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
                        </address>
                        <div>
                            <h4> Customer Support:</h4>
                            <h6>Email: support@example.com</h6>
                            <h6> Phone: +1 (123) 456-7890</h6>
                            <h4> Business Inquiries:</h4>

                            <h6> Email: info@example.com</h6>
                            <h6>Phone: +91 9977696511</h6>
                            <h4> Visit Us:</h4>
                            <label>
                                styleshop hno-23c kolar road
                                near the aashirbad colony Bhopal<b/>
                                Madhya Pradesh
                            </label>
                        </div >
                    </aside >
                    <div id="contact_form">
                        <h1>Contact Us</h1><br />
                        <input type="text" name="name" placeholder="Enter your name.." /><br /><br />
                        <input type="text" name="surname" placeholder="Enter your surname.." /><br /><br />
                        <input type="text" name="Number" placeholder="Enter your number.." /><br /><br />
                        <input type="email" name="email" placeholder="Enter your email.." /><br /><br />
                        <textarea type="address" name="address" placeholder="Enter your address.." /><br /><br />
                        <button id="contact_button">Submit</button>

                    </div>
                </div >
            </div >
        </>
    );
}
export default Contact;