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
				<Button value="+/-" clicked={props.neg}/>
				<Button value="%" clicked={props.mod}/>
				<Button value="/" clicked={props.div}/>
			</div>
			<div className="rowC">
				<Button value={7} clicked={props.normal}/>
				<Button value={8} clicked={props.normal} />
				<Button value={9} clicked={props.normal} />
				<Button value="X" clicked={props.mul}/>
			</div>
			<div className="rowC">
				<Button value={4} clicked={props.normal}/>
				<Button value={5} clicked={props.normal}/>
				<Button value={6} clicked={props.normal}/>
				<Button value="-" clicked={props.sub}/>
			</div>
			<div className="rowC">
				<Button value={1} clicked={props.normal}/>
				<Button value={2} clicked={props.normal}/>
				<Button value={3} clicked={props.normal}/>
				<Button value="+" clicked={props.add}/>
			</div>
			<div className="rowC">
				<Button className="zero" value={0} clicked={props.normal}/>
				<Button value="x^2" clicked={props.square}/>
				<Button value="." clicked={props.normal}/>
				<Button value="=" clicked={props.equals}/>
			</div>
		</div>
	);
}

export default calculator;
