import React, { Component } from 'react';
import { UserItem } from "./UserItem";


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

    render () {
        let items = [];


        for (let i = 0; i < this.state.users.length; i++) {
            let user = this.state.users[i];

            items.push(<UserItem key={i} index={i} userInfo={user}/>);
        }

        return (
            <div>
                {/*<UserForm fnHelloBro={this.helloBro.bind(this)}/>*/}
                {/*<UserForm fnAddUser={(user) => {this.addUser(user)}}/>*/}
                <ul>
                    {items}
                </ul>
            </div>

        )
    }
}
