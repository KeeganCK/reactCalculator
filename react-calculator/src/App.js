import React, { useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator/Calculator';

const App = () => {

    const [calcState, setCalc] = useState({
        value: 0,
        answer: 0,
        display: 0,
        realValue: '',
        operation: ""
    });

    //allows the use of key presses
    const keyHandler = (e) => {
        let key = e.key;
        if(key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5'
            || key === '6' || key === '7' || key === '8' ||key === '9' || key === '.'){
            clicked(key);
        }
        else if(key === '+'){
            add();
        }
        else if(key === '-'){
            sub();
        }
        else if(key === 'x'){
            multi();
        }
        else if(key === '/'){
            div();
        }
        else if(key === '%'){
            mod();
        }
        else if(key === 'e'){
            equals();
        }
        else if(key === 'c'){
            reset();
        }
        else if(key === ','){
            negOne();
        }
    }

    //Set the operation to add and get answer to equal value
    const add = () => {
        let answer = calcState.answer;
        let value = calcState.value;
        answer = value;
        setCalc({
            value: value,
            answer: answer,
            display: answer,
            realValue: '',
            operation: "plus"
        });
    }

    //Set the operation to sub and get answer to equal value
    const sub = () => {
        let answer = calcState.answer;
        let value = calcState.value;
        answer = value;
        setCalc({
            value: value,
            answer: answer,
            display: answer,
            realValue: '',
            operation: "sub"
        });
    }

    //Set the operation to multi and get answer to equal value
    const multi = () => {
        let answer = calcState.answer;
        let value = calcState.value;
        answer = value;
        setCalc({
            value: value,
            answer: answer,
            display: answer,
            realValue: '',
            operation: "multi"
        });
    }

    //Set the operation to div and get answer to equal value
    const div = () => {
        let answer = calcState.answer;
        let value = calcState.value;
        answer = value;
        setCalc({
            value: value,
            answer: answer,
            display: answer,
            realValue: '',
            operation: "div"
        });
    }

    //Set the operation to mod and get answer to equal value
    const mod = () => {
        let answer = calcState.answer;
        let value = calcState.value;
        answer = value;
        setCalc({
            value: value,
            answer: answer,
            display: answer,
            realValue: '',
            operation: "mod"
        });
    }

    //Carry out the square operation and set operation to square
    const square = () => {
        let answer = calcState.answer;
        let value = calcState.value;
        answer = value * value;
        setCalc({
            value: answer,
            answer: answer,
            display: answer,
            realValue: '',
            operation: "square"
        });
    }

    //Makes the number negative or a negative number positive (bug here)
    const negOne = () => {
        calcState.display = calcState.display * -1;
        setCalc({
            value: calcState.display,
            answer: calcState.answer,
            display: calcState.display,
            realValue: calcState.realValue,
            operation: calcState.operation
        })
    }

    //getting the value from the event or from key press
    const clicked = (event) => {
        let key = event;
        if(key === '0' || key === '1' || key === '2' || key === '3' || key === '4' || key === '5'
            || key === '6' || key === '7' || key === '8' ||key === '9' || key === '.'){
                let newValue = event;
                let realValue = calcState.realValue;
                realValue = realValue.concat(newValue);
                let actualValue = parseFloat(realValue);
                setCalc({
                    value: actualValue,
                    answer: calcState.answer,
                    display: actualValue,
                    realValue: realValue,
                    operation: calcState.operation
                });
        }
        else{
            let newValue = event.target.value;
            if(parseFloat(newValue) >= 0 || parseFloat(newValue) <= 9 || newValue === '.'){
                let realValue = calcState.realValue;
                realValue = realValue.concat(newValue);
                let actualValue = parseFloat(realValue);
                setCalc({
                    value: actualValue,
                    answer: calcState.answer,
                    display: actualValue,
                    realValue: realValue,
                    operation: calcState.operation
                });
            }
        }
    }

    //resets all values
    const reset = () => {
        setCalc({
            value: 0,
            answer: 0,
            display: 0,
            realValue: '',
            operation: ""
        })
    }

    // does the operation calcState.operation is set to
    const equals = () => {
        if(calcState.operation === "plus") {
            let answer = calcState.answer;
            let value = calcState.value;
            answer = answer + value;
            setCalc({
                value: answer,
                answer: answer,
                display: answer,
                realValue: calcState.realValue,
                operation: "plus"
            });
        }
        else if(calcState.operation === "sub") {
            let answer = calcState.answer;
            let value = calcState.value;
            answer = answer - value;
            setCalc({
                value: answer,
                answer: answer,
                display: answer,
                realValue: '',
                operation: ""
            });
        }
        else if(calcState.operation === "multi") {
            let answer = calcState.answer;
            let value = calcState.value;
            answer = answer * value;
            setCalc({
                value: answer,
                answer: answer,
                display: answer,
                realValue: '',
                operation: "multi"
            });
        }
        else if(calcState.operation === "div") {
            let answer = calcState.answer;
            let value = calcState.value;
            answer = answer / value;
            setCalc({
                value: answer,
                answer: answer,
                display: answer,
                realValue: '',
                operation: "div"
            });
        }
        else if(calcState.operation === "square") {
            let answer = calcState.answer;
            let value = calcState.value;
            answer = answer * answer;
            setCalc({
                value: answer,
                answer: answer,
                display: answer,
                realValue: '',
                operation: "square"
            });
        }
        else if (calcState.operation === "mod") {
            let answer = calcState.answer;
            let value = calcState.value;
            answer = answer % value;
            setCalc({
                value: answer,
                answer: answer,
                display: answer,
                realValue: '',
                operation: "mod"
            });
        }
        else if (calcState.value === 8008135 || calcState.value === 80085){
            setCalc({
                value: calcState.value,
                answer: calcState.answer,
                display: 'Why?',
                realValue: '',
                operation: ""
            });
        }
        else {
            console.log("no operation selected");
        }

    }

  return (
    <div className="App" onKeyPress={keyHandler}>
        <h3>Keyboard can be used. press "e" for =, "," for +/-, and "c" for AC. Rest is the same as appears on the calculator</h3>
        <h3>The Calculator has to be clicked before the keyboard can be used</h3>
        <Calculator
            number={calcState.display}
            add={add}
            normal={clicked}
            reset={reset}
            equals={equals}
            sub={sub}
            neg={negOne}
            mul={multi}
            div={div}
            mod={mod}
            square={square}
        />
    </div>
  );
}

export default App;
