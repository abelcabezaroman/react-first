import React, { Component } from 'react';

const defaultUser = {
    name: 'Abel Cabeza',
    years: 0,
    rol: 'Profesor'
};

export class UserForm extends Component {
    constructor (props) {
        super(props);
        this.state = defaultUser
    }

    handleChange (event) {
        console.log('##ABEL## >> UserForm >>  handleChange', event);
        this.setState({ [event.target.name]: event.target.value });
    }

    saveUser () {
        this.props.fnAddUser(this.state);
        this.setState(defaultUser)
    }

    render () {
        return (
            <form onSubmit={($event) => {$event.preventDefault()}}>
                <input value={this.state.name} name='name' onChange={($event) => {this.handleChange($event)}}
                       type="text"/>
                <input value={this.state.years} name='years' onChange={($event) => {this.handleChange($event)}}
                       type="number"/>
                <input value={this.state.rol} name='rol' onChange={($event) => {this.handleChange($event)}}
                       type="text"/>
                <button onClick={() => {
                    this.saveUser();
                }}>Guardar
                </button>
            </form>
        )
    }
}
