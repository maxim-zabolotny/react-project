import React from 'react';
import { connect } from 'http2';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) {
    return {
        follow: (userId) => {
            dispatch(follow)
        }
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);