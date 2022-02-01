import {
  FormGroup,
  ListItem,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import React from "react";
import { TOGGLE_TODO } from "../redux/actions";

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
    </ListItem>
  );
}
