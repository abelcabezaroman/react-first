import React, { Component } from 'react';


export class UserForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: ''
        }
    }


    handleChange (event) {
        console.log('##ABEL## >> UserForm >>  handleChange', event.target);
        this.setState({ [event.target.name]: event.target.value });
        // this.setState({ name: 'asd'});
    }

    render () {

        return (
            <form onSubmit={($event) => {$event.preventDefault()}}>
                <input name='name' onChange={($event) => {this.handleChange($event)}}
                       type="text"/>
                <button onClick={() => {
                    this.props.fnHelloBro();
                }}>Guardar
                </button>
            </form>
        )
    }
}
