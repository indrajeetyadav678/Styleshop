
import { Link } from "react-router-dom";


const CatagaryComponent = (props) => {
    return (
        <>
            <Link to={props.link}>
                <div className="catcomp_box">
                    <img src={props.catimage} atl="" /><br />
                    <label>{props.catname}</label>
                </div>
            </Link>
        </>
    );
}
export default CatagaryComponent;