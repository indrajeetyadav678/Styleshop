
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteSweep } from "react-icons/md";
import { delet } from "../contoller/AddlikeSlice";

const imga1 = "https://res.cloudinary.com/dz209s6jk/image/upload/v1664289879/Screenshots/ljw4yghccwul5gpxkdpw.jpg"

const Likepage = () => {
    const mylikedata = useSelector(state => state.mylike.likes);
    console.log(mylikedata)
    const dispatch = useDispatch();
 const dishlike=(prod_id)=>{
    // document.getElementById('like' + prod_id).style.color = "rgba(130, 124, 124, 0.61)";
    dispatch(delet(prod_id))
 }

    const likeans = mylikedata.map(key => {
        return (
            <>
                <div id="like_page_product_wrapper">
                    <div id="like_page_product_image">
                        <img src={key.image1} alt="network connection is not available" />

                    </div>
                    <div id="like_page_product_details">
                        <label>{key.brand}</label><br />
                        <label>₹{key.price}</label><br />
                        <label>₹{key.originprice}</label><br />
                        <label>{key.offer}</label>
                    </div>
                    <div id="like_page_product_description">
                        <h4 style={{ textDecoration: "underline " }}>Description</h4>
                        <label>{key.details}f</label>
                        <div id="like_page_product_deletebtn">
                            <MdDeleteSweep onClick={()=>dishlike(key.id)} />
                        </div>
                    </div>


                </div>
            </>
        );
    })
    return (
        <>
            <h3 style={{textAlign:"center"}}>WishList Product</h3>
            <div id="likepage">
                {likeans}
            </div>
            <button><Link to="/Dataform">Dataform</Link></button>
        </>
    );
}
export default Likepage;

