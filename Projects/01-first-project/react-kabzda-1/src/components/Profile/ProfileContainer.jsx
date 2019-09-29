import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile } from '../../Redux/profile-reduser';


class ProfileContainer extends React.Component {

  componentDidMount () {

    let userId = this.props.match.params.userId;
    
    axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then(response => {
    this.props.setUserProfile(response.data)

      
  }
    )}
  render() {
  return (
    
    <Profile {...this.props} profile={this.props.profile}/>
  );
}
};
let mapStateToProps =(state) => ({
  
  profile: state.profileReducer.profile
})

let WitchUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WitchUrlDataContainerComponent);
