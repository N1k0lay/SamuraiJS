import {useLocation, useNavigate, useParams, useMatch} from "react-router-dom";
import React from "react";

export const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

// export const withRouter = (Component) =>{
//     let RouterComponent = (props) => {
//         const match = useMatch('/profile/:userId/');
//         return <Component {...props} match={match}/>;
//     }
//     return RouterComponent;
// }
