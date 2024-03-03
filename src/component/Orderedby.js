import { useDispatch, useSelector } from "react-redux";




const Orderedby = () => {
    const mydetail = useSelector(state => state.myorder.orderdetail);
    const dispatch = useDispatch();
    const myans = mydetail.map((key) => {
        <div id="order_by">
            <h4>Customer Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {key.first_name + " " + key.last_name} </h4>
            <h4>Customer contact No.  : {key.contact} </h4>
            <h4>Customer Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  :  {key.email} </h4>
            <h4>Shipping Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :  {key.address}   </h4>
            <h4>Shipping Landmark &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :  {key.landmark}   </h4>
            <h4>State  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {key.state}  </h4>
            <h4>pinecode  :  {key.area_pinecode}  </h4>
        </div>
    });
    console.log(myans)
    return (
        <>
            <section>
                {myans}
            </section>
        </>
    );
}
export default Orderedby;