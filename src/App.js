import React from 'react';
import './App.css';
import TodoList from "./component/TodoList";
import Context from "./context";
import AddTodo from "./component/AddTodo";


const App = () => {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'купить мать'},
        {id: 2, completed: true, title: 'купить проц'},
        {id: 3, completed: false, title: 'купить видюху'},
    ]);


    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        }));
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const addTodo = (title) => {
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    completed: false
                }
            ])
        );
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className='wrapper'>
                <h1>React todo</h1>
                <AddTodo onCreate={addTodo}/>

                {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo}/>)
                    : <p>No homo</p>
                }

            </div>
        </Context.Provider>
    )
}

export default App;
