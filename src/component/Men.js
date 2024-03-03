import Product from "./Product";
import { sliderimg3} from "../Database/HomeData";
import Carouselslider from "./Carouselslider";
import { MenProduct } from "../Database/ClothsData";
import { addtocart } from "../contoller/AddcartSlice";
import { useSelector, useDispatch } from "react-redux";


const image1 = "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/4/c/u/-original-imagrcjhgmzuh5dz.jpeg?q=70&crop=false";
const image2 ="https://rukminim2.flixcart.com/image/832/832/xif0q/top/m/3/s/l-wt-08-rahi-trendz-original-imagz53uvhpgbvz4.jpeg?q=70";
const image3 ="https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/z/l/r/7-rkt-18222-blue-white-7-atom-white-original-imagugk6yghdpgpm.jpeg?q=70&crop=false";
let slide5="https://www.sliderrevolution.com/wp-content/uploads/2023/06/sneaker-woocommerce-slider.gif";


const Men=()=>{
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
    return(
        <>
          <div className="sliderbox">
                    <Carouselslider slider={sliderimg3} />
           </div>



        <div id="shoesgif_box">
            <img src={slide5} className="shoesgif"/>
        </div>
        <div className="landing">
                {productans}
            </div>
        </>
        
    );
}

export default Men;