import React, { Component } from 'react';


export class Counter extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = { counter: 0 };
    // }

    state = { count: 0};

    plusOne = () => {
        this.setState({ count: this.state.count + 1 });
        // this.state = { count: this.state.count + 1 }; MAL

        // setTimeout(() => {
        //     console.log('##ABEL## >> Counter >>  plusOne', this.state.count);
        // }, 1000)
        // console.log('##ABEL## >> Counter >>  plusOne', this.state.count);
    }

    minusOne = () => {
        this.setState({ count: this.state.count - 1 });
        // console.log('##ABEL## >> Counter >>  plusOne', this.state.count);
    }


    render () {
        return (
            <div>
                {/*<button onClick={this.plusOne.bind(this)}>+</button>*/}
                <button onClick={this.plusOne}>+</button>
                <p>
                    {this.state.count}
                </p>
                <button onClick={this.minusOne}>-</button>
            </div>
        )
    }
}

