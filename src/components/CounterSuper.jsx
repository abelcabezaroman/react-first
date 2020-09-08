import React, { Component } from 'react';


export class CounterSuper extends Component {

    state = { count: 0 };

    plus = () => {
        this.setState({ count: this.state.count + this.getNumberValue() });
    }

    minus = () => {
        this.setState({ count: this.state.count - this.getNumberValue() });
    }

    multiply = () => {
        this.setState({ count: this.state.count * this.getNumberValue() });
    }

    divide = () => {
        this.setState({ count: this.state.count / this.getNumberValue() });
    }

    reset = () => {
        this.setState({ count: 0 });
    }

    getNumberValue = () => {
        return Number(document.getElementById('numberToUse').value);
    }


    render () {
        return (
            <div>
                {/*<button onClick={this.plus.bind(this)}>+</button>*/}
                <input type="number" id="numberToUse" />
                <button onClick={this.plus}>+</button>
                <button onClick={() => this.minus()}>-</button>
                <button onClick={this.multiply}>*</button>
                <button onClick={this.divide}>/</button>
                <button onClick={this.reset}>C</button>

                <p>
                    {this.state.count}
                </p>
            </div>
        )
    }
}

