import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}
const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <h1>Current value : {state.value}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT' });
        }}
      >
        minus
      </button>
    </div>
  );
};

export default CounterReducer;
