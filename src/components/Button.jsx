import React, { Component } from 'react';

export default class Button extends Component {

    name = 'Abel';

    // alertHelloWorld () {
    //     console.log(this);
    //     alert('Hello from alert! ' + this.name)
    // }

    alertHelloWorldArrow = () => {
        console.log(this);
        alert('Hello from alert! ' + this.name)
    }

    alertHelloWorldArrowParam = (message) => {
        alert('Hello from alert! ' + message)
    }

    render () {
        return (
            <>
                {/* <button onClick={this.alertHelloWorld.bind(this)}>Hello World in alert</button> */}
                {/* <button onClick={this.alertHelloWorld}>Hello World error</button> */}
                <button onClick={this.alertHelloWorldArrow}>Hello World in alert</button>
                <button onClick={() => {this.alertHelloWorldArrowParam('Adios')}}>Adios</button>
                <button onClick={() => {this.alertHelloWorldArrowParam('Hola')}}>Hola</button>
            </>
        )
    }
}
