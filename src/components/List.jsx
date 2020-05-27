import React, { Component } from 'react';

const myStyle = { color: 'white', border: '1px solid #000', backgroundColor: 'red' };

export class HolaMundo extends Component {
    render () {

        const text = 'Hello World';
        const text1 = 'Hello World Again';

        return (
            <>
                <h1 style={myStyle}>{text}</h1>
                <h1 style={myStyle}>{text1}</h1>
            </>
        )
    }
}

