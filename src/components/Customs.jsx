import React, { Component } from 'react';

export class Customs extends Component {
    person1 = {
        name: 'Abel',
        foreign: false,
        haveDni: true,
        havePassport: false
    };
    person2 = {
        name: 'Carlos Wu',
        foreign: true,
        haveDni: false,
        havePassport: false
    };
    person3 = {
        name: 'Elena',
        foreign: true,
        haveDni: false,
        havePassport: true
    };

    person = this.person2;

    render() {
        return (
            <div>
                <p>Your name is {this.person.name}</p>
                {(this.person.foreign && this.person.havePassport) || (!this.person.foreign && this.person.haveDni) ? <p>You can pass</p> : <p>You can't pass</p>}
            </div>
        )
    }
}
