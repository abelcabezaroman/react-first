import React, { Component } from 'react';

export default class List extends Component {
    render() {
        // let items = [];
        let itemsToLoop = ['Spiderman', 'Hulk', 'Capitan América', 'Wonderwoman']

        // for (let i = 0; i < itemsToLoop.length; i++) {
        //     items.push(<li key={i}>{itemsToLoop[i]}</li>);
        // }

        return (
            // <ul>
            //     {items}
            // </ul>
            <ul>
               {itemsToLoop.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        )
    }
}