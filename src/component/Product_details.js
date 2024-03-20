import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { addtolikes, delet } from "../contoller/AddlikeSlice";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const showimage = "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/z/b/s/xxl-st10-vebnor-original-imagnvrqqgz6hvnf.jpeg?q=70&crop=false";

const Product_details = (props) => {
    const [changeImage, setChangeImage] = useState(props.image1)
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
        setChangeImage(imgno)
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
                    <div id="show_image_box">
                    <img src={changeImage} alt="" />
                    </div>
                    <FaHeart className="detailpage_likeheart" id={props.pid} onClick={() => setlike(props.Pid)} />
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
                        <label style={{ fontSize: "20px" }}>{props.details}</label><br />
                        <div id="prod_rate_wrapper">
                            <div className="detail">₹&nbsp;&nbsp;{props.price}/-</div>
                            <div className="detail" id="Mrp_price">₹&nbsp;&nbsp;{props.MRP}/-</div>
                            <div className="detail">{props.offer}</div>
                        </div>
                        <label style={{ padding: "3px 8px", border: "1px solid rgb(174, 171, 171)", marginTop: "10px" }}>Free Delivery</label>
                    </div>

                    <div id="two">
                        <h3>Select Size</h3>
                        <button className="clothsize" >32</button>
                        <button className="clothsize">34</button>
                        <button className="clothsize">36</button>
                        <button className="clothsize">38</button>
                        <button className="clothsize">42</button>
                        <button className="clothsize">46</button>
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
                        <label>Name &nbsp;:&nbsp; {props.name}</label><br />
                        <label>Details&nbsp;:&nbsp;{props.details}</label><br />
                        <label>Color&nbsp;:&nbsp;{props.color}</label><br />
                        <label>Madein&nbsp;:&nbsp;{props.oigin}</label><br />
                        <label>Quantity&nbsp;:&nbsp;1</label>
                    </div>

                    <div id="four">
                        <h3>Sold By</h3>
                        <h4>Styleshop.Com Bhopal </h4>
                        <div id="seller_shop_wrapper">
                            <div id="seller_shop_rating">
                                <div id="one1">3.5 &nbsp;<FaStar /></div>
                                10,678 Ratings
                            </div>
                            <div id="Follower">
                                <span>34K</span><br/>
                                <span>Followers</span>
                            </div>
                            <div id="Product_type">
                                <span>78</span><br />
                                <span>Poducts</span>
                            </div>
                        </div>

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