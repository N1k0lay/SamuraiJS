import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {getAuthUserData} from "../redux/auth-reducer";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
});
export const withAuthRedirect = (Component) => {
    function RedirectComponent(props) {
        if (!props.isAuth) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...props} />
        // if (props.isFetching && !props.isAuth) {
        //     debugger
        //     return <Preloader/>
        //
        // } else {
        //     if (!props.isAuth) {
        //         return <Navigate to={'/login'}/>
        //     }
        //     return <Component {...props} />
        // }

    }

    return connect(mapStateToPropsForRedirect, {getAuthUserData})(RedirectComponent);

}