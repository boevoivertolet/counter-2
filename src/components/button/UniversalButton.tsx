import React from 'react';
import {Button} from '@mui/material';



type ButtonPropsType = {
    title: string
    onClickHandler?:()=> void
    disableCase?: boolean
    result?:number


}


export function UniversalButton(props: ButtonPropsType) {


    return (
        <div>
            <Button variant="outlined" title={'title'} onClick={props.onClickHandler} disabled={props.disableCase}>{props.title}</Button>
        </div>
    )
}