import { useState } from "react";
import Paymentcard from "../paymentmethod/Payment_card";
import Paymentphonepe from "../paymentmethod/Payment_phonepe";
import Paymentupi from "../paymentmethod/Payment_upi";
import Paymentcod from "../paymentmethod/Payment_cod";
import Orderform from "./Orderform";


const Paymentpage = () => {
const [pmethod,setpmethod]=useState("")
    const mypaymentmethod = (e) => {
   let value= e.target.value;
   setpmethod(value);
}
var showpay="";

switch(pmethod)
{
    case "card":
    showpay=<Paymentcard/>
    break;
    case "upi":
    showpay=<Paymentupi/>
    break;
    case "phonepe":
    showpay=<Paymentphonepe/>
    break;
    case "cash":
    showpay=<Paymentcod/>
    break;
}

    return (
        <>
            <body id="body">
                <section id="Payment_maindiv">
                    <section id="paymentopt1">
                        <h1>Select your Payment Method</h1>
                        <input type="radio" name="pay1" value="card" onClick={mypaymentmethod} />
                        &nbsp; Credit/Debit card  &nbsp;&nbsp;
                        <input type="radio" name="pay1" value="upi" onClick={mypaymentmethod} />
                        &nbsp; UPI  &nbsp;&nbsp;
                        <input type="radio" name="pay1" value="phonepe" onClick={mypaymentmethod} />
                        &nbsp; Phonepe / Paytm &nbsp;&nbsp;
                        <input type="radio" name="pay1" value="cash" onClick={mypaymentmethod} />
                        &nbsp; Cash on Delivery&nbsp;&nbsp;<br/>
                        {showpay}
                    </section>
                </section>
            </body>
        </>
    );
}
export default Paymentpage;