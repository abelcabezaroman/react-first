import React, { Component } from 'react';
import { UserItem } from "./UserItem";
import { UserForm } from "./UserForm";


export class UserList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            users: [
                {
                    name: 'Abel Cabeza',
                    years: 24,
                    rol: 'Profesor'
                }, {
                    name: 'Rolo',
                    years: 25,
                    rol: 'Estudiante'
                }
            ]
        };
    }

    addUser (user) {
        this.setState({ users: [...this.state.users, user] })
    }

    render () {
        let items = [];


        for (const user of this.state.users) {
            items.push(<UserItem key={user.name + user.years + user.rol} userInfo={user}/>);
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
