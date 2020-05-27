import React, { Component } from 'react';

export class UserItem extends Component {
    render () {

        const userInfo = this.props.userInfo;

        return (
            <li>Me llamo {userInfo.name}, tengo {userInfo.years} y soy {userInfo.rol}</li>
        )
    }
}

