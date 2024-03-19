
import { ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";
import Orderedby from "./Orderedby";
import { useSelector, useDispatch } from "react-redux";
var total_pay_amount = 0;
var Total_quantity=0;
const PaymentDone = () => {
    const mycartdata = useSelector(state => state.mycart.cart);
    const dispatch = useDispatch();
    
    for (let i = 0; i < mycartdata.length; ++i) {
        total_pay_amount = total_pay_amount + mycartdata[i].price * mycartdata[i].quantity;
        Total_quantity=Total_quantity+mycartdata[i].quantity;
    }
    console.log(mycartdata)
    console.log(mycartdata.price)
    console.log(mycartdata.Quantity)

    const [Output, setOuput] = useState("")
    const [orderDate, setOrderDate] = useState("");
    const getCurrentDateTime = () => {
        const currentdate = new Date();
        const datetime =
            currentdate.getDate() +
            "/" +
            (currentdate.getMonth() + 1) +
            "/" +
            currentdate.getFullYear() +
            "  @  " +
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds();

        return datetime;
    };

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

    }
    useEffect(() => {
        setTimeout(() => {
            setPageLoading(false);
        }, 5000)
        orderNo();
        setOrderDate(getCurrentDateTime());
    }, [])
    return (
        <>
            <div id="paydonehona">
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
                            <h4>Thank you For Purchasing Our Product</h4>
                            <h6>Your Product will be Selivered in the 5 to 7 Days</h6>
                            <div id="Amount_orderno">
                                <div id="orderno">
                                    <span> Ordered Number&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;{Output}</span><br/>
                                    <span>Date&nbsp;&nbsp; :&nbsp;&nbsp;&nbsp;{orderDate}</span>
                                </div>
                                <div id="paidamount">
                                    <span> Payment Mode&nbsp;&nbsp; :&nbsp;Online</span><br/>
                                    <span>Pay Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   :&nbsp;Rs &nbsp;{total_pay_amount}/-</span><br/>
                                    <span>Product Quantity:&nbsp;{Total_quantity}</span>
                                </div>
                            </div>
                            <section id="orderaddress">
                                <div id="customer">
                                    <span id="spanhead">Odered by</span>
                                    <div id="order_by">
                                        <span>Customer Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : gautam </span><br/>
                                        <span>Customer contact No.  : 9978666786 </span><br/>
                                        <span>Customer Email &nbsp;&nbsp;  :  cybromfruitshop@gmail.com </span><br/>
                                        <span>Shipping Address &nbsp; : Cybromfruitshop MP nagar Bhopal </span><br/>
                                        <span>State  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Madhya pradesh </span>
                                        <span>pinecode  :  462011  </span>
                                    </div>
                                    <Orderedby />
                                </div>
                                {/* <div id="delivery_by">
                                    <h2>Product delivered by</h2>
                                    <div id="order_by">
                                        <span>Customer Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Rajiv yaduwanshi </span>
                                        <span>Customer contact No.  : 9978666786 </span>
                                        <span>Customer Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  :  cybromfruitshop@gmail.com </span>
                                        <span>Shipping Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Cybromfruitshop MP nagar Bhopal </span>
                                        <span>State  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Madhya pradesh </span>
                                        <span>pinecode  :  462011  </span>
                                    </div>
                                </div> */}
                            </section>
                        </div>

                    )
                }
            </div>

        </>
    );
}
export default PaymentDone;