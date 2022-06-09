import React, { useState } from 'react';
import './Todo.css';
import Item from './components/Item';
import List from './components/List';
import TodoForm from './components/TodoForm';


function Todo() {
    
    const [items, setItems] = useState([]);

    function onAddItem(text){

        let it = new Item(text);

        setItems([...items, it])
    }
    //const [text, setText] = useState("");

    return (<div className="container">
        <h1>Todo</h1>
        <TodoForm onAddItem={onAddItem}/>

        <List itemsPassado={items} />

    </div>)
}

export default Todo