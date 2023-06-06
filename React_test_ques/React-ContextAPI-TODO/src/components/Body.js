import React,{useReducer} from 'react';
import './Body.css';
import Today from './Today';
import TodoReducer from '../context/reducer';
import {TodayContext} from '../context/TodayContext';

const Body = () => {
    // pass the initial value of todo as empty array
    // dispatch is a function that will be handled by our reducer
    const [todos,dispatch] = useReducer(TodoReducer,[])

    return (
        <div className="main-body py-5 row container-fluid mx-auto">
            {/*pass down the state and dispatch function so that it can be used
                by other components
            */}
            <TodayContext.Provider value={{todos,dispatch}}>
                <div className="col-md-6 offset-md-3">
                    <Today />
                </div>
            </TodayContext.Provider>
        </div>
    );
};

export default Body;