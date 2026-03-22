import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const AddOne = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const removeOne = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  const resetCount = () => {
    const newCount = 0;
    setCount(newCount);
  };
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={AddOne}>Add-1</button>
      <button onClick={removeOne}>Remove-1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default Counter;
