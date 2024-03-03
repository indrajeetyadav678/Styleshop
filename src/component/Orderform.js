import { useState } from "react";
import adddetail from "../contoller/OrderedSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const Orderform = () => {
    const mycartdata=useSelector(state=>state.myorder.orderdetail);
    const dispatchme=useDispatch()
    const [input, setInput] = useState({});
    const navigateme = useNavigate();
    const inputhandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }))
    }
    console.log(mycartdata)
    const submithandle = (Fname,lname,address,contact,email,landmark,state,pinecode) => {
       let setdetaildata={fname:Fname,lname:lname,address:address,contact:contact,email:email,landmark:landmark,state:state,pinecode:pinecode};
        dispatchme(adddetail(setdetaildata));
        alert("Address details submited");
        navigateme("/paymentpage")
    }
    // <formaction="/action.php"></form> 
    return (
        <>
            <div id="ordform">
                <section id="form">
                    <h1>Purchase your Products</h1>
                    <h3>Your Shipping Address</h3>
                    <div className="form">
                        <label for="fname">First Name</label><br />
                        <input type="text" id="fname" value={input.first_name} name="first_name" placeholder="Enter your first name..." onChange={inputhandle} />
                        <br />
                        <label for="lname">Last Name</label><br />
                        <input type="text" id="lname" value={input.last_name} name="last_name" placeholder="Enter your last name..." onChange={inputhandle} />
                        <br />
                        <label for="address">Shipping Address</label><br />
                        <input type="text" id="address" value={input.address} name="address" placeholder="Enter your address..." onChange={inputhandle} />
                        <br />
                        <label for="contact">Contact number</label><br />
                        <input type="text" id="contact" value={input.contact} name="contact" placeholder="Enter your contact No..." onChange={inputhandle} />
                        <br />
                        <label for="email">Email</label><br />
                        <input type="text" id="email" value={input.email} name="email" placeholder="Enter your email..." onChange={inputhandle} />
                        <br />
                        <label for="landmark">Land Mark</label><br />
                        <input type="text" id="landmark" value={input.landmark} name="landmark" placeholder="Enter your landmark..." onChange={inputhandle} />
                        <br />
                        <label for="state">State</label>
                        <label for="pincode" id="pin">Pinecode</label><br />
                        <input type="text" id="state" name="state" value={input.state} placeholder="Enter your state..." onChange={inputhandle} />
                        <input type="text" id="pincode" value={input.area_pinecode} name="area_pinecode" placeholder="Pine code..." onChange={inputhandle} />
                        <br />
                        <button onClick={()=>submithandle(input.first_name,input.last_name,input.address,input.contact,input.email,input.landmark,input.state,input.area_pinecode)} id="submitbtn" ><Link to="/paymentpage">submit</Link></button>

                    </div>
                </section>
            </div>
        </>
    );
}
export default Orderform;

{/* <input type="button" value="Submit" id="submitbtn" onClick={submithandle}/> */ }