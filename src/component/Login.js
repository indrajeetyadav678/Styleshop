// import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { VscError } from "react-icons/vsc";
import { TiTick } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
const CreateAccountimg = "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg"


const CreateAccount = () => {
    const cust = useSelector(state => state.mylogdata.customer);
    // const mydispatch=useDispatch();
    const mynavigate = useNavigate()
    const [input, setInput] = useState([]);
    const inputhandle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(item => ({ ...item, [name]: value }))
    }

    const signup = () => {
        mynavigate("/navcreateacc");
    }

    const Loginuser = () => {
        mynavigate("/home");
        // const userid=cust.find(item=>item.email.toLowerCase()===input.email.toLowerCase()   );
        // const password=cust.find(item=>item.password.toLowerCase()===input.password.toLowerCase());
        // if(userid && password){
        //     mynavigate("/home");
        // }
        // else{
        //     alert("Please Enter Correct Username and Password or Registrator");
        // }
    }

    return (
        <>
            <body className="body">
                <section id="Acc_mainbox">
                    <div id="Acc_imagebox">
                        <img src={CreateAccountimg} alt="" />
                    </div>
                    <div id="Acc_createbox" className="acc_createbox">
                        <FaUserCircle className="userloginform_icon" />
                        <h3> Sign in</h3>
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
                        <div id="login_rem_box">
                            <label for="remember">Forget password</label>
                            <button onClick={signup} className="sign1" >Sign up</button>
                        </div><br />
                        <button id="signupbtn" onClick={Loginuser}>Login</button>
                    </div>
                </section>

            </body>
        </>
    );
};
export default CreateAccount;