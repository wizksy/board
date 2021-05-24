import React, {useState} from 'react';

const Detail = () => {
	const [message, setMessage] = useState('');
	const onClickEnter = () => setMessage('Hello');
	const onClickLeave = () => setMessage('Good Bye~');
	const [color, setColor] = useState('black');
  return 
	<div>
		<div>detail page</div>
		<button onClick={onClickEnter}>Enter</button>
	  	<button onClick={onClickLeave}>Leave</button>
	  	<input type="text" name="message" placeholder="input anything" onChange={
			  (e) => {console.log(e)}
		  }
		/>
  	</div>;
};

export default Detail;
