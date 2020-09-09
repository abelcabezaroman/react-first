import React, { Component } from 'react';
import { UserItem } from "./UserItem";
import { UserForm } from "./UserForm";

export class UserListSuper extends Component {
    state = {
        users: [
            {
                name: 'Abel Cabeza',
                years: 25,
                rol: 'Profesor'
            }, {
                name: 'Rolo',
                years: 16,
                rol: 'Estudiante'
            }, {
                name: 'Lelouch',
                years: 19,
                rol: 'Estudiante'
            }
        ]
    };

    removeUser = (index) => {
        const users = [...this.state.users];
        users.splice(index, 1);
        this.setState({ users });
    }

    addUser = (user) => {
        this.setState({ users: [...this.state.users, user] })
    }

    render () {
        return (
            <div>
                {/*<UserForm fnAddUser={(user) => this.addUser(user)}/>*/}
                <UserForm fnAddUser={this.addUser}/>
                {this.state.users.map((user, i) => <UserItem key={i} index={i} userInfo={user}
                                                             fnRemoveUser={this.removeUser}/>)}
            </div>

        )
    }
}
