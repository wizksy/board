import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/qna" component={Qna} />
      </Router>
    </>
  );
};

const Header = () => {
  return (
    <header className="header">
      <strong>Header</strong>
      <ul>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="qna">Qna</a>
        </li>
      </ul>
    </header>
  );
};
const Home = () => {
  return (
    <div>
      <Header></Header>
      <div>this page is HOME</div>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <Header></Header>
      <div>this page is ABOUT</div>
    </div>
  );
};
const Qna = () => {
  return (
    <div>
      <Header></Header>
      <div>this page is QNA</div>
    </div>
  );
};

export default Navigation;
