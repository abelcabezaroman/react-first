import React, { Component } from 'react';

export default class Button extends Component {

    // alertHelloWorld () {
    //     console.log(this);
    //     const name= 'Abel';
    //     alert('Hello from alert! ' + name)
    // }

    alertHelloWorldArrow = () => {
        console.log(this);
        const name= 'Abel';
        alert('Hello from alert! ' + name)
    }

    render () {
        return (
            <>
                {/*<button onClick={this.alertHelloWorld.bind(this)}>Hello World in alert</button>*/}
                {/*<button onClick={this.alertHelloWorld}>Hello World in alert</button>*/}
                {/*<button onClick={() => {this.alertHelloWorld()}}>Hello World in alert</button>*/}
                <button onClick={this.alertHelloWorldArrow}>Hello World in alert</button>
            </>
        )
    }
}

