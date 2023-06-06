import React, {useState, useEffect} from 'react';
import Icon from './components/Icon';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const itemArray = new Array(9).fill('empty');

const App = () => {

  const [isCross,setIsCross] = useState(null)
  const [winMessage, setWinMessage] = useState('')
  const [circle,setCircle] = useState(0)
  const [cross, setCross] = useState(0)

  

  const ResetGame = () => {    
    setIsCross(null)
    setWinMessage('')
    itemArray.fill('empty',0,9)
  }

  const changeItem = itemNumber => {
    if (winMessage) {
      toast.warning('PLEASE RESET', {
        position: "top-right"
      })
      return
    }
    if (itemArray[itemNumber] === 'empty' && !isCross) {
      itemArray[itemNumber] = isCross ? 'cross' : 'circle'; 
      setIsCross(!isCross);
      checkWinner();
    } 
    else {
      toast.error('ALREADY SET', {
        position: "top-right"
      })
    }
    
  }

  useEffect(() => {
    const EmptyArr = []
    let itemNumber=0;
    if (isCross && !winMessage) {
      itemArray.forEach((item,index) => {
        if (item === 'empty') {
          EmptyArr.push(index);
        }
      })
      console.log(EmptyArr);
      itemNumber = EmptyArr[Math.floor(Math.random() * (EmptyArr.length - 0))];
      console.log(itemNumber);
      itemArray[itemNumber] = isCross ? 'cross' : 'circle'; 
      setIsCross(!isCross);
      checkWinner();
    }
  },[isCross]);

  // writing the wining logic
  const checkWinner = () => {
    // tracking winner
    let winner = 'empty';

    // winning logic row wise
    if (itemArray[0] !== 'empty' && 
      itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2]) {

        // setWinMessage(`${itemArray[0]} won`)
        winner = itemArray[0]
    
    }
    else if (itemArray[3] !== 'empty' && 
      itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5]) {
    
        // setWinMessage(`${itemArray[3]} won`)
        winner = itemArray[3]
    
    }
    else if (itemArray[6] !== 'empty' && 
      itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8]) {
  
        // setWinMessage(`${itemArray[6]} won`)
        winner = itemArray[6]
  
    }

    // winning logic column wise
    else if (itemArray[0] !== 'empty' && 
      itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6]) {
    
        // setWinMessage(`${itemArray[0]} won`)
        winner = itemArray[0]

    }
    else if (itemArray[1] !== 'empty' &&
      itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7]) {
        
        // setWinMessage(`${itemArray[1]} won`)
        winner = itemArray[1]

    }
    else if (itemArray[2] !== 'empty' && 
      itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8]) {

        // setWinMessage(`${itemArray[2]} won`)
        winner = itemArray[2]

    }

    // winning logic diagonally
    else if (itemArray[0] !== 'empty' && 
      itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8]) {

        // setWinMessage(`${itemArray[0]} won`)
        winner = itemArray[0]

    }
    else if (itemArray[2] !== 'empty' && 
      itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6]) {

        // setWinMessage(`${itemArray[2]} won`)
        winner = itemArray[2]

    } 

    // this is done for tracking the number of times circle or cross won
    if (winner !== 'empty') {
      winner === 'circle' ? setCircle(circle + 1) : setCross(cross + 1)
      winner === 'circle' ? setWinMessage("YOU WON") : setWinMessage("COMPUTER WON")
      return
    }

    
    // checking for tie
    if (winMessage === ""){
      let empty = 0
      itemArray.forEach(item => {
        if (item !== 'empty') {
          empty++;
        }
      })

      if (empty === 9) {
        setWinMessage("GAME TIE");
      }
    }
    

  }
  

  return (
    <React.Fragment>
          
          <div className="App pt-5">       
            <ToastContainer />     
            <div className="grid-container">
              <div className="grid-heading">
                {winMessage? (
                  <h1 className="text-warning text-center text-uppercase">
                    {winMessage}
                  </h1>
                ) : (
                  <h1 className="text-light text-center">
                    {isCross? <Icon name="cross" className="icon" /> : <Icon name="circle" /> }'s turn
                  </h1>
                )}
                
              </div>
              {itemArray.map((item,index) => (
                <div className="grid-items" onClick={() => changeItem(index)} key={index}>
                  <Icon name={item} />
                </div>
              ))}
              <div className="grid-footer">
                <button 
                className="btn btn-outline-warning d-block my-5 px-5 py-2 mx-auto"
                onClick={ResetGame}
                >RESET</button>
              </div>
            </div>    
            
          </div>
          <div className="text-center pb-5 container results">
              <p className="text-center text-light">Results</p>
              <p className="text-danger">YOU ( <Icon name="circle" className="icon" /> ) have won {circle} times</p>
              <p className="text-warning">COMPUTER ( <Icon name="cross" className="icon" /> ) have won {cross} times</p>
          </div>
    </React.Fragment>
  );
};

export default App;