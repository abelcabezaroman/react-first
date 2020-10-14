import React from 'react';
import './App.css';
import { HelloWorldProps } from "./components/HelloWorldProps";
import { UserItem } from "./components/UserItem";
import { UserList } from "./components/UserList";
import { UserListSuper } from "./components/UserListSuper";
import List from "./components/List";
import { HelloWorld } from './components/HelloWorld';
import { Customs } from './components/Customs';
import ButtonProps from './components/ButtonProps';
import UserItemSimple from './components/UserItemSimple';
import { Counter } from './components/Counter';
import Button from './components/Button';


function App() {
    const myName = ' Abel';
    return (
        <div className="App">
            <div className="App-header">
                {/* {name} */}
                {/* <HelloWorld/> */}
                {/* <Customs /> */}
                {/* <HelloWorldProps name="Carlos" text="Fistrum"/> */}

                {/* <HelloWorldProps name={myName} age={25} text={"Ola k ase"} /> */}
                {/* <Button/> */}
                {/* <ButtonProps text="Enviar" /> */}
                {/* <ButtonProps text="Cancelar" /> */}
                {/* <UserItemSimple userInfo={{
                    name: 'Abel Cabeza',
                    years: 25,
                    rol: 'Profesor'
                }}/> */}
                {/*<HolaMundo/>*/}
                {/*<HolaUser/>*/}
                {/* <List/> */}
                {/* <UserItem userInfo={{
                    name: 'Abel Cabeza',
                   years: 25,
                   rol: 'Profesor'}} /> */}
                {/*<UserList/>*/}
                {/*<UserListSuper/>*/}
                <Counter/>
                {/*<CounterSuper/>*/}
                {/*<ListProps/>*/}


            </div>
        </div>
    );
}

export default App;
