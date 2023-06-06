import React,{useContext} from 'react';
import {TodayContext} from '../context/TodayContext';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {TODO_DELETE,TODO_COMPLETE} from '../context/action.types'
import FlipMove from 'react-flip-move';

const Todos = () => {
    const {todos,dispatch} = useContext(TodayContext)

    const MarkCompleted = id => {
        dispatch({
            type: TODO_COMPLETE,
            payload: {
                id: id
            }
        })
    }

    const DeleteTodo = id => {
        dispatch({
            type: TODO_DELETE,
            payload: {
                id: id
            }
        })
    }

    return (
        <div className="todos">
            
            <ul className="list-group mx-1">
                <FlipMove easing="ease-in-out" duration={300}>    
                    {todos.map(todo => (
                        <li 
                        className={todo.isComplete? "list-group-items disabled my-2": "list-group-items my-2"} 
                        key={todo.id}>
                            <span>
                                <input type="checkbox"
                                checked={todo.isComplete} 
                                onChange={() => MarkCompleted(todo.id)}
                                className="mr-4"/>
                                <span>{todo.todoString}</span>
                            </span>
                            {todo.isComplete? "": (<span
                            onClick={() => DeleteTodo(todo.id)}
                            ><RiDeleteBin6Line className="float-right my-1"/></span>)}
                        </li>
                    ))}
                </FlipMove>
            </ul>
            
        </div>
    );
};

export default Todos;