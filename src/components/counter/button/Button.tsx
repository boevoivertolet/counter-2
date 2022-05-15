import React from 'react';



type ButtonPropsType = {
    title: string
    onClickHandler:()=> void
    disableCase: boolean
    result:number


}


export function Button(props: ButtonPropsType) {


    return (
        <div>
            <button title={'title'} onClick={props.onClickHandler} disabled={props.disableCase}>{props.title}</button>
        </div>
    )
}