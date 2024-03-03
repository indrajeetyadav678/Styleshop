
import { ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";
import Orderedby from "./Orderedby";

const PaymentDone = () => {
    const [Output, setOuput] = useState("")
    const [orderDate, setorderDate] = useState("")
    const [pageloading, setPageLoading] = useState(true)
    const orderNo = () => {
        let output = '';
        let p = "1234567890";
        for (let i = 0; i < 8; i++) {
            let len = p.length;
            let a = Math.random();
            let randomcombination = len * a;
            let b = Math.floor(randomcombination);
            output = output + p.charAt(b)

        }
        if (output[0] === 0) {
            orderNo();
        }
        setOuput(output);
        var currentdate = new Date();
        var datetime = currentdate.getDay() + "/" + currentdate.getMonth()
            + "/" + currentdate.getFullYear() + "  @  "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        console.log(datetime)
        setorderDate(datetime)
    }
    useEffect(() => {
        setTimeout(() => {
            setPageLoading(false);
        }, 5000)
        orderNo();
    }, [])
    return (
        <>
            {pageloading ?
                (<div id="payment_procesing">
                    <span>Please wait Your Payment is being under processing</span>
                    <ThreeDots
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
                ) : (
                    <div id="paymentdone_bill">
                        <h1>Thank you For Purchasing Our Product</h1>
                        <h2>Your Product will be Selivered in the 5 to 7 Days</h2>
                        <div id="Amount_orderno">
                            <div id="orderno">
                                <h4> Ordered Number&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;{Output}</h4>
                                <h4>Date&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;{orderDate}</h4>
                            </div>
                            <div id="paidamount">
                                <h4> Payment Mode&nbsp;&nbsp; :&nbsp;Online</h4>
                                <h4>Pay Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   :&nbsp;Rs&nbsp;13000/-</h4>
                                <h4>Product Quantity:&nbsp;10</h4>
                            </div>
                        </div>
                        <section id="orderaddress">
                            <div id="customer">
                                <h2>Odered by</h2>
                                <div id="order_by">
                                    <h4>Customer Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : gautam </h4>
                                    <h4>Customer contact No.  : 9978666786 </h4>
                                    <h4>Customer Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  :  cybromfruitshop@gmail.com </h4>
                                    <h4>Shipping Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Cybromfruitshop MP nagar Bhopal </h4>
                                    <h4>State  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Madhya pradesh </h4>
                                    <h4>pinecode  :  462011  </h4>
                                </div>
                                <Orderedby />
                            </div>
                            <div id="delivery_by">
                                <h2>Product delivered by</h2>
                                <div id="order_by">
                                    <h4>Customer Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Rajiv yaduwanshi </h4>
                                    <h4>Customer contact No.  : 9978666786 </h4>
                                    <h4>Customer Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  :  cybromfruitshop@gmail.com </h4>
                                    <h4>Shipping Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Cybromfruitshop MP nagar Bhopal </h4>
                                    <h4>State  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Madhya pradesh </h4>
                                    <h4>pinecode  :  462011  </h4>
                                </div>
                            </div>
                        </section>
                    </div>

                )
            }


        </>
    );
}
export default PaymentDone;