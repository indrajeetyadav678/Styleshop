import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import { sliderimg } from "../Database/HomeData";

const Carouselslider = (props) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {(props.slider).map((slide, i) => {
                return (
                    <Carousel.Item >
                        <img
                            className="d-block"
                            id="sliderimgcarousel"
                            src={slide.image}
                            alt="slider image"
                        />
                        <Carousel.Caption>
                            <h3>{slide.caption}</h3>
                            <p>{slide.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}

        </Carousel>
    );
}
export default Carouselslider;
