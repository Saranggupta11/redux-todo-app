import { Box, Grid, Typography, Divider, List, ListItem } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import TodoListItem from "./todoListItem";
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
  const prioritisedTodos = (function priorities() {
    const importantTodos = [];
    const notImportantTodos = [];

    todos.forEach((todo) => {
      if (todo.important) {
        importantTodos.push(todo);
      } else {
        notImportantTodos.push(todo);
      }
    });
    return importantTodos.concat(notImportantTodos);
  })();
  return (
    <Box className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            My Todos
          </Typography>
          <Divider />
          <List>
            {prioritisedTodos.map((todo) => {
              if (!todo.completed) {
                return <TodoListItem {...todo} />;
              } else {
                return null;
              }
            })}
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            Completed
          </Typography>
          <Divider />
          <List>
            {prioritisedTodos.map((todo) => {
              if (todo.completed) {
                return <TodoListItem {...todo} />;
              } else {
                return null;
              }
            })}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
