import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { Container } from "@mui/material";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (userF) => {
    if (userF) {
      setUser(userF);
    } else {
      setUser(null);
    }
  });

  const handleAuth = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative" className="appBar">
          <Toolbar>
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img
                  src="https://hurin.com.ar/wp-content/uploads/2019/05/CERTIFICACIONES-PRESENCIALES-Garnet-Technology-2019.png"
                  className="navLogo"
                  alt="logo"
                  height={100}
                />
              </IconButton>
            </Link>
            <Typography
              color="textPrimary"
              variant="h6"
              component="p"
              sx={{ flexGrow: 1 }}
            >
              Hola {user ? user.email : "Usuario"}
            </Typography>

            <div className="buttonNav">
              {!user ? (
                <Link to="/signin">
                  <Button variant="filled">
                    <strong>Sign In</strong>
                  </Button>
                </Link>
              ) : null}

              <Button variant="filled" onClick={handleAuth}>
                <strong>Sign Out</strong>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
