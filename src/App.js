import React, { useState } from 'react';
import Home from './Home';
import Counter from './Counter';
import Info from './Info';
import CounterReducer from './CounterReducer';
import Navigation from './Navigation';
import Average from './Average';
import StyledComponent from './StyledComponent';

const App = () => {
  const [visible, setVisible] = useState(true);

  const show = () => {
    setVisible(visible ? false : true);
  };
  return (
    <div>
      <StyledComponent />
    </div>
  );
};
export default App;
