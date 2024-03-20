import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Product from "./Product";
import { product, product1, product2 } from "../Database/HomeData";
import { MenProduct, MenProduct1, MenProduct2 } from "../Database/ClothsData";
import { useEffect } from "react";
import { addtocart } from "../contoller/AddcartSlice";
import { useDispatch } from "react-redux";


const SearchProduct = () => {

    const [searchValue, setSearchValue] = useState([]);
    const inputhandle = (e) => {
        let value = e.target.value;
        if (value === "") {
            document.getElementById('show_serachproduct_quantity').innerHTML = "Search your Prodect";
            setSearchValue([])
        }
        else {
            document.getElementById('show_serachproduct_quantity').innerHTML = "Search Product (" + (searchValue.length) + ")";
            var allProducts = [
                ...product,
                ...product1,
                ...MenProduct
            ].filter(item =>
                item.details.trim().toLowerCase().includes(value.trim().toLowerCase()) || item.brand.trim().toLowerCase().includes(value.trim().toLowerCase())
            );
            setSearchValue(allProducts)
        }
    }

    const outputsearch_product = () => {
        if (searchValue.length > 0) {
            document.getElementById('show_serachproduct_quantity').innerHTML = "Search Product (" + (searchValue.length) + ")";
            setSearchValue(searchValue)
        }
        else{
            document.getElementById('show_serachproduct_quantity').innerHTML = "No Data Found";
        }
    }
    // useEffect(() => {
    //     outputsearch_product();
    // })
    const dispatch = useDispatch();
    const setcarddata = (image1, details, price, offer, originprice, brand, id, quantity1) => {
        let cartdata = { image: image1, detail: details, price: price, offer: offer, originalprice: originprice, brand: brand, id: id, quantity: quantity1 }
        dispatch(addtocart(cartdata));
    }
    console.log(searchValue)
    const searchdataans = searchValue.map(key => {
        return (
            <Product
                Pdatabase={[
                    ...product,
                    ...product1,
                    ...MenProduct
                ]}
                Pid={key.id}
                img={key.image1}
                pid={"like" + key.id}
                nam={key.details}
                price={key.price}
                MRP={key.MRP}
                offer={key.offer}
                function={() => setcarddata(key.image1, key.details, key.price, key.offer, key.originprice, key.brand, key.id, 1)}
            />
        )
    })
    return (
        <div id="body">
            <div id="search_box_wrapper">
                <div id="search_inputbox">
                    <input
                        type="text"
                        name="search"
                        // value={value}
                        placeholder="Search Product...."
                        onChange={inputhandle}
                    />
                    <IoMdSearch id="searchbtn" onClick={outputsearch_product} />
                </div>
            </div>
            <div id="show_serachproduct_quantity"></div>
            <div id="searchoutputbox" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                {searchdataans}
            </div>
        </div>
    );
};

export default SearchProduct;



















