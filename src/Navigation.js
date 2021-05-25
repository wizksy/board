import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'HOME':
      state.page = 'HOME';
      return state;
    case 'ABOUT':
      state.page = 'ABOUT';
      return state;
    case 'QNA':
      state.page = 'QNA';
      return state;
    default:
      return state;
  }
}

const Navigation = () => {
  const [state, dispatch] = useReducer(reducer, { page: 'HOME' });

  const goHome = (e) => {
    console.log('HOME');
    dispatch({ type: 'HOME' });
  };

  const goAbout = (e) => {
    console.log('ABOUT');
    dispatch({ type: 'ABOUT' });
  };

  const goQna = (e) => {
    console.log('QNA');
    dispatch({ type: 'QNA' });
  };
  const link = [{ goHome }, { goAbout }, { goQna }];
  if (state.page === 'HOME') {
    return <Home link={state} />;
  } else if (state.page === 'ABOUT') {
    return <About />;
  } else if (state.page === 'QNA') {
    return <Qna />;
  } else {
    return <div></div>;
  }
};

const Home = (link) => {
  const [state, dispatch] = useReducer(reducer, { page: 'HOME' });

  const goHome = (e) => {
    console.log('test');
    dispatch({ type: 'HOME' });
  };

  const goAbout = (e) => {
    console.log('ABOUT');
    dispatch({ type: 'ABOUT' });
  };

  const goQna = (e) => {
    console.log('QNA');
    dispatch({ type: 'QNA' });
  };
  return (
    <div>
      <div>this page is HOME</div>
      <button onClick={goHome}>HOME</button>
      <button onClick={goAbout}>ABOUT</button>
      <button onClick={goQna}>QNA</button>
    </div>
  );
};
const About = (link) => {
  return (
    <div>
      <div>this page is ABOUT</div>
      <button onClick={link[0]}>HOME</button>
      <button onClick={link[1]}>ABOUT</button>
      <button onClick={link[2]}>QNA</button>
    </div>
  );
};
const Qna = (link) => {
  return (
    <div>
      <div>this page is QNA</div>
      <button onClick={link[0]}>HOME</button>
      <button onClick={link[1]}>ABOUT</button>
      <button onClick={link[2]}>QNA</button>
    </div>
  );
};

export default Navigation;
