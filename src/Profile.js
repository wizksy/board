import React from 'react';
import { Route, Link } from 'react-router-dom';

const data = {
  wizksy: {
    name: '김성용',
    description: 'react student',
  },
  gildong: { name: '홍길동', description: 'hong gil dong' },
};
const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div> not exist</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <Route path="/profiles" exact render={() => <div>Select User</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profile;
