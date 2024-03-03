import { sliderimg4} from "../Database/HomeData";
import Carouselslider from "./Carouselslider";
import Product from "./Product";
import { MenProduct } from "../Database/ClothsData";
import { addtocart } from "../contoller/AddcartSlice";
import { useSelector, useDispatch } from "react-redux";

const image1 = "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/4/c/u/-original-imagrcjhgmzuh5dz.jpeg?q=70&crop=false";
const image2 = "https://rukminim2.flixcart.com/image/832/832/xif0q/top/m/3/s/l-wt-08-rahi-trendz-original-imagz53uvhpgbvz4.jpeg?q=70";
const image3 = "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/z/l/r/7-rkt-18222-blue-white-7-atom-white-original-imagugk6yghdpgpm.jpeg?q=70&crop=false";
// let slide5 = "https://www.sliderrevolution.com/wp-content/uploads/2023/06/sneaker-woocommerce-slider.gif";
const image4="https://imgscf.slidemembers.com/docs/1/1/448/baby_fashion_professional_presentation_447665.jpg";


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
                    <Product img={image1}
                        nam="Bleed Blue Day and Date Functioning Strap Adult Quartz Analog Watch"
                        price="Rs 350  85% off"
                    />
                    <Product img={image2}
                        nam="Casual Regular Sleeves Embellished Women Black Top"
                        price="₹279 86% off
      "
                    />
                    <Product img={image3}
                        nam="Spring Edge Alpha 2 Sneakers For Men  (White, Blue)"
                        price="₹1,335 59% off"
                    />
                </div>
            </div>
        </>
    );
}

export default Kidscollection;