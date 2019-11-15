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


    const negOne = () => {
        calcState.display = calcState.display * -1;
        setCalc({
            value: calcState.display,
            answer: calcState.answer,
            display: calcState.display,
            operation: calcState.operation
        })
    }

    const clicked = (event) => {
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

    const reset = () => {
        setCalc({
            value: 0,
            answer: 0,
            display: 0,
            realValue: '',
            operation: ""
        })
    }

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
                operation: ""
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
                operation: ""
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
                operation: ""
            });
        }
        else {
            let answer = calcState.answer;
            let value = calcState.value;
            answer = answer % value;
            setCalc({
                value: answer,
                answer: answer,
                display: answer,
                realValue: '',
                operation: ""
            });
        }

    }

  return (
    <div className="App">
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
        />
    </div>
  );
}

export default App;
