import React, {useState} from 'react';
import {Button} from './button/Button';


export function Counter() {
    let maxValue = 5;
    let minValue = 0;

    const [result, setResult] = useState(minValue)

    const incOne = () => {
        let newResult = result + 1
        if (newResult <= maxValue)
            setResult(newResult)
    }
    const reset = () => {
        setResult(minValue)
    }
    const disableInc = result === maxValue
    const disableRes = result === 0


    return (
        <div className={'counter'}>
            <div className={result===maxValue?'table': 'table1'}>{result}</div>
            <div>
                <span className={'buttons'}>
                    <Button
                        title={'inc'}
                        onClickHandler={incOne}
                        disableCase={disableInc}
                        result={result}
                    />


                    <Button
                        title={'reset'}
                        onClickHandler={reset}
                        disableCase={disableRes}
                        result={result}/>
                </span>
            </div>
        </div>

    )
}

