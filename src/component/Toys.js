import { sliderimg6 } from "../Database/HomeData";
import Carouselslider from "./Carouselslider";
import Product from "./Product";
import { MenProduct } from "../Database/ClothsData";
import { addtocart } from "../contoller/AddcartSlice";
import { useDispatch } from "react-redux";
import { Toyproduct } from "../Database/Kidsdatabase";



const Toys = () => {
    const dispatch = useDispatch();
    const setcarddata = (image1, details, price, offer, originprice, brand, id, quantity1) => {
        let cartdata = { image: image1, detail: details, price: price, offer: offer, originalprice: originprice, brand: brand, id: id, quantity: quantity1 }
        dispatch(addtocart(cartdata));
    }

    const productans = Toyproduct.map((key) => {
        return (
            <>
                <Product img={key.image1}
                    Pdatabase={Toyproduct}
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
            <div className="sliderbox">
                <Carouselslider slider={sliderimg6} />
            </div>
            <div className="landing">
                {productans}

            </div>
        </>
    );
}
export default Toys;