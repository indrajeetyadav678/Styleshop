import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { delet } from "../contoller/AddcartSlice";
import { decrement } from "../contoller/AddcartSlice";
import { increment } from "../contoller/AddcartSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


let NetAmount = 0
const Addcart = () => {
    const mycartdata = useSelector((state) => state.mycart.cart);
    const dispatch = useDispatch();
    console.log(mycartdata.quantity*mycartdata.price)
    // for(var i=0; i<mycart.length;++i){
    //     NetAmount+=mycart[i].price*mycart[i].Quantity
    // }

    let increase = (myid) => {
        dispatch(increment(myid))
        NetAmount = 0
    }
    let decrease = (myid) => {
        dispatch(decrement(myid))
        NetAmount = 0
    }
    const remove = (myid) => {
        dispatch(delet(myid))
        NetAmount = 0
    }


    const ans = mycartdata.map((key) => {
         NetAmount = NetAmount+ (key.price) * (key.quantity)
        return (
            <>
                <tr>
                    <td id="tdimage"><img src={key.image} alt="" /></td>
                    <td>{key.product_brand}</td>
                    <td id="tddetails">{key.detail}</td>
                    <td >Rs&nbsp;{key.price}&nbsp;</td>
                    <td id="tdQuantity">
                        <div id="adding"><CiCirclePlus onClick={() => increase(key.id)} id="button" /></div>
                        <div>{key.quantity}</div>
                        <div id="adding"><CiCircleMinus onClick={() => decrease(key.id)} id="button" /></div>    
                    </td>
                    <td id="tdtotalprice">{key.price*key.quantity}</td>
                    <td id="tddelete" onClick={() => { remove(key.id) }}><MdDelete /></td>
                </tr>
            </>
        );

    })

    return (
        <>
            <body id="body" className="bbty">
                <h1>Product in cart added</h1>
                <table id="carttable">
                    <tr>
                        <th></th>
                        <th>Product name</th>
                        <th>Product description</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Delete</th>
                    </tr>
                    {ans}
                    <tr colspan="5" id="tdnetamount">
                        <td colspan="5" id="tttam">Total Pay Amount</td>
                        <td colspan="2" id="tttam">Rs&nbsp;&nbsp;{NetAmount}.00/-</td>
                    </tr>
                    <tr>
                        <td id="tdorderbtn" colSpan="7"><Link to="/Orderform" id="button">Place Your Order Now</Link></td>
                    </tr>
                </table>
            </body>
        </>
    );
}
export default Addcart;