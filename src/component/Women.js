import { sliderimg } from "../Database/HomeData";
import Carouselslider from "./Carouselslider";
import Product from "./Product";
import { addtocart } from "../contoller/AddcartSlice";
import { useSelector, useDispatch } from "react-redux";
import { product } from "../Database/HomeData";
import { addtolikes, delet } from "../contoller/AddlikeSlice";
var likeno = 0;
const Women = () => {
    const mylikeproduct = useSelector(state => state.mylike.likes);
    const dispatch = useDispatch()
    const likedispatch = useDispatch()
    const setlike = (cid) => {
        let likeproduct = product.find(item => item.id === cid);
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

    const productans = product.map((key) => {
        return (
            <>
                <Product img={key.image1}
                    func={()=>setlike(key.id) }
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
            <div id="body">

                <div className="sliderbox">
                    <Carouselslider slider={sliderimg} />
                </div>


                <div className="landing">
                    {productans}

                </div>
            </div>
        </>
    );
}

export default Women;