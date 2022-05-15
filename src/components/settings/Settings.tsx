import React from 'react';
import {Button} from '@mui/material';
import {UniversalButton} from '../button/UniversalButton';
import {UniversalInput} from './input/UniversalInput';

export function Settings() {
    return (
        <div>
            <UniversalInput/>
            <Button key="one">
                <UniversalButton
                    title={'set'}
                />
            </Button>
        </div>
    )
}
