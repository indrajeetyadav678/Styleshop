// import { addtocart } from "../contoller/AddcartSlice";
import { useNavigate } from "react-router-dom";
const Product = (props) => {
    const Navigate = useNavigate();
    const OrderNow1=()=>{
        Navigate("/Orderform");
    }
    return (
        <>
            <div className="cont_box">
                <div className="img">
                    <img src={props.img} alt="#"/>
                </div>
                <div className="prod_name">{props.nam}</div><br/>
                <span className="detail">{props.price}/-</span>
                <span className="detail">{props.offer}</span><br/><br/>
                <button className="cartbtn" onClick={props.function}>Add to cart</button>
                <button className="buybtn" onClick={OrderNow1}>Buy</button>
            </div>
        </>
    );
}

export default Product;