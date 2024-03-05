import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adddetail } from "../contoller/OrderedSlice";
import { useNavigate } from "react-router-dom";

const Orderform = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    address: "",
    contact: "",
    email: "",
    landmark: "",
    state: "",
    area_pinecode: "",
  });

  const inputhandle = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const submithandle = () => {
    dispatch(adddetail(input));
    alert("Address details submitted");
    navigate("/paymentpage");
  };

  return (
    <div id="ordform">
      <section id="form">
        <h1>Purchase your Products</h1>
        <h3>Your Shipping Address</h3>
        <div className="form">
          <label htmlFor="fname">First Name</label><br />
          <input type="text" id="fname" name="first_name" value={input.first_name} placeholder="Enter your first name..." onChange={inputhandle} />
          <br />

          <label htmlFor="lname">Last Name</label><br />
          <input type="text" id="lname" name="last_name" value={input.last_name} placeholder="Enter your last name..." onChange={inputhandle} />
          <br />

          <label htmlFor="address">Shipping Address</label><br />
          <input type="text" id="address" name="address" value={input.address} placeholder="Enter your address..." onChange={inputhandle} />
          <br />

          <label htmlFor="contact">Contact number</label><br />
          <input type="text" id="contact" name="contact" value={input.contact} placeholder="Enter your contact No..." onChange={inputhandle} />
          <br />

          <label htmlFor="email">Email</label><br />
          <input type="text" id="email" name="email" value={input.email} placeholder="Enter your email..." onChange={inputhandle} />
          <br />

          <label htmlFor="landmark">Land Mark</label><br />
          <input type="text" id="landmark" name="landmark" value={input.landmark} placeholder="Enter your landmark..." onChange={inputhandle} />
          <br />

          <label htmlFor="state">State</label><br />
          <input type="text" id="state" name="state" value={input.state} placeholder="Enter your state..." onChange={inputhandle} />
          <br />

          <label htmlFor="pincode">Pinecode</label><br />
          <input type="text" id="pincode" name="area_pinecode" value={input.area_pinecode} placeholder="Pine code..." onChange={inputhandle} />
          <br />

          <button onClick={submithandle} id="submitbtn">Submit</button>
        </div>
      </section>
    </div>
  );
};

export default Orderform;
