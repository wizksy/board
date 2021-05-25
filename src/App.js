import React, { useState } from 'react';
import Detail from './Detail';
import './App.css';

function App() {
  const title = '용이보드';
  return (
    <div className="App">
      <div className="header">{title}</div>
      <Body
        list={[
          { title: 'React Basic Step1', date: '2021.05.21' },
          { title: 'React Basic Step1', date: '2021.05.21' },
          { title: 'React Basic Step1', date: '2021.05.21' },
        ]}
      ></Body>
      <Footer />
    </div>
  );
}

{
  /* 본문 컴포넌트 */
}
function Body(testList) {
  const [boardListData, setBoardListData] = useState([
    { title: 'React Basic Step1', date: '2021.05.21' },
    { title: 'React Basic Step1', date: '2021.05.21' },
    { title: 'React Basic Step1', date: '2021.05.21' },
  ]);

  console.log(testList);
  const boardList = boardListData.map((data) => (
    <Row title={data.title} date={data.date} />
  ));
  return <div>{boardList}</div>;
}

{
  /* 게시판 Row  */
}
function Row(props) {
  const { title, date } = props;
  return (
    <div
      className="list"
      onClick={(e) => {
        console.log('click event');
        console.log(e);
      }}
      onChange={(e) => {
        console.log('change');
      }}
    >
      <div>{title}</div>
      <div className="listDate">{date}</div>
    </div>
  );
}

function Footer() {
  return <div className="footer">copyright wizksy</div>;
}

export default App;
