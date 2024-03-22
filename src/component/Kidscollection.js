import { sliderimg4 } from "../Database/HomeData";
import { KidsProduct } from "../Database/Kidsdatabase";
import Carouselslider from "./Carouselslider";
import Product from "./Product";
import { MenProduct } from "../Database/ClothsData";
import { addtocart } from "../contoller/AddcartSlice";
import { useDispatch } from "react-redux";
import { Catagorydata } from '../Database/HomeData';
import CatagaryComponent from './CatagaryComponent';


const Kidscollection = () => {
    const dispatch = useDispatch()
    const setcarddata = (image1, details, price, offer, originprice, brand, id, quantity1) => {
        let cartdata = { image: image1, detail: details, price: price, offer: offer, originalprice: originprice, brand: brand, id: id, quantity: quantity1 }
        dispatch(addtocart(cartdata));
    }
    const catans = Catagorydata.Kidcollectionpagecat.map(key => {
        return (
            <>
                <CatagaryComponent catimage={key.catimage} catname={key.catname} link={"/mencat" + key.id} />
            </>
        );
    });

    const productans = KidsProduct.map((key) => {
        return (
            <>
                <Product img={key.image1}
                    Pdatabase={KidsProduct}
                    Pid={key.id}
                    pid={"like" + key.id}
                    nam={key.details}
                    price={key.price}
                    offer={key.offer}
                    MRP={key.MRP}
                    function={() => { setcarddata(key.image1, key.details, key.price, key.offer, key.MRP, key.brand, key.id, 1) }}
                />
            </>
        );
    })
    return (
        <>
            <div id="body">
            <div id="cattype_link_box">
                {catans}
            </div>
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