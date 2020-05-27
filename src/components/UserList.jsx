import React, { Component } from 'react';
import { Item } from "./Item";


export class List extends Component {
    constructor(props) {
        super(props);
        this.state = { numberOfItems: 10};
    }

    render () {
        let items = [];
        for(let i = 0; i < this.state.numberOfItems; i++) {
            items.push(<Item key={i} index={i}/>);
        }

        return (
            <>
                {items}
            </>
        )
    }
}
