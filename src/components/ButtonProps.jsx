import React, { Component } from 'react';

export default class ButtonProps extends Component {
    render() {
        return (
            <button>{this.props.text}</button>
        )
    }
}

