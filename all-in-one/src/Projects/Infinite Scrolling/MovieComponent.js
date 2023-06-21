import React from 'react'
import MovieCard from './MovieCard'
import './MovieComponent.css';

const MovieComponent = ({movieinfo}) => {
  return (
     <>
        <div className="wrapper">
             <div className="container">
                  <h1>  List of cards </h1>
                  <div className="grid-column">
                     {movieinfo.map((item,id) => {
                        return <MovieCard   key = {id}  mydata = {item} />
                     })}
                  </div>
             </div>
        </div>
     </>
  )
}

export default MovieComponent