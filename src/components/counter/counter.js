import {useSelector, useDispatch} from "react-redux";

export default function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Lets Count: {counter}</h1>
            <div>
                <button onClick={() => dispatch({type: '+1'})}>+1</button>
                <button onClick={() => dispatch({type: '-1'})}>-1</button>
                <button onClick={() => dispatch({type: '+100'})}>+100</button>
                <button onClick={() => dispatch({type: '-100'})}>-100</button>
            </div>
        </div>
    );
}