
import './Box.css';

const SelectionBox = props => {
        return (
            <div className="box">
                <h3>{props.name}</h3>
                <span>{props.amount}x</span>
                <span>{props.price} KGS</span>
                <button className="rem" onClick={props.cbr}>❌</button>
            </div>
        );
};

export default SelectionBox;