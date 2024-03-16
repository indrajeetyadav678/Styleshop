import Product from "./Product";
import { sliderimg3 } from "../Database/HomeData";
import Carouselslider from "./Carouselslider";
import { MenProduct } from "../Database/ClothsData";
import { addtocart } from "../contoller/AddcartSlice";
import { useSelector, useDispatch } from "react-redux";
import { addtolikes, delet } from "../contoller/AddlikeSlice";
import { Catagorydata } from '../Database/HomeData';
import CatagaryComponent from '../CatagaryComponent';
import { useNavigate } from "react-router";
import MenTopWear from "./MenCatagory/MenTopWear";
import { useRef } from "react";

let slide5 = "https://www.sliderrevolution.com/wp-content/uploads/2023/06/sneaker-woocommerce-slider.gif";

const Men = () => {
    const mylikeproduct = useSelector(state => state.mylike.likes);
    const dispatch = useDispatch()
    // const catnavigate= useNavigate();
    // const myref1=useRef();
    // document.getElementById('Mencat1').addEventListener("onClick",MenTopWear);
    // const MenTopWear=()=>{
    //     catnavigate("/mentopwear");
    // };
    // const Mencat2=()=>{

    // };
    // const Mencat3=()=>{

    // };
    // const Mencat4=()=>{

    // };
    // const Mencat5=()=>{

    // };

    const catans = Catagorydata.Menpagecat.map(key => {
        
        return (
            <>
                <CatagaryComponent catimage={key.catimage} catname={key.catname} link={"/mencat"+key.id} />
            </>
        );
    })
    const setlike = (cid) => {
        let likeproduct = MenProduct.find(item => item.id === cid);
        let heartcolor = mylikeproduct.some(item => item.id === cid);
        if (!heartcolor) {
            dispatch(addtolikes(likeproduct));
            document.getElementById('like' + cid).style.color = "red";
        } else {
            document.getElementById('like' + cid).style.color = "#4543431a";
            dispatch(delet(likeproduct.id));
        }
    }
    console.log(mylikeproduct)

    const setcarddata = (image1, details, price, offer, originprice, brand, id, quantity1) => {
        let cartdata = { image: image1, detail: details, price: price, offer: offer, originalprice: originprice, brand: brand, id: id, quantity: quantity1 }
        dispatch(addtocart(cartdata));
    }

    const productans = MenProduct.map((key) => {
        return (
            <>
                <Product img={key.image1}
                    func={() => setlike(key.id)}
                    pid={"like" + key.id}
                    nam={key.details}
                    price={key.price}
                    offer={key.offer}
                    function={() => { setcarddata(key.image1, key.details, key.price, key.offer, key.originprice, key.brand, key.id, 1) }}
                />
            </>
        );
    })
    return (
        <>
            <div id="cattype_link_box">
                {catans}
            </div>
            <div className="sliderbox">
                <Carouselslider slider={sliderimg3} />
            </div>

            <div className="landing">
                {productans}
            </div>
        </>

    );
}

export default Men;