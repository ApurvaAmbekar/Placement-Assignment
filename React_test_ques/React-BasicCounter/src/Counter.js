import React from 'react';

const Counter = ({count,setCount}) => {
    return (
    <React.Fragment>
        <div className="display-count">
            <div className="count">
                <p className="">
                    {count}
                </p>
            </div>
            
        </div>
        <div className="display-btn">
            <button onClick={() => setCount(count + 1)}>INCREMENT</button>
            <button onClick={() => setCount(0)}>RESET</button>
            <button onClick={() => setCount(count - 1)}>DECREMENT</button>
        </div>
    </React.Fragment>
    );
};

export default Counter;