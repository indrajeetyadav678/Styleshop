import Carouselslider from "./Carouselslider";
import { sliderimg } from "../Database/HomeData";
// const video1 = "https://assets.visme.co/templates/banners/videoThumbnails/i_Summer-Sale-Facebook-Video-Ad-full.mp4";
const Contact = () => {
    return (
        <>
        
                <Carouselslider slider={sliderimg} />  
        </>
    );
}
export default Contact;