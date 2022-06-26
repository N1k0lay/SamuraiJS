import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.itemDiv}><NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/profile/">Portfolio</NavLink></div>
            <div className={classes.itemDiv}><NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/dialogs">Dialogs</NavLink></div>
            <div className={classes.itemDiv}><NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/users">Users</NavLink></div>
            <div className={classes.itemDiv}><NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/">News</NavLink></div>
            <div className={classes.itemDiv}><NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/">Music</NavLink></div>
            <div className={classes.itemDiv}><NavLink className={navData => navData.isActive ? classes.active : classes.item} to="/">Settings</NavLink></div>
        </nav>
    )
}

export default Navbar;