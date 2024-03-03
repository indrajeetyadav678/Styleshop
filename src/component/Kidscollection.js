import { sliderimg4} from "../Database/HomeData";
import Carouselslider from "./Carouselslider";
import Product from "./Product";
import { MenProduct } from "../Database/ClothsData";
import { addtocart } from "../contoller/AddcartSlice";
import { useSelector, useDispatch } from "react-redux";

const Kidscollection = () => {

    const mycartdata=useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch()
 
    const setcarddata = (image1, details, price, offer, originprice, brand, id, quantity1) => {
    let cartdata = {image: image1, detail: details, price: price, offer: offer, originalprice: originprice, brand: brand, id: id, quantity: quantity1}
       dispatch(addtocart(cartdata));
    }

    const productans = MenProduct.map((key) => {
        return (
            <>
                <Product img={key.image1}
                    nam={key.details}
                    price={key.price}
                    offer={key.offer} 
                    function={()=>{setcarddata(key.image1, key.details, key.price, key.offer, key.originprice, key.brand, key.id, 1)}}
                />
            </>
        );
    })
    return (
        <>
            <div id="body">
                <div className="sliderbox">
                    <Carouselslider slider={sliderimg4} />
                </div>
                <div className="landing">
                    {productans}
                 
                </div>
            </div>
        </>
    );
}

export default Kidscollection;