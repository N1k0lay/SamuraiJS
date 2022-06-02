import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    };

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    };
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

// compose(
//     connect(mapStateToProps, {getUserProfile}),
//     withRouter,
//     withAuthRedirect
// )(ProfileContainer);
//
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
