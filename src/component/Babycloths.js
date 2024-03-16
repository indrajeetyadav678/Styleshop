import { sliderimg5 } from "../Database/HomeData";
import Carouselslider from "./Carouselslider";
import Product from "./Product";
import { MenProduct } from "../Database/ClothsData";
import { addtocart } from "../contoller/AddcartSlice";
import { useDispatch } from "react-redux";
import { Catagorydata } from '../Database/HomeData';
import CatagaryComponent from './CatagaryComponent';

const Babycloths = () => {
    const dispatch = useDispatch()
    const setcarddata = (image1, details, price, offer, originprice, brand, id, quantity1) => {
        let cartdata = { image: image1, detail: details, price: price, offer: offer, originalprice: originprice, brand: brand, id: id, quantity: quantity1 }
        dispatch(addtocart(cartdata));
    }
    const catans = Catagorydata.Babypagecat.map(key => {
        return (
            <>
                <CatagaryComponent catimage={key.catimage} catname={key.catname} link={"/mencat" + key.id} />
            </>
        );
    });

    const productans = MenProduct.map((key) => {
        return (
            <>

                <Product img={key.image1}
                    Pdatabase={MenProduct}
                    Pid={key.id}
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
                <Carouselslider slider={sliderimg5} />
            </div>
            <div className="landing">
                {productans}

            </div>
        </>
    );
}
export default Babycloths;