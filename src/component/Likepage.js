
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const imga1 = "https://res.cloudinary.com/dz209s6jk/image/upload/v1664289879/Screenshots/ljw4yghccwul5gpxkdpw.jpg"

const Likepage = () => {
    const mylikedata = useSelector(state => state.mylike.likes);
    console.log(mylikedata)
    const dispatch = useDispatch();
    const likeans = mylikedata.map(key => {
        return (
            <>
                <img src={key.image} />
                <label>{key.brand}</label>
            </>
        );
    })
    return (
        <>
            <div id="likepage">
                {likeans}
            </div>
            <button><Link to="/Dataform">Dataform</Link></button>
        </>
    );
}
export default Likepage;