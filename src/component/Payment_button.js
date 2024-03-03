import { useNavigate } from "react-router-dom";

const Payment_bottun=(props)=>{
    const mynavigate=useNavigate();

    
    const paymentdone=()=>{
        mynavigate("/PaymentDone")
    }
    return(
        <>
        <button  id="button_design" onClick={paymentdone}>{props.button_name}</button>
        </>
    );
}
export default Payment_bottun;