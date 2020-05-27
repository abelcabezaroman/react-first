import React, { Component } from 'react';
import { UserItem } from "./UserItem";


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

    render () {
        let items = [];



        for (const user of this.state.users) {
            items.push(<UserItem key={user.name} userInfo={user}/>);
        }

        return (
            <ul>
                {items}
            </ul>
        )
    }
}
