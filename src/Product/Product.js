
import './Prod.css';
const Product = props => {
    return (
        <div className="boxes" onClick={props.onClickProduct}>
            <img src={props.image} alt={props.name} className="imgP"/>
            <h2 className="sP">{props.name}</h2>
        </div>
    );
};

export default Product;