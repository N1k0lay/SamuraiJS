import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {getAuthUserData} from "../redux/auth-reducer";
import Preloader from "../components/common/preloader/Preloader";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
    state: state
});
export const withAuthRedirect = (Component) => {
    function RedirectComponent(props) {
        console.log(props.isAuth);
        console.log(props.state);
        if (props.isFetching) {
            return <Preloader/>
        } else {
            if (!props.isAuth) {
                return <Navigate to={'/login'}/>
            }
            return <Component {...props} />
        }

    }

    return connect(mapStateToPropsForRedirect, {getAuthUserData})(RedirectComponent);

}