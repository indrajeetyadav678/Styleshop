import Payment_bottun from "../component/Payment_button";


const Qrimage="https://miro.medium.com/v2/resize:fit:785/1*IR2e6Evsopa0qQy2PXTlFA.jpeg";
const phonepay1 = "https://t3.ftcdn.net/jpg/06/16/18/18/360_F_616181843_l404nbV07vMiXDZ1IhWiqZRDpetpuigu.jpg";


const Paymentphonepe = () => {
    return (
        <>
            <section id="phonepebtn">
                <h1>Payment By Phonepe</h1>
                <img src={phonepay1} alt="#" />

                <div>
                    <img src={Qrimage} alt="#" id="phonepayQr" />
                </div><br/>
                <Payment_bottun button_name="Make order" />
            </section>
        </>
    );
}
export default Paymentphonepe;