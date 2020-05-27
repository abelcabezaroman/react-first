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

    helloBro(){
        alert('Hello');
    }

    render () {
        let items = [];



        for (const user of this.state.users) {
            items.push(<UserItem key={user.name} userInfo={user}/>);
        }

        return (
            <div>
                <UserForm fnHelloBro={this.helloBro}/>
                <ul>
                    {items}
                </ul>
            </div>

        )
    }
}
