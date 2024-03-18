import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { addtolikes, delet } from "../contoller/AddlikeSlice";

const showimage = "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/z/b/s/xxl-st10-vebnor-original-imagnvrqqgz6hvnf.jpeg?q=70&crop=false";

const Product_details = (props) => {
    var showboximage;
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
    const Navigate = useNavigate();
    const OrderNow = () => {
        Navigate("/Orderform");
    }
    const changeimage = (imgno) => {
        showboximage = imgno;
    }


    return (
        <>
            <div id="product_detail_mainwrapper">
                <div id="product_detail_imagepack">
                    <img src={props.image1} alt="" onClick={() => { changeimage(props.image1) }} />
                    <img src={props.image2} alt="" onClick={() => { changeimage(props.image2) }} />
                    <img src={props.image3} alt="" onClick={() => { changeimage(props.image3) }} />
                    <img src={props.image4} alt="" onClick={() => { changeimage(props.image4) }} />
                </div>
                <div id="product_detail_show_box">
                    <img src={showimage} alt="" /><br />
                    <FaHeart id="detailpage_likeheart" onClick={() => setlike(props.Pid)} />
                    <div id="add_buy_btnwrapper">
                        <div id="prod_detai_addtocard">
                            <button className="btncart" onClick={props.function}>Add to cart</button>
                        </div>
                        <div id="prod_detai_buy">
                            <button className="btnbuy" onClick={OrderNow}>Buy</button>
                        </div>
                    </div>
                </div>
                <div id="product_inform_wrapper">
                    <div id="one">
                        <label style={{ fontSize: "20px" }}>{props.brand}</label><br />
                        <div className="Price">
                            <span style={{ fontSize: "20px" }}>₹&nbsp;{props.price}</span>&nbsp;&nbsp;&nbsp;
                            <span style={{ fontSize: "20px" }}><delete>₹&nbsp;{props.MRP}</delete>{props.MRP}</span>&nbsp;&nbsp;&nbsp;
                            <span style={{ fontSize: "20px" }}>{props.offer}</span>
                        </div>
                        <label style={{ padding: "3px 8px", border: "1px solid rgb(174, 171, 171)", marginTop: "10px" }}>Free Delivery</label>
                    </div>

                    <div id="two">
                        <h3>Select Size</h3>
                        <button className="clothsize" >01</button>
                        <button className="clothsize">02</button>
                        <button className="clothsize">03</button>
                        <button className="clothsize">04</button>
                        <button className="clothsize">05</button>
                        <button className="clothsize">06</button>
                    </div>
                    <div id="six">
                        <h3>Select Color</h3>
                        <div id="colorbox_wrapper">
                            <div id="color1" style={{ backgroundColor: "red" }}></div>
                            <div id="color1" style={{ backgroundColor: "black" }}></div>
                            <div id="color1" style={{ backgroundColor: "green" }}></div>
                            <div id="color1" style={{ backgroundColor: "orange" }}></div>
                            <div id="color1" style={{ backgroundColor: "white" }}></div>
                            <div id="color1" style={{ backgroundColor: "yellow" }}></div>
                            <div id="color1" style={{ backgroundColor: "pink" }}></div>
                            <div id="color1" style={{ backgroundColor: "brown" }}></div>
                        </div>
                    </div>

                    <div id="three">
                        <h3>Product Details</h3>
                        <label>{props.details}</label><br />
                        <label>{props.name}</label><br />
                        <label>{props.color}</label><br />
                        <label>{props.oigin}</label><br />
                        <label>{props.Quantity}</label>
                    </div>

                    <div id="four">
                        <h3>Sold By</h3>

                    </div>

                    <div id="five">
                        <h3>Product Ratings & Reviews</h3>

                    </div>

                </div>
            </div>

        </>
    );
}
export default Product_details;