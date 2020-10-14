import React, { Component } from 'react';

export class HelloWorldProps extends Component {
    render () {

        return (
            <div>
                <p>Hello {this.props.name} {this.props.text}</p>
            </div>
        )
    }
}

