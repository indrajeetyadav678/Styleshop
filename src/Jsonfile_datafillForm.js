import { useState } from "react";


const JsonData = () => {
    const [input, setInput] = useState({});

    const inputhandle = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setInput(item => ({ ...item, [name]: value }));
        console.log(input);
    }

    const submitdata = () => {
        const shirts = ""
    }


    return (
        <>
            <div style={{width:"100%", height:"auto",display:"flex", justifyContent:"center",alignItems:"center"}}>
                <div id="formbox" style={{margin:"50px auto"}}>
                    <h2>Database Form</h2><br />
                    <select name="ProductCatagiry" id="selectcatagiry">
                        <option value="shirts">shirts</option>
                        <option value="pents">pents</option>
                        <option value="kurta">kurta</option>
                        <option value="pajama">pajama</option>
                        <option value="Mentopwear">Mentopwear</option>
                        <option value="Menbottomwear">Menbottomwear</option>
                        <option value="sadi">sadi</option>
                        <option value="kurti">kurti</option>
                        <option value="Palazzos">Palazzos</option>
                        <option value="Jeans">Jeans</option>
                    </select><br /><br />
                    <input type="text" name="Image1" value={input.image1} placeholder="Enter image.." onChange={inputhandle} /><br /><br />
                    <input type="text" name="Image2" value={input.image2} placeholder="Enter image.." onChange={inputhandle} /><br /><br />
                    <input type="text" name="Image3" value={input.image3} placeholder="Enter image.." onChange={inputhandle} /><br /><br />
                    <input type="text" name="Image4" value={input.image4} placeholder="Enter image.." onChange={inputhandle} /><br /><br />
                    <input type="text" name="name" value={input.name} placeholder="Enter name.." onChange={inputhandle} /><br /><br />
                    <input type="text" name="brand_name" value={input.brand_name} placeholder="Enter brand_name.." onChange={inputhandle} /><br /><br />
                    <input type="text" name="description" value={input.description} placeholder="Enter description.." onChange={inputhandle} /><br /><br />
                    <input type="text" name="price" value={input.price} placeholder="Enter price.." onChange={inputhandle} /><br /><br />
                    <input type="text" name="offer" value={input.offer} placeholder="Enter offer.." onChange={inputhandle} /><br /><br />
                    <input type="text" name="MRP" value={input.MRP} placeholder="Enter MRP.." onChange={inputhandle} /><br /><br />
                    <button id="sumbitbtn" onClick={submitdata} >Submit</button>
                </div>
            </div>

        </>
    );
}
export default JsonData;