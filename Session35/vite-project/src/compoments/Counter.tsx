import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../slices/hook";
import {
    decrement,
    increment,
    incrementByAmount,
} from "../slices/counterslice"

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Counter App</h2>
      <p>Giá trị hiện tại: {count}</p>

      <button onClick={() => dispatch(increment())}>+ Tăng</button>
      <button onClick={() => dispatch(decrement())}>- Giảm</button>

      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          + Tăng theo số nhập
        </button>
      </div>
    </div>
  );
};

export default Counter;
