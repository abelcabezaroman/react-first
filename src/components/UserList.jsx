import React, { Component } from 'react';
import { UserItem } from "./UserItem";

export class UserList extends Component {
    state = {
        users: [
            {
                name: 'Abel Cabeza',
                years: 25,
                rol: 'Profesor'
            }, {
                name: 'Rolo',
                years: 25,
                rol: 'Estudiante'
            }
        ]
    };

    render () {
        // let items = [];
        //
        // for (let i = 0; i < this.state.users.length; i++) {
        //     const user = this.state.users[i];
        //
        //     items.push(<UserItem key={i} index={i} userInfo={user}/>);
        // }

        // this.state.users.map((user, i) => {
        //      items.push(<UserItem key={i} index={i} userInfo={user}/>);
        // })

        return (
            <div>
                {/*<UserForm fnHelloBro={this.helloBro.bind(this)}/>*/}
                {/*<UserForm fnAddUser={(user) => {this.addUser(user)}}/>*/}
                {/*{items}*/}
                {this.state.users.map((user,i) => <UserItem key={i} index={i} userInfo={user}/>)}
            </div>

        )
    }
}
