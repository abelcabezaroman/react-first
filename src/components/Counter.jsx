import React, { Component } from 'react';


export class Counter extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = { counter: 0 };
    // }

    state = {counter: 0};

    plusOne = () => {
        this.setState({ counter: this.state.counter + 1 });
        // this.state = { counter: this.state.counter + 1 }; MAL

        setTimeout(() => {
            console.log('##ABEL## >> Counter >>  plusOne', this.state.counter);
        }, 0)
        console.log('##ABEL## >> Counter >>  plusOne', this.state.counter);
    }

    minusOne = () => {
        this.setState({ counter: this.state.counter - 1 });
        console.log('##ABEL## >> Counter >>  plusOne', this.state.counter);
    }



    render () {
        return (
            <div>
                {/*<button onClick={this.plusOne.bind(this)}>+</button>*/}
                <button onClick={this.plusOne}>+</button>
                <p>
                    {this.state.counter}
                </p>
                <button onClick={this.minusOne}>-</button>
            </div>
        )
    }
}




