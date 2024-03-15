



const CatagaryComponent = (props) => {
    return (
        <>
            <div className="catcomp_box" id={props.catfunction}>
                    <img src={props.catimage} atl="" /><br/>
                <label>{props.catname}</label>
            </div>
        </>
    );
}
export default CatagaryComponent;