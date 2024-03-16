import React from 'react';
import Product from "./Product";
import { sliderimg2, product1 } from "../Database/HomeData";
import { addtocart } from "../contoller/AddcartSlice";
import {useDispatch } from "react-redux";
import Carouselslider from "./Carouselslider";
const Home = () => {
    const dispatch = useDispatch();
    const setcarddata = (image1, details, price, offer, originprice, brand, id, quantity1) => {
        let cartdata = { image: image1, detail: details, price: price, offer: offer, originalprice: originprice, brand: brand, id: id, quantity: quantity1 }
        dispatch(addtocart(cartdata));
    }
    const productans = product1.map((key) => (
        <Product
            Pdatabase={product1}
            Pid={key.id}
            img={key.image1}
            pid={"like" + key.id}
            nam={key.details}
            price={key.price}
            offer={key.offer}
            function={() => setcarddata(key.image1, key.details, key.price, key.offer, key.originprice, key.brand, key.id, 1)} 
        />
    ));

    return (
        <div>
            <div className="sliderbox">
                <Carouselslider slider={sliderimg2} />
            </div>
            <div className="landing">
                {productans}
            </div>
        </div>
    );
}

export default Home;
