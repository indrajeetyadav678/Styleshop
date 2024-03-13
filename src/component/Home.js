import Product from "./Product";
import { sliderimg2, product1 } from "../Database/HomeData";
import { addtocart } from "../contoller/AddcartSlice";
import { useSelector, useDispatch } from "react-redux";
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
import Carouselslider from "./Carouselslider";
import { addtolikes, delet } from "../contoller/AddlikeSlice";
var p = 0;
var likeno = 0;


const Home = () => {
    // const mycartdata = useSelector(state => state.mycart.cart);
    const mylikeproduct = useSelector(state => state.mylike.likes);
    // console.log(mylikeproduct)
    const dispatch = useDispatch()
    const likedispatch = useDispatch()
    const setlike = (cid, liked) => {
        
        // p = p + liked;
        let likeproduct = product1.find(item => item.id === cid);
        let heartcolor=mylikeproduct.find(mylikeproduct.id!==cid);
        console.log(likeproduct)
        if(heartcolor==="true"){
            document.getElementById('like' + cid).style.color = "red";
            likedispatch(addtolikes({ likeproduct }));
            likeno++;
        }
        else{
            document.getElementById('like' + cid).style.color = "#4543431a";
            // likedispatch(delet(likeproduct.id));
            likedispatch(addtolikes({ likeproduct }));
            // p = 0;
            likeno--;
        }
    }

    const setcarddata = (image1, details, price, offer, originprice, brand, id, quantity1) => {
        let cartdata = { image: image1, detail: details, price: price, offer: offer, originalprice: originprice, brand: brand, id: id, quantity: quantity1 }
        dispatch(addtocart(cartdata));
    }

    const productans = product1.map((key) => {
        return (
            <>
                <Product img={key.image1}
                    func={() => { setlike(key.id, 1) }}
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

