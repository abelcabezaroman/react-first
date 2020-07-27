import React, { Component } from 'react';
import { Item } from "./Item";
export class List extends Component {
    render () {
        let items = [];

        for(let i = 0; i < 5; i++) {
            items.push(<li key={i}>Item {i}</li>);
        }

        return (
            <ul>
                {items}
            </ul>
        )
    }
}
