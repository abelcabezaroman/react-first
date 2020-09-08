import React from 'react';
import './App.css';
import Button from "./components/Button";
import { Counter } from "./components/Counter";
import { HelloWorldProps } from "./components/HelloWorldProps";
import List  from "./components/List";
import { UserList } from "./components/UserList";
import { HolaMundo } from "./components/HolaMundo";

const name = 'Abel'
function App () {
    return (
        <div className="App">
            <div className="App-header">
                {/*<Button/>*/}
                {/*<HolaMundo/>*/}
                {/*<HolaUser/>*/}
                {/*<List/>*/}
                {/*<UserList/>*/}
                <Counter/>
                {/*<ListProps/>*/}
                <HelloWorldProps name={name} age={25} text={"Ola k ase"}/>
                {/*<HelloWorldProps name="Carlos" text={"Nanaina"}/>*/}

            </div>
        </div>
    );
}

export default App;
