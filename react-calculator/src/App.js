import React, { useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator/Calculator';

const App = () => {

    let newValue = '';

    const [calcState, setCalc] = useState({
        value: 0,
        answer: 0,
        operation: ""
    })

    const add = () => {
        let answer = parseFloat(newValue);
        calcState.value = answer;
        setCalc({
            value: calcState.value,
            answer: calcState.value,
            operation: "plus"
        });
        newValue='';
    }

    const sub = () => {
        let answer = parseFloat(newValue);
        calcState.value = answer;
        setCalc({
            value: calcState.value,
            answer: calcState.value,
            operation: "sub"
        })
    }

    const clicked = (event) => {
        if(newValue.length > 0) {
            newValue = newValue.concat(event.target.value);
        }
        else{
            newValue = event.target.value;
        }
    }

    const reset = () => {
        setCalc({
            value: 0,
            answer: 0,
            operation: ""
        })
    }

    const equals = () => {
        if(calcState.operation === "plus") {
            let answer = parseFloat(newValue);
            calcState.value = answer;
            calcState.answer = calcState.answer + calcState.value;
            setCalc({
                value: calcState.answer,
                answer: calcState.answer,
                operation: "plus"
            });
        }
        else if(calcState.operation === "sub") {
            let answer = parseFloat(newValue);
            calcState.value = answer;
            calcState.answer = calcState.answer - calcState.value;
            setCalc({
                value: calcState.answer,
                answer: calcState.answer,
                operation: "sub"
            });
        }

    }

  return (
    <div className="App">
        <h1>Calculator</h1>
        <Calculator
            number={calcState.answer}
            add={add}
            normal={clicked}
            reset={reset}
            equals={equals}
            sub={sub}
        />
    </div>
  );
}

export default App;
