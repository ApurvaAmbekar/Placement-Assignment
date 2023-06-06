import React, {useState} from 'react';
import Counter from './Counter';
import './App.css';
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="">
        <Counter count={count} setCount={setCount}/>
      </div>
      
    </div>
  );
};

export default App;