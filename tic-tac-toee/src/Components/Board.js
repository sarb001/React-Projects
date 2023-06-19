import React, { useState } from 'react';
import Square from './Square';

import '../styles/Board.css';

export const Board = () => {
    const [state,setstate] = useState(Array(9).fill(null));
    const [isXTurn,setisXTurn] = useState(true);

    console.log('state is -',state);

    const checkWinner = () => {
    const winnerLogic = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],
        [1,4,7],[2,5,8],[0,4,8],[2,4,6],
    ];
    
    for(let logic of winnerLogic){
        const [a,b,c] = logic;
        if(state[a]  !== null &&  state[a] === state[b] && state[a] === state[c]){
                return state[a];            // return the guy who won 
        }
    }
    return false;   
};

    const isWinner = checkWinner();

    const handleclick = (index) => {
         if(state[index] !== null) {            // if state-with-specific-index is not null then means some x or 0 is placed there so move on , dont put anything there 
            return ;
         }
         const copystate = [...state];          // create a copy of state ;
         copystate[index] = isXTurn ? "X" : "0";            // at place index byDefault  true SO first X renders 
         setstate(copystate);           // set as state in their 
         setisXTurn(!isXTurn);          // now make it false or now 0 willbe written 
    }

     const handlereset = () => {
         setstate(Array(9).fill(null));
     }

  return (
    <>
      <div className = "board-container">
        {isWinner ? (
        <> 
          <h3> {isWinner} Won the Game  </h3> 
           <button onClick={handlereset}> Restart Again </button>
        </>) : (<>
                 <h2> Player  {isXTurn ? "X" : "0"} Your Turn  </h2>
                <div className = "board-row">
                    <Square   onClick = {() => handleclick(0)}  value  = {state[0]}  />
                    <Square   onClick = {() => handleclick(1)}  value  = {state[1]}  />
                    <Square   onClick = {() => handleclick(2)}  value  = {state[2]}  />
                </div>
                <div className = "board-row">
                    <Square  onClick = {() => handleclick(3)}  value  = {state[3]} />
                    <Square  onClick = {() => handleclick(4)}  value  = {state[4]} />
                    <Square  onClick = {() => handleclick(5)}  value  = {state[5]} />
                </div>
                <div className = "board-row">
                    <Square onClick = {() => handleclick(6)}  value  = {state[6]} />
                    <Square onClick = {() => handleclick(7)}  value  = {state[7]} />
                    <Square onClick = {() => handleclick(8)}  value  = {state[8]} />
                </div>
            </>)
        }
      </div>
    </>
  )
}
