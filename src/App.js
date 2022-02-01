import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, makeStyles, Paper } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root: {},
    appContainer:{
        paddingLeft:100,
        paddingRight:100,
        paddingTop:100,
        backgroundColor:'blue'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.appContainer}>
          <Paper>hello world</Paper>
      </Container>
    </Box>
  );
}
