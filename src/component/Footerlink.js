
import ReactLoading from "react-loading";
const Footerlink = () => {
    return (
        <>
            <div id="Footerlink">
                <div style={{fontSize:"30px", height:"110px", marginRight:"15px"}}>
                Data is Loading
                </div>
                <div>
                    <ReactLoading type="bars" color="#0000FF"
                        height={100} width={50} />
                </div>
            </div>
        </>
    );
}
export default Footerlink;