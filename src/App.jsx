import React from 'react';
import './App.css';
import Button from "./components/Button";
import { Counter } from "./components/Counter";
import { HelloWorldProps } from "./components/HelloWorldProps";
import { List } from "./components/List";

const name = 'Abel'
function App () {
    return (
        <div className="App">
            <header className="App-header">
                {/*<Button/>*/}
                {/*<HolaMundo/>*/}
                {/*<HolaUser/>*/}
                <List/>
                {/*<UserList/>*/}
                {/*<Counter/>*/}
                {/*<ListProps/>*/}
                {/*<HelloWorldProps name={name} age={25} text={"Ola k ase"}/>*/}
                {/*<HelloWorldProps name="Carlos" age={25} text={"Nanaina"}/>*/}

            </header>
        </div>
    );
}

export default App;
