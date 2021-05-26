import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
	console.log('평균값 계산 중');
	if( numbers.length === 0) return 0;
	const sum = numbers.reduce((a,b) => a + b);
	return sum / numbers.length;
};

const Average = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState('');
	
	const onChange = e => {
		setNumber(e.target.value);	
	};
	
	const onChnage1 = useCallback( e => {
		setNumber(e.target.value);
	}, []);
	
	const onInsert = e => {
		const nextList = list.concat(parseInt(number));
		setList(nextList);
	};
	
	const onInsert1 = useCallback( () => {
		const nextList = list.concat(parseInt(number));
		setList(nextList);
		setNumber('');
	}, [number, list]);
	
	const avg = useMemo( () => getAverage(list), [list]);
	return (
		<div>
			<input value={number} onChange={onChange}/>
			<button onClick={onInsert}>register</button>
			<ul>
				{list.map((value, index) => (
				<li key={index}>{value}</li>
				))}
			</ul>
			<div><b> average value : {avg} </b></div>
		</div>
	);
};

export default Average;