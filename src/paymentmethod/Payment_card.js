import Payment_button from "../component/Payment_button";
const card1 = "https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-gold-card-498x280.png";
const card2 = "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/03/28/80052-rupay-website.png?itok=DyBjn9bf";
const card3 = "https://clipart-library.com/image_gallery2/ATM-Card-PNG-Clipart.png";


const Paymentcard = () => {
    return (
        <>
            <body id="bycardpayment">
                <section id="cardpaymeth">
                    <h1>Payment By Card</h1>
                    <img src={card1} alt="#" />
                    <img src={card2} alt="#" />
                    <img src={card3} alt="#" />
                </section>
                <section id="payment_form">
                    <label>Enter Your Card No.:   </label>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="cardno" maxLength="19" pattern="[XXX-XXX-XXX-XXX]{4}" placeholder="xxxx-xxxx-xxxx-xxxx" /><br /><br />
                    <label>Enter Cvv :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="card_cvv" placeholder="XXX" /><br/><br/>
                    <label>Card Holder name :</label>&nbsp;&nbsp;&nbsp;
                    <input type="text" id="card_hold_name" placeholder="Enter card holder name" /><br /><br />
                    <label>Enter Expire Validity : </label><br /><br/>
                    Month&nbsp;:&nbsp;<input type="number" id="ex_month" placeholder="01" />&nbsp;&nbsp;&nbsp;
                    Year&nbsp;:&nbsp;<input type="number" id="ex_year" placeholder="2025" /><br /><br /><br/>
                    {/* < button id="paymentbtn">Make Payment</button> */}
                </section>
                <Payment_button  button_name="Make payment" />
            </body>
        </>
    );
}
export default Paymentcard;