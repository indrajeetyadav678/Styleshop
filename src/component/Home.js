import Product from "./Product";
import { sliderimg, product } from "../Database/HomeData";
import { addtocart } from "../contoller/AddcartSlice";
import { useSelector, useDispatch } from "react-redux";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

// let slideimg1 = "https://mixtas.novaworks.net/wp-content/uploads/2023/12/m6_bg_video.jpg";
// let slideimg2 = "https://mixtas.novaworks.net/wp-content/uploads/2023/12/m6_slide_01-scaled.jpg";
// let slideimg3 = "https://mixtas.novaworks.net/wp-content/uploads/2023/12/m6_slide_02-scaled.jpg";
// let slideimg4 = "https://ithinkbigger.com/wp-content/uploads/2022/03/eCommerce-Website-Components-photo.jpg";
// let slideimg5 = "https://mixtas.novaworks.net/wp-content/uploads/2023/12/m6_slide_03-scaled.jpg";
// let slide5="https://www.sliderrevolution.com/wp-content/uploads/2023/06/sneaker-woocommerce-slider.gif";
const image1 = "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/4/c/u/-original-imagrcjhgmzuh5dz.jpeg?q=70&crop=false";
const image2 = "https://rukminim2.flixcart.com/image/832/832/xif0q/top/m/3/s/l-wt-08-rahi-trendz-original-imagz53uvhpgbvz4.jpeg?q=70";
const image3 = "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/z/l/r/7-rkt-18222-blue-white-7-atom-white-original-imagugk6yghdpgpm.jpeg?q=70&crop=false";

const Home = () => {
    const mycartdata=useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch()
 
    const setcarddata = (image1, details, price, offer, originprice, brand, id, quantity1) => {
    let cartdata = {image: image1, detail: details, price: price, offer: offer, originalprice: originprice, brand: brand, id: id, quantity: quantity1}
       dispatch(addtocart(cartdata));
    }
    console.log(mycartdata)
    const sliderans = sliderimg.map((key) => {
        return (
            <>
                <img src={key.image} id="slide1" />
            </>
        );
    });
    var it=0;
    const nextslide=()=>{
        if(it<=0){
            document.getElementById('slide1').style.backgroundImage=sliderimg[it];
        ++it;
        }
        if(it===mycartdata.length){
            it=0;
        }
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
                  <FaChevronLeft id="leftarrow" />
                  <FaChevronRight id="rightarrow" onClick={nextslide} />
                    <div className="slider">
                        {sliderans}
                    </div>
                    <div className="dot_box">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="landing">
                    {productans}
                    <Product img={image1}
                        nam="Bleed Blue Day and Date Functioning Strap Adult Quartz Analog Watch"
                        price="Rs 350"  offer="85% off" />
                    <Product img={image2}
                        nam="Casual Regular Sleeves Embellished Women Black Top"
                        price="₹279" offer="86% off" />
                    <Product img={image3}
                        nam="Spring Edge Alpha 2 Sneakers For Men  (White, Blue)"
                        price="₹1,335" offer="59% off" />
                </div>
            </body>
        </>
    );
}
export default Home;