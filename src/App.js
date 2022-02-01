
import { AppBar,Box, Container, Paper, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import TodoAdder from './components/todoAdder';
import TodosContainer from './components/todosContainer';
const useStyles = makeStyles((theme) => ({
    root: {},
    appContainer:{
      paddingLeft:100,
      paddingRight:100,
      marginTop:100,
    },
    wrapper:{
      textAlign:'center',
    }
}));
export default function App() {
    const classes = useStyles();
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5'>Todos</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.appContainer}>
        <Paper className={classes.wrapper} elevation={0}>
          <TodoAdder />
          <TodosContainer />
        </Paper>
      </Container>
    </Box>
  );
};

