import Payment_bottun from "../component/Payment_button";
const deliverymage="https://png.pngtree.com/png-clipart/20210523/original/pngtree-cash-on-delivery-pin-point-png-image_6331307.jpg";
const cashimage ="https://okcredit-blog-images-prod.storage.googleapis.com/2021/05/cashondelivery1.jpg";
const Paymentcod=()=>{
    return(
        <>
        <section  id="Cashon_delivery_payment">
        <h1>Payment By Cash on Delivery</h1>
            <img src={cashimage} alt="#"/><br/><br/><br/>
        
            <Payment_bottun button_name="Make Order"  />
        
        </section>
        </>
    );
}
export default Paymentcod;