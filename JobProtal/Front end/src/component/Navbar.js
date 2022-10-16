import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
    Grid,
  } from "@material-ui/core";
  import { useHistory } from "react-router-dom";
  import React from "react";
  
  import isAuth, { userType } from "../lib/isAuth";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(8),
    },
    title: {
      flexGrow: 1,
    },
    colour:
    {
      background: "black"
    },
  }));
  
  
  const Navbar = (props) => {
    const classes = useStyles();
    let history = useHistory();
  
    const handleClick = (location) => {
      console.log(location);
      history.push(location);
    };
  
    return (
      <AppBar position="sticky" color="black">
        <Toolbar>
          <Button color="primary" onClick={() => handleClick("/welcome")}>
          <Typography><h1>
            MᴀᴀʀɢʜDᴀʀsʜᴀᴋ</h1></Typography>
                </Button>
                
      
          {isAuth() ? (
            userType() === "recruiter" ? (
              <>
                
                <Button color="inherit" onClick={() => handleClick("/addjob")}>
                  Add Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                  My Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/employees")}>
                  Employees
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            ) : (
              <>
              
                <Button
                  color="inherit"
                  onClick={() => handleClick("/applications")}
                >
                  Applications
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            )
          ) : (
            <>
             <Button color="inherit" onClick={() => handleClick("/")}>
                
                </Button>
                <Button color="inherit" onClick={() => handleClick("/")}>
                
              </Button>
              <Button color="inherit" onClick={() => handleClick("/")}>
                
              </Button>
              <Button color="inherit" onClick={() => handleClick("/")}>
                
              </Button>
              <Button color="inherit" onClick={() => handleClick("/")}>
                
              </Button>
              <Button color="inherit" onClick={() => handleClick("/")}>
                
              </Button>
              <Button color="inherit" onClick={() => handleClick("/")}>
                
              </Button>
              <Button color="inherit" onClick={() => handleClick("/")}>
                
              </Button>
            <Button color="secondary" onClick={() => handleClick("/login")}>
            𝐋𝐨𝐠𝐢𝐧 
              </Button>
              
              <Button color="secondary" onClick={() => handleClick("/signup")}>
              New user?𝐒𝐢𝐠𝐧𝐔𝐩
              </Button>
            <Button color="secondary" onClick={() => handleClick("/profile")}>
            𝐌𝐲 𝐏𝐫𝐨𝐟𝐢𝐥𝐞
              </Button>
              <Button color="secondary" onClick={() => handleClick("/addjob")}>
              𝐀𝐝𝐝 𝐚 𝐉𝐨𝐛
              </Button>
            <Button color="secondary" onClick={() => handleClick("/AcceptedApplicants")}>
            𝐀𝐜𝐜𝐞𝐩𝐭𝐞𝐝 𝐣𝐨𝐛𝐬
              </Button>
              <Button color="secondary" onClick={() => handleClick("/myjobs")}>
              𝐌𝐲 𝐉𝐨𝐛𝐬
              </Button>
              <Button color="secondary" onClick={() => handleClick("/applications")}>
              𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬
              </Button>
              <Button color="secondary" onClick={() => handleClick("/logout")}>
              𝐋𝐨𝐠𝐨𝐮𝐭
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;
  