
import { Link } from "react-router-dom";
const imga1 ="https://res.cloudinary.com/dz209s6jk/image/upload/v1664289879/Screenshots/ljw4yghccwul5gpxkdpw.jpg"

const Likepage=()=>{
    return(
        <>
        <div id="likepage">
            <img src={imga1} alt="" />
        </div>
        <button><Link to="/Dataform">Dataform</Link></button>
        
        </>
    );
}
export default Likepage;