import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/icons/Poké_Ball_icon.svg";

const Header = () => (
  <div>
    <AppBar position="sticky" className="app-bar">
      <Toolbar className="toolbar">
        <Link className="logo-content" to="/">
          <Logo className="logo" />
        </Link>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
