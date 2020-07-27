import React, { Component } from 'react';

const myStyle = { color: 'white', border: '1px solid #000', backgroundColor: 'red' };

export class HelloWorldProps extends Component {
    render () {

        // const text = this.props.text;
        // const text1 = 'Hello World Again';

        return (
            <>
                <h1 style={{ color: 'white', border: '1px solid #000', backgroundColor: 'red' }}>{this.props.text}</h1>
                <p>{this.props.name}</p>
                {/*<h1 style={myStyle}>{text1}</h1>*/}
            </>
        )
    }
}

