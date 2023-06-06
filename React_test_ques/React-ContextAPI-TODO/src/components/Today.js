import React,{useState,useContext} from 'react';
import TextField from '@material-ui/core/TextField'
import {IoIosAddCircle} from 'react-icons/io';
import './Body.css'
import { TodayContext } from '../context/TodayContext';
import {TODO_ADD} from '../context/action.types';
import {v4} from 'uuid'
import Todos from './Todos';


const Today = () => {
    const [todoString, setTodoString] = useState('');
    const {dispatch} = useContext(TodayContext)

    const formHandling = e => {
        e.preventDefault();
        if(todoString === "") {
            return
        }

        const todo = {
            id: v4(),
            todoString: todoString,
            isComplete: false  //isComplete is false by default
        }

        // send this to reducer to manage the overall context
        dispatch({
            type: TODO_ADD,
            payload: todo
        })

        // after dispatching, set input field empty
        setTodoString('');

    }

    return (
        <div className="">
            <div className="">
                <h3 className="text-center">TODAY</h3>
                <form autoComplete="off" className="mt-4" onSubmit={formHandling}>
                    <div className="form-row mx-auto">
                        <div className="form-group col-md-11 col-11">
                            <TextField
                            variant="outlined"
                            label="Enter new todo"
                            className="form-control"
                            value={todoString}
                            onChange={e=> setTodoString(e.target.value)}
                            />
                            
                        </div>
                        
                        <div className="form-group col-1">
                            <button className="py-1" type="submit" style={{backgroundColor: 'transparent',border: 'none'}}>
                                <IoIosAddCircle  className="icon"/>
                            </button>    
                        </div>
                    </div>
                    
                </form>
            </div>
            <div className="">
                <Todos />
            </div>
        </div>
    );
};

export default Today;