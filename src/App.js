import React from 'react';
import Detail from './Detail';
import './App.css';

function App() {
  const title = '용이보드';
  return (
    <div className="App">
      <div className="header">{title}</div>
      <Body></Body>
	  <Detail/>
      <Footer />
    </div>
  );
}
{
  /* 본문 컴포넌트 */
}
function Body() {
  return (
    <div>
      <div className="list">React Basic Step.1</div>
      <div className="list">React Basic Step.2</div>
      <div className="list">React Basic Step.3</div>
      <Row />
      <Detail />
    </div>
  );
}

{
  /* 게시판 Row  */
}
function Row() {
  return <div className="list">React Basic Step.1</div>;
}

function Footer() {
  return <div className="footer">copyright wizksy</div>;
}

export default App;
