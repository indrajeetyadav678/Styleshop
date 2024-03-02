
import Product from "./Product";

const image1 = "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/4/c/u/-original-imagrcjhgmzuh5dz.jpeg?q=70&crop=false";
const image2 = "https://rukminim2.flixcart.com/image/832/832/xif0q/top/m/3/s/l-wt-08-rahi-trendz-original-imagz53uvhpgbvz4.jpeg?q=70";
const image3 = "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/z/l/r/7-rkt-18222-blue-white-7-atom-white-original-imagugk6yghdpgpm.jpeg?q=70&crop=false";
// let slide5 = "https://www.sliderrevolution.com/wp-content/uploads/2023/06/sneaker-woocommerce-slider.gif";



const Babycollection = () => {
    return (
        <>
            <h1 className="heading">Babycollection product</h1>

            <div className="landing">
                <Product img={image1}
                    nam="Bleed Blue Day and Date Functioning Strap Adult Quartz Analog Watch"
                    price="Rs 350  85% off"
                />
                <Product img={image2}
                    nam="Casual Regular Sleeves Embellished Women Black Top"
                    price="₹279 86% off
      "
                />
                <Product img={image3}
                    nam="Spring Edge Alpha 2 Sneakers For Men  (White, Blue)"
                    price="₹1,335 59% off"
                />
            </div>
        </>
    );
}

export default Babycollection;