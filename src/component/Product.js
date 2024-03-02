// import { addtocart } from "../contoller/AddcartSlice";

const Product = (props) => {
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
                <button className="buybtn">Buy</button>
            </div>
        </>
    );
}

export default Product;