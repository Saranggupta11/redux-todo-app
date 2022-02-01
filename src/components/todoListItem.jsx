import {
  FormGroup,
  ListItem,
  FormControlLabel,
  Checkbox,
  Typography,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { useDispatch } from "react-redux";
import React from "react";
import { TOGGLE_TODO, DELETE_TODO,TOGGLE_IMPORTANT } from "../redux/actions";
import { Delete, Star, StarOutline} from "@mui/icons-material";

export default function TodoListItem({ id, title, completed, important }) {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch({
      type: TOGGLE_TODO,
      payload: {
        id,
      },
    });
  };
  const toggleImportant = () => {
    dispatch({
        type: TOGGLE_IMPORTANT,
        payload: {
          id,
        },
      });
  }
  const handleDeleteClick = () => {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id,
      },
    });
  };
  return (
    <ListItem dense>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={completed}
              name={title}
              onChange={handleChange}
            />
          }
          label={
            <Typography
              style={{
                textDecoration: completed ? "line-through" : "none",
              }}
            >
              {title}
            </Typography>
          }
        ></FormControlLabel>
      </FormGroup>
      <ListItemSecondaryAction>
        <IconButton onClick={toggleImportant} edge="end">
          {important ? <Star /> : <StarOutline />}
        </IconButton>
        <IconButton onClick={handleDeleteClick} edge="end">
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
