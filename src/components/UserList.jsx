import React, { Component } from 'react';
import { UserItem } from "./UserItem";
import { UserForm } from "./UserForm";


export class UserList extends Component {
    state = {
        users: [
            {
                name: 'Abel Cabeza',
                years: 25,
                rol: 'Profesor'
            }, {
                name: 'Rolo',
                years: 25,
                rol: 'Estudiante'
            }
        ]
    };

    addUser (user) {
        this.setState({ users: [...this.state.users, user] })
    }

    removeUser (index) {
        const users = this.state.users;

        users.splice(index, 1);
        this.setState({ users })
        // this.setState({ users: users })
    }


    render () {
        let items = [];


        for (let i = 0; i < this.state.users.length; i++) {
            let user = this.state.users[i];

            items.push(<UserItem key={i} index={i} userInfo={user}
                                 fnRemoveUser={(index) => {this.removeUser(index)}}/>);
        }

        return (
            <div>
                {/*<UserForm fnHelloBro={this.helloBro.bind(this)}/>*/}
                <UserForm fnAddUser={(user) => {this.addUser(user)}}/>
                <ul>
                    {items}
                </ul>
            </div>

        )
    }
}
