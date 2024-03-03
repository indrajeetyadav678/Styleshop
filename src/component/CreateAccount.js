import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
const CreateAccountimg ="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg"


const CreateAccount = () => {
    const [input, setInput] = useState([]);
    const inputhandle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(item => ({ ...item, [name]: value }))
    }

    return (
        <>
            <body className="body">
                <section id="Acc_mainbox">
                    <div id="Acc_imagebox">
                        <img src={CreateAccountimg} alt="" />
                    </div>
                    <div id="Acc_createbox">
                        <h2>Welcome</h2>
                        <div id="Rone"><FaUser />
                            <input type="text" name="name" value={input.name} placeholder="Enter Your Name" onChange={inputhandle} />
                        </div>
                        <div id="Rtwo"><MdEmail />
                            <input type="text" name="email" value={input.email} placeholder="Enter Your Email" onChange={inputhandle} />
                        </div>
                        <div id="Rthree"><FaLock />
                            <input type="text" name="password" value={input.password} placeholder="Enter Your Password" onChange={inputhandle} />
                        </div>
                        <div id="Rthree"><FaLock />
                            <input type="text" name="password" value={input.password} placeholder="Enter Your confirm Password" onChange={inputhandle} />
                        </div>
                        <div id="login_rem_box">
                            <input type="radio" id="remember" value="save_pass" />&nbsp;&nbsp;
                            <label for="remember">Remember Me</label>
                            <button to="signin" className="sign1" >Sign in</button>
                        </div>
                        <button id="signupbtn"><Link to="/login">Create account</Link></button>
                    </div>
                </section>

            </body>
        </>
    );
};
export default CreateAccount;
