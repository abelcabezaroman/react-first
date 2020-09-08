import React from 'react';
import './App.css';
import { HelloWorldProps } from "./components/HelloWorldProps";
import { UserItem } from "./components/UserItem";
import { UserList } from "./components/UserList";

const name = 'Abel'

function App () {
    return (
        <div className="App">
            <div className="App-header">
                {/*<Button/>*/}
                {/*<HolaMundo/>*/}
                {/*<HolaUser/>*/}
                {/*<List/>*/}
                <UserItem userInfo={{
                    name: 'Abel Cabeza',
                    years: 25,
                    rol: 'Profesor'
                }}/>
                {/*<UserList/>*/}
                {/*<Counter/>*/}
                {/*<CounterSuper/>*/}
                {/*<ListProps/>*/}
                {/*<HelloWorldProps name={name} age={25} text={"Ola k ase"}/>*/}
                {/*<HelloWorldProps name="Carlos" text={"Nanaina"}/>*/}

            </div>
        </div>
    );
}

export default App;
