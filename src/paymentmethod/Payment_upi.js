import Payment_button from "../component/Payment_button";

const upimg1 = "https://zeevector.com/wp-content/uploads/Upi-Payment-Logo-white.png";
// const upimg2="https://w7.pngwing.com/pngs/268/590/png-transparent-upi-phone.png";


const Paymentupi = () => {
    return (
        <>
            <section>
                <h1>Payment By UPI</h1>
                <img src={upimg1} alt="#" /><br/><br/>
                <input type="text" placeholder="Enter UPI id..." id="upiidinputbox" /><br/><br/>
                <h2>OR</h2>
                <input type="text" placeholder="Enter UPI MObile number..." id="upiidinputbox" /><br/><br/>
                
                <Payment_button button_name="order done" />
            </section>
        </>
    );
}
export default Paymentupi;