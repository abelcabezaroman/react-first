import React, { Component } from 'react';

export class Item extends Component {
    render () {

        return (
            <h3>Item {this.props.index}</h3>
        )
    }
}

