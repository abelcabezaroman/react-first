import React, { Component } from 'react';

const myStyle = { color: 'white', border: '1px solid #000', backgroundColor: 'red' };

export class HolaMundo extends Component {
    render () {
        return (
            <h1 style={myStyle}>Hola Mundo!</h1>
        )
    }
}

// <div style="color: white; bordeR: 1px solid #000; background-color: red"></div>
