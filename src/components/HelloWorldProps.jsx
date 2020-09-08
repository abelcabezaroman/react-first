import React, { Component } from 'react';

// const myStyle = { color: 'white', border: '1px solid #000', backgroundColor: 'red' };

export class HelloWorldProps extends Component {
    render () {

        // const text = this.props.text;
        // const text1 = 'Hello World Again';

        return (
            <div>
                <p style={{ color: 'white', border: '1px solid #000', backgroundColor: 'red' }}>{this.props.text} {this.props.name}</p>
                <p>Hello world props</p>
            </div>
        )
    }
}

