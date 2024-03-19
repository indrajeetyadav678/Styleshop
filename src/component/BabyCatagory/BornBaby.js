import Product from "../Product";
import { MenProduct } from "../../Database/ClothsData";
import { useDispatch } from "react-redux";
import { addtocart } from "../../contoller/AddcartSlice";
import { Catagorydata } from '../../Database/HomeData';
import CatagaryComponent from '../CatagaryComponent';


const BabyBottomWear = () => {
    const dispatch = useDispatch()
    const setcarddata = (image1, details, price, offer, originprice, brand, id, quantity1) => {
        let cartdata = { image: image1, detail: details, price: price, offer: offer, originalprice: originprice, brand: brand, id: id, quantity: quantity1 }
        dispatch(addtocart(cartdata));
    }
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
                    MRP={key.MRP}
                    function={() => { setcarddata(key.image1, key.details, key.price, key.offer, key.originprice, key.brand, key.id, 1) }}
                />
            </>
        );
    });
    const catans = Catagorydata.Babypagecat.map(key => {
        return (
            <>
                <CatagaryComponent catimage={key.catimage} catname={key.catname} link={"/mencat" + key.id} />
            </>
        );
    });
    return (
        <>
            {/* <h1> this is Men Bottom Wear page</h1> */}
            <div id="cattype_link_box">
                {catans}
            </div>
            <div id="catpage_product_wrapper">
                {productans}
            </div>
        </>
    );
}
export default BabyBottomWear;