import React, { Component } from 'react';
import { UserItem } from "./UserItem";

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

    removeUser = (index) =>{
        const users = [...this.state.users];
        users.splice(index, 1);
        this.setState({users});
   }

    render () {

        return (
            <div>
                {/*<UserForm fnHelloBro={this.helloBro.bind(this)}/>*/}
                {/*<UserForm fnAddUser={(user) => {this.addUser(user)}}/>*/}
                {this.state.users.map((user,i) => <UserItem key={i} index={i} userInfo={user} fnRemoveUser={this.removeUser}/>)}
            </div>

        )
    }
}
