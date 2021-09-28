import { useSelector, useDispatch } from "react-redux";
import {addNumber, subNumber} from "../../modules/counter/actions";
import './style.css';

const Counter = () => {

    const number = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={_=> dispatch(subNumber())}>-</button>
            <button onClick={_=> dispatch(addNumber())}>+</button>
        </div>
    )
}

export default Counter;