import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { delet } from "../contoller/AddcartSlice";
import { decrement } from "../contoller/AddcartSlice";
import { increment } from "../contoller/AddcartSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Detailpage_call, remove } from "../contoller/Product_detailpageSlice";
import Product_details from "./Product_details";
import { KidsProduct, KidsProduct1, KidsProduct2, KidsProduct3, KidsProduct4, KidsProduct5, Babyproduct, Toyproduct } from "../Database/Kidsdatabase";
import { MenProduct, MenProduct1, MenProduct2, MenProduct3, MenProduct4, MenProduct5, WomenProduct1, WomenProduct2, WomenProduct3, WomenProduct4, WomenProduct5 } from "../Database/ClothsData";
import { product, product1, product2 } from "../Database/HomeData";






let NetAmount = 0
let TotalMRP = 0
let Totaldiscount = 0
let product_quantity = 0
const Addcart = () => {
    const mycartdata = useSelector((state) => state.mycart.cart);
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    console.log(mycartdata.quantity * mycartdata.price)
    // for(var i=0; i<mycart.length;++i){
    //     NetAmount+=mycart[i].price*mycart[i].Quantity
    // }

    let increase = (myid) => {
        dispatch(increment(myid))
        NetAmount = 0
        TotalMRP = 0
        Totaldiscount = 0
        product_quantity = 0
    }
    let decrease = (myid) => {
        dispatch(decrement(myid))
        NetAmount = 0
        TotalMRP = 0
        Totaldiscount = 0
        product_quantity = 0
    }
    const remove = (myid) => {
        dispatch(delet(myid))
        NetAmount = 0
        TotalMRP = 0
        Totaldiscount = 0
        product_quantity = 0
    }
    const productdetailpage = (product_id) => {
        const dataarray = [...product, ...product1, ...product2, ...MenProduct, ...MenProduct1, ...MenProduct2, ...MenProduct3, ...MenProduct4, ...MenProduct5, ...WomenProduct1, ...WomenProduct2, ...WomenProduct3, ...WomenProduct4, ...WomenProduct5, ...KidsProduct, ...KidsProduct1, ...KidsProduct2, ...KidsProduct3, ...KidsProduct4, ...KidsProduct5, ...Babyproduct, ...Toyproduct]
        var call_product = dataarray.find(item => item.id === product_id)
        dispatch(remove(product_id))
        dispatch(Detailpage_call(call_product))
        Navigate("/productinfo");
    }

    const addcartans = mycartdata.map((key) => {
        NetAmount = NetAmount + (key.price) * (key.quantity)
        TotalMRP = TotalMRP + (key.originalprice)
        Totaldiscount = Totaldiscount + (TotalMRP - NetAmount)
        product_quantity = product_quantity + (key.quantity)
        return (
            <>

                <div id="addcartdata_wrapper_box">

                    <div id="addcarttable">
                        <div id="tdimage">
                            <img src={key.image} alt="" onClick={() => { productdetailpage(key.id) }} />
                        </div>
                        <div id="addcartwrapper_box">
                            <div>{key.name}</div>
                            <div id="tddetails">{key.detail}<br />
                                <p>
                                    Indulge in the goodness of Indian craftsmanship through our curated line of dress materials. Explore this indigenous collection from brands like Lookslady, Viva N Diva, and Indie Picks.
                                </p>
                            </div>
                            <div >Rs&nbsp;{key.price}.00/-&nbsp;</div>
                            <div id="tdQuantity">
                                <div id="adding"><CiCirclePlus onClick={() => increase(key.id)} id="button" /></div>
                                <div id="oneproduct_price">{key.quantity}</div>
                                <div id="adding"><CiCircleMinus onClick={() => decrease(key.id)} id="button" /></div>
                            </div>
                        </div>
                        <div id="tddelete" onClick={() => { remove(key.id) }}><MdDelete /></div>
                    </div>
                </div>
            </>
        );
    })

    return (
        <>
            <body id="body" className="bbty">
                <div>
                    {addcartans}
                </div>
                <div id="orderdetail_data">
                    <h4>Order Details</h4>
                    <h6>Total Price :&nbsp; ₹ {TotalMRP}.00/-</h6>
                    <h6>Discount :&nbsp; ₹ {Totaldiscount}.00/-</h6>
                    <h6>Product Quantity :&nbsp; {product_quantity}</h6>
                    <hr size="1" color="black" width="250px" />
                    <h6>Payable Amount :&nbsp; ₹ {NetAmount}.00/-</h6>
                    <div id="order_button_wrapper">
                        <Link to="/Orderform" id="order_button">Place Your Order Now</Link>
                    </div>
                </div>
            </body>
        </>
    );
}
export default Addcart;