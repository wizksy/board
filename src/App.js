import React, { useState } from 'react';
import Home from './Home';
import Counter from './Counter';
import Info from './Info';
import CounterReducer from './CounterReducer';
import Navigation from './Navigation';
import Average from './Average';

const App = () => {
  const [visible, setVisible] = useState(true);

  const show = () => {
    setVisible(visible ? false : true);
  };
  return (
    <div>
      <button onClick={show}>{visible ? 'hide' : 'show'}</button>
      {visible && <Average />}
    </div>
  );
};
export default App;
