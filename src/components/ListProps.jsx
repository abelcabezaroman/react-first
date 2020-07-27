import React, { Component } from 'react';
import { Item } from "./Item";


export class ListProps extends Component {


    render () {
        let items = [];
        for(let i = 0; i < this.props.numberOfItems; i++) {
            items.push(<Item key={i} index={i}/>);
        }

        return (
            <>
                {items}
            </>
        )
    }
}
