import React from 'react';
import {Button} from '@mui/material';
import {UniversalButton} from '../button/UniversalButton';
import {UniversalInput} from './input/UniversalInput';





export function Settings() {
    return (


        <div>
            <UniversalInput title={'max value:'}/>
            <UniversalInput title={'min value:'}/>

            <Button>
                <UniversalButton
                    title={'set'}
                />
            </Button>
        </div>
    )
}
