
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";

const SearchProduct = () => {
    const [searchvalue, setSearchvalue]=useState("");
    return (
        <>
        <div id="body">
            <div id="search_inputbox">
            <input type="text" name="search" value={searchvalue } placeholder="Search Product...."  onChange={(e)=>setSearchvalue(e.target.value)} />
            <IoMdSearch id="searchbtn"/>
            </div>
            <div id="searchoutputbox"></div>


        </div>
        </>
    );
}
export default SearchProduct;