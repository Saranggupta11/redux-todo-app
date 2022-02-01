import { Box, Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { ADD_TODO } from "../redux/actions";
import { useDispatch } from "react-redux";
export default function TodoAdder() {
  const [title, setTitle] = useState(null);
  const titleFieldRef = useRef(null);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (title) {
      dispatch({
        type: ADD_TODO,
        payload: {
          title,
        },
      });
    }
    setTitle(null);
    titleFieldRef.current.value = "";
  };
  return (
    <Box>
      <TextField
        value={title}
        style={{
          width: 400,
        }}
        inputRef={titleFieldRef}
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
