import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  useEffect(() => {
    console.log('render complited');
    console.log(name, nickName);
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  return (
    <div>
      <div>
        Current Name : {name}
        <br />
        Current NickName : {nickName}
      </div>
      <div>
        name : <input type="text" value={name} onChange={onChangeName} />
        <br />
        nickName :{' '}
        <input type="text" value={nickName} onChange={onChangeNickName} />
      </div>
    </div>
  );
};

export default Info;
