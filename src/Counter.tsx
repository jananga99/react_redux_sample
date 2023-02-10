import React, {FC} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment} from "./action";
import {RootState} from "./store";

export const Counter: FC = () => {
    const count = useSelector((state:RootState) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Hello</h1>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
        </div>
    );
};