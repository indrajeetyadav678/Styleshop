import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Product from "./Product";
import { product, product1, product2 } from "../Database/HomeData";
import { MenProduct, MenProduct1, MenProduct2 } from "../Database/ClothsData";

const SearchProduct = () => {
    const [searchValue, setSearchValue] = useState("");

    // Filter products based on search value
    const filteredProducts = [
        ...product,
        ...product1,
        ...product2,
        ...MenProduct,
        ...MenProduct1,
        ...MenProduct2
    ].filter(item =>
        item.details.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div id="body">
            <div id="search_inputbox">
                <input
                    type="text"
                    name="search"
                    value={searchValue}
                    placeholder="Search Product...."
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <IoMdSearch id="searchbtn" />
            </div>
            <div id="searchoutputbox" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(item => (
                        <Product
                            key={item.id}
                            img={item.image1}
                            pid={item.id}
                            func={`like${item.id}`}
                            nam={item.brand}
                            price={item.price}
                            offer={item.details}
                        />
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default SearchProduct;

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // import {usEffect} from "react";
    // import { IoMdSearch } from "react-icons/io";
    // import { useState } from "react";
    // import Product from "./Product";
    // import { product, product1, product2 } from "../Database/HomeData";
    // import { MenProduct, MenProduct1, MenProduct2 } from "../Database/ClothsData";
    // import { WomenProduct, WomenProduct1, WomenProduct2 } from "../Database/ClothsData";
    // var Searchans;  
    // const SearchProduct = () => {
    //     const [searchvalue, setSearchvalue] = useState("");
    //     // const searchdata = () => {
    //     //     if (searchvalue === "") {
    //     //         Searchans = "No Data Found!!!"
    //     //     }
    //     // }
    //     // usEffect(()=>{
    //     //     searchdata();
    //     // },{searchvalue})
    //     const ans=product||product1||product2.map((key)=>{
    //         return(
    //             <>
    //             <Product img={key.image1} pid={key.id} func={"like"+key.id} nam={key.brand} price={key.price} offer={key.details} />
    //             </>
    //         );
    //     })

    //     return (
    //         <>
    //             <div id="body">
    //                 <div id="search_inputbox">
    //                     <input type="text" name="search" value={searchvalue} placeholder="Search Product...." onChange={(e) => setSearchvalue(e.target.value)} />
    //                     <IoMdSearch id="searchbtn" />
    //                 </div>
    //                 <div id="searchoutputbox">
    //                     {ans}
    //                 </div>


    //             </div>
    //         </>
    //     );
    // }
    // export default SearchProduct;