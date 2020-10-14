import React, { Component } from 'react';

export default class UserItemSimple extends Component {
    render() {
        const userInfo = this.props.userInfo;
        return (
            <div>Me llamo {userInfo.name}, tengo {userInfo.years} años y soy {userInfo.rol}</div>
        )
    }
}

