import React from 'react';
import styles from './Display.css';

const display = props => {
	return(
		<div>
			<p className="right"><span className="move">{props.number}</span></p>
		</div>
	);
}

export default display;
