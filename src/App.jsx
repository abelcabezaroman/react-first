import React from 'react';
import './App.css';
import { Counter } from "./components/Counter";
import { UserList } from "./components/UserList";

function App () {
    return (
        <div className="App">
            <header className="App-header">
                <UserList/>
                {/*<Counter/>*/}
                {/*<List/>*/}
                {/*<HolaMundo text={"ASDASDASDASD Mundo"}/>*/}

            </header>
        </div>
    );
}

export default App;
