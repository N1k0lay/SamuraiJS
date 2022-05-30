import React from "react";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {profileAPI} from "../../API/api";

function withRouter(Component) {
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

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = 2;
        }
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    };

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    };
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {
    setUserProfile,
})(withRouter(ProfileContainer));