

const Product = (props) => {
    return (
        <>
            <div className="cont_box">
                <div className="img">
                    <img src={props.img} />
                </div>
                <div className="prod_name">{props.nam}</div><br/>
                <span className="detail">{props.price}/-</span>
                <span className="detail">{props.offer}</span><br/><br/>
                <button className="cartbtn">Add to cart</button>
                <button className="buybtn">Buy</button>
            </div>
        </>
    );
}

export default Product;