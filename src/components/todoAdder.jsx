import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { ADD_TODO } from "../redux/actions";
import { useDispatch } from "react-redux";
export default function TodoAdder() {
  const [title, setTitle] = useState(null);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: ADD_TODO,
      payload: {
        title,
      }
    })
    setTitle(null);
  };
  return (
    <Box>
      <TextField
        value={title}
        style={{
          width: 400,
        }}
        variant="filled"
        label="Add new Todo"
        onChange={(e) => setTitle(e.target.value)}
      ></TextField>
      <Button
        onClick={handleClick}
        style={{
          height: 55,
        }}
        variant="contained"
        color="primary"
      >
        Add
      </Button>
    </Box>
  );
}
