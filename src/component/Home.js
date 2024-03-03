import Product from "./Product";
import { sliderimg2, product } from "../Database/HomeData";
import { addtocart } from "../contoller/AddcartSlice";
import { useSelector, useDispatch } from "react-redux";
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
import Carouselslider from "./Carouselslider";




const Home = () => {
    const mycartdata=useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch()
 
    const setcarddata = (image1, details, price, offer, originprice, brand, id, quantity1) => {
    let cartdata = {image: image1, detail: details, price: price, offer: offer, originalprice: originprice, brand: brand, id: id, quantity: quantity1}
       dispatch(addtocart(cartdata));
    }
    
    const productans = product.map((key) => {
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
            <body id="body">
                <div className="sliderbox">
                  <Carouselslider slider={sliderimg2} />
                </div>
                <div className="landing">
                    {productans}
                </div>
            </body>
        </>
    );
}
export default Home;

