import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Input } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionType from "../constants/actionTypes";
import jwtDecode from "jwt-decode";

const linkCSS = {
  textDecoration: "none",
  color: "white",
  fontWeight: "400",
};

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const location = useLocation();


  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    Navigate("/");
    setUser(null);
    localStorage.removeItem("profile");
  };

  const checkTokenExpiration = () => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  };

  useEffect(() => {
    checkTokenExpiration();
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: " #313866" }}>
        <Toolbar>
          <img src="https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-10.png" style={{ width: "25px", height: "25px" }} />{" "}
          &nbsp;&nbsp;&nbsp;
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Naman BLOG
          </Typography>
          {user && (
            <>
              <Button color="inherit">
                <Link to="/" exact style={linkCSS}>
                  Home
                </Link>
              </Button>
              <Button color="inherit">
                <Link to="/dashboard" exact style={linkCSS}>
                  Upload Blog
                </Link>
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </>
          )}

          {!user && (
            <>
            <Link to='/about' exact style={{textDecoration:'none', color:'white'}}>About me</Link>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <a
                  href='https://abhinavnaman.netlify.app'
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" ,color:'white'}}
                >
                  Portfolio
                </a>
                </>
          )}

          
           
          
          &nbsp;
          {user && (
            <Button color="inherit" variant="outlined" onClick={logout}>
              LogOut
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
