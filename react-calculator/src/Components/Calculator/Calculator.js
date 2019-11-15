import React from 'react';
import styles from './Calculator.css';
import Button from '../Button/Button';
import Display from '../Display/Display';

const calculator = props => {
	return(
		<div className="mainc">
			<div className="display">
				<Display
					number={props.number}
					/>
			</div>
			<div className="rowC">
				<Button value="AC" clicked={props.reset}/>
				<Button value="+/-"/>
				<Button value="%"/>
				<Button value="/"/>
			</div>
			<div className="rowC">
				<Button value="7" clicked={props.normal}/>
				<Button value="8" clicked={props.normal}/>
				<Button value="9" clicked={props.normal}/>
				<Button value="X"/>
			</div>
			<div className="rowC">
				<Button value="4" clicked={props.normal}/>
				<Button value="5" clicked={props.normal}/>
				<Button value="6" clicked={props.normal}/>
				<Button value="-" clicked={props.sub}/>
			</div>
			<div className="rowC">
				<Button value="1" clicked={props.normal}/>
				<Button value="2" clicked={props.normal}/>
				<Button value="3" clicked={props.normal}/>
				<Button value="+" clicked={props.add}/>
			</div>
			<div className="rowC">
				<Button value="0" clicked={props.normal}/>
				<Button value="."/>
				<Button value="+"/>
				<Button value="=" clicked={props.equals}/>
			</div>
		</div>
	);
}

export default calculator;
