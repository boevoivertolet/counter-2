import React from 'react';
import {Input} from '@mui/material';


type UniversalInputPropsType = {
    title: string
}


export function UniversalInput(props: UniversalInputPropsType) {
    return (
        <div className={'settings'}>
            <span>{props.title}</span>
            <Input className={'inputWidth'} type="number"/>
        </div>
    )
}