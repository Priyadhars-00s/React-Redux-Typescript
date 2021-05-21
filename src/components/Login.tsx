import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { FormControl } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import {  makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: 'flex',
    backgroundColor: 'gold',
  },
  marginAutoItem: {
    margin: 'auto'
  },
  alignItemsAndJustifyContent: {
      display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
}))
export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("false")
  const classes = useStyles();
  let history = useHistory();
  const signIn = () => {
    console.log('inside the method')
    history.push('/user')
  };
  return (
    <div className={classes.alignItemsAndJustifyContent}>
       
      <FormControl style={{ margin: 'dense'}}
      onSubmit={(event) => {
            event.preventDefault();
            history.push("/user");
          }}>
         <Typography component="h1" variant="h5">
       Sign in
     </Typography>
        <TextField
           variant="outlined"
           margin="normal"
           required
           placeholder="Username"
           id="email"
           label="Email Address"
           name="email"
           autoComplete="email"
           value={username}
          onChange={(e) => setUsername(e.target.value)}
       
         
        >
          </TextField>
        <TextField
          variant="outlined"
          margin="normal"
          required
          placeholder="Password"
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
                  
        >
          </TextField>
       <Button
          type="submit"
         variant="contained"
         onClick={signIn}
         color="primary">
            Login
          </Button>
          </FormControl>
     
          </div>
  );
};
