import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Registration } from "../contoller/Login_outSlice";
import { VscError } from "react-icons/vsc";
import { TiTick } from "react-icons/ti";
const CreateAccountimg = "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg"

const CreateAccount = () => {
    // const cust = useSelector(state => state.mylogdata.customer);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [input, setInput] = useState({});
    const inputhandle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(item => ({ ...item, [name]: value }))
    }
    const signin = () => {
        Navigate("/login")
    }

    const createAccount = () => {
        dispatch(Registration(input));
        Navigate("/login");
    }
    // console.log(cust)

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
                            <TiTick id="Ronecorect" /><VscError id="Roneerror" />
                        </div>
                        <div id="errormsgbox">
                            <h6 id="Roneerrormsg">Please fill your Name</h6>
                        </div>

                        <div id="Rtwo"><MdEmail />
                            <input type="text" name="email" value={input.email} placeholder="Enter Your Email" onChange={inputhandle} />
                            <TiTick id="Rtwocorect" /><VscError id="Rtwoerror" />
                        </div>
                        <div id="errormsgbox">
                            <h6 id="Rtwoerrormsg">Please enter correct email</h6>
                        </div>

                        <div id="Rthree"><FaLock />
                            <input type="text" name="password" value={input.password} placeholder="Enter Your Password" onChange={inputhandle} />
                            <TiTick id="Rthreecorect" /><VscError id="Rthreeerror" />
                        </div>
                        <div id="errormsgbox">
                            <h6 id="Rthreeerrormsg">password must have number Letter and spcial charector</h6>
                        </div>

                        <div id="Rthre"><FaLock />
                            <input type="text" name="cpassword" value={input.cpassword} placeholder="Confirm Password" onChange={inputhandle} />
                            <TiTick id="Rthrecorect" /><VscError id="Rthreerror" />
                        </div>
                        <div id="errormsgbox">
                            <h6 id="Rthreerrormsg1">Please fill the input</h6>
                            <h6 id="Rthreerrormsg2">your password does not match</h6>
                        </div>


                        <div id="login_rem_box">
                            <input type="radio" id="remember" value="save_pass" />&nbsp;&nbsp;
                            <label for="remember">Remember Me</label>
                            <button onClick={signin} className="sign1" >Sign in</button>
                        </div>
                        <button id="signupbtn" onClick={createAccount}>Create account</button>
                    </div>
                </section>

            </body>
        </>
    );
};
export default CreateAccount;
