import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Profile from './Profile';
import qs from 'qs';

const Navigation = () => {
  return (
    <>
      <Router>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/qna" component={Qna} />
        <Route path="/profile/:username" component={Profile} />
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/qna">Qna</Link>
        </li>
        <li>
          <Link to="/profile/wizksy">Wizksy Profile</Link>
        </li>
        <li>
          <Link to="/profile/gildong">GilDong Profile</Link>
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
const About = ({ location }) => {
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const showDetail = query.detail === 'true';

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
