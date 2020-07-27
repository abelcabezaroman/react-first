import React, { Component } from 'react';

export class HolaUser extends Component {
    render () {
        const user = {
            name: 'Abel',
            surname: 'Cabeza Román'
        }
        return (
            <h3>Name: {user.name}, Surname: {user.surname}</h3>
        )
    }
}

// <div style="color: white; bordeR: 1px solid #000; background-color: red"></div>
