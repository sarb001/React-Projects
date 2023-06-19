import React from 'react'
import '../styles/Square.css';

const Square = (props) => {
  return (
    <>
       <div className="square-box"  onClick={props.onClick} >
          {props.value}
       </div>
    </>
  )
}

export default Square