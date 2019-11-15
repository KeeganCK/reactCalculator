import React from 'react';
import styles from './Button.css';

const button = props => {
	return (
		<div className="mainb">
			<button className="button1" onClick={props.clicked} value={props.value}>{props.value}</button>
		</div>
	);
}

export default button;
