import React, { Component } from 'react';


export class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = { counter: 0 };
    }

    plusOne () {
        this.setState({ counter: this.state.counter + 1 });
    }

    render () {
        return (
            <div>
                {/*<button onClick={this.plusOne.bind(this)}>+</button>*/}
                <button onClick={() => { this.plusOne()}}>+</button>
                <p>
                    {this.state.counter}
                </p>
            </div>
        )
    }
}
