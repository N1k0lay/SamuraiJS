import React from "react";
import logo from "../../logo.svg";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={classes.header}>
            <img className={classes.logo} src={logo} alt=""/>

            <div className={classes.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Логин</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;