import React, {useState} from 'react';
import {UniversalButton} from '../button/UniversalButton';
import {Button, ButtonGroup} from '@mui/material';


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
        <div>
            <div className={result === maxValue ? 'table' : 'table1'}>{result}</div>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                <div>
                    <Button key="one">
                        <UniversalButton
                            title={'inc'}
                            onClickHandler={incOne}
                            disableCase={disableInc}
                            result={result}
                        />
                    </Button>


                    <Button key="two">
                        <UniversalButton
                            title={'reset'}
                            onClickHandler={reset}
                            disableCase={disableRes}
                            result={result}/>
                    </Button>
                </div>
            </ButtonGroup>

        </div>

    )
}

