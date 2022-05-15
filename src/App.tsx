import React from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import {Container, Grid, Paper} from '@mui/material';
import {Settings} from './components/settings/Settings';


function App() {
    return (
            <Container className={'border'} fixed>
                <Grid container spacing ={10}>
                    <Grid item>
                        <Paper  elevation={24} >
                            <Counter/>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing ={10}>
                    <Grid item>
                        <Paper  elevation={24} >
                            <Settings/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
    );
}

export default App;

