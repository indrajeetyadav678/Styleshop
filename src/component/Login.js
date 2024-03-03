import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
const CreateAccountimg ="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg"


const CreateAccount=()=>{
    const [input, setInput] = useState([]);
    const inputhandle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(item => ({ ...item, [name]: value }))
    }

    return(
        <>
        <body className="body">
        <section id="Acc_mainbox">
                    <div id="Acc_imagebox">
                        <img src={CreateAccountimg} alt="" />
                    </div>
                    <div id="Acc_createbox" className="acc_createbox"><br/><br/>
                        <h2> Sign in</h2>
                        <div id="Rtwo"><MdEmail />
                            <input type="text" name="email" value={input.email} placeholder="Enter Your Email" onChange={inputhandle} />
                        </div>
                        <div id="Rthree"><FaLock />
                            <input type="text" name="password" value={input.password} placeholder="Enter Your Password" onChange={inputhandle} />
                        </div>
                        <div id="login_rem_box">
                            <label for="remember">Forget password</label>
                            <button to="signin" className="sign1" >Sign up</button>
                        </div><br/>
                        <button id="signupbtn"><Link to="/home" >Login</Link></button>
                    </div>
                </section>

        </body>
        </>
    );
};
export default CreateAccount;