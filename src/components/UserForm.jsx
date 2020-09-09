import React, { Component } from 'react';

const defaultUser = {
    name: 'Abel Cabeza Román',
    years: 25,
    rol: 'Profesor'
};

export class UserForm extends Component {
    state = defaultUser


    handleChange = ($event) => {
        this.setState({ [$event.target.name]: $event.target.value });
    }

    saveUser = ($event) => {
        $event.preventDefault();
        this.props.fnAddUser(this.state);
        this.setState(defaultUser)
    }


    render () {
        return (
            <form onSubmit={this.saveUser}>
                <input value={this.state.name} name='name' onChange={this.handleChange}
                       type="text"/>
                <input value={this.state.years} name='years' onChange={this.handleChange}
                       type="number"/>
                <input value={this.state.rol} name='rol' onChange={this.handleChange}
                       type="text"/>
                <input type="submit" value="Guardar"/>
            </form>
        )
    }
}
