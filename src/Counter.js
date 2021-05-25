import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  const add = (e) => {
    setValue(value + 1);
  };

  const minus = (e) => {
    setValue(value - 1);
  };
  return (
    <div>
      <h1>Current value : {value}</h1>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
    </div>
  );
};

export default Counter;
