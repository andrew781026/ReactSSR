import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import ReduxUser from '../../store/actionReducers/user';

class UserList extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers(users) {

        return users.map((user) => {
            return (
                <li key={user.id}>{user.name}</li>
            );
        });
    }

    render() {

        const {users} = this.props;

        return (
            <div>
                Here is A big List of Users :
                <ul>{this.renderUsers(users)}</ul>
            </div>
        )
    }

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUsers: ReduxUser.ActionCreator.fetchUsers,
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        users: state.user.list
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserList));
