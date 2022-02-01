import { Box, Grid, Typography, Divider, List, ListItem } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
}));
export default function TodosContainer() {
  const classes = useStyles();
  const { todos } = useSelector((state) => {
    return {
      todos: state.todos,
    };
  });
  console.log(todos);
  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            My Todos
          </Typography>
          <Divider />
          <List>
            {todos.map((todo) => {
              return <ListItem dense></ListItem>;
            })}
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            Completed
          </Typography>
          <Divider />
        </Grid>
      </Grid>
    </Box>
  );
}
