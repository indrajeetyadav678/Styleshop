// import { addtocart } from "../contoller/AddcartSlice";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { addtolikes, delet } from "../contoller/AddlikeSlice";
import { Detailpage_call,remove } from "../contoller/Product_detailpageSlice";
import { useSelector, useDispatch } from "react-redux";


const Product = (props) => {
    const mylikeproduct = useSelector(state => state.mylike.likes);
    const dispatch = useDispatch();

    const setlike = (cid) => {
        let likeproduct = props.Pdatabase.find(item => item.id === cid);
        let heartcolor = mylikeproduct.some(item => item.id === cid);
        if (!heartcolor) {
            dispatch(addtolikes(likeproduct)); 
            document.getElementById('like' + cid).style.color = "red";
        } else {
            document.getElementById('like' + cid).style.color = "#4543431a";
            dispatch(delet(likeproduct.id));
        }
    }
    // console.log(mylikeproduct)

    const Navigate = useNavigate();
    const OrderNow1 = () => {
        Navigate("/Orderform");
    }
    const productdetailpage=(product_id)=>{
        var call_product=props.Pdatabase.find(item => item.id === product_id)
        dispatch(remove(product_id))
        dispatch(Detailpage_call(call_product))
        Navigate("/productinfo");
    }


    return (

        <div className="cont_box" >
            <div className="img">
                <img src={props.img} alt="#" onClick={()=>{productdetailpage(props.Pid)}} />
                <FaHeart className="likeheart" id={props.pid} onClick={() => setlike(props.Pid)} />
            </div>
            <div className="prod_name">{props.nam}</div><br />
            <span className="detail">{props.price}/-</span>
            <span className="detail">{props.offer}</span><br /><br />
            <button className="cartbtn" onClick={props.function}>Add to cart</button>
            <button className="buybtn" onClick={OrderNow1}>Buy</button>
        </div>

    );
}

export default Product;