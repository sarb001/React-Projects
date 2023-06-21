import React from 'react'

const MovieCard = ({mydata}) => {
    const {title,id,body} = mydata;

  return (
        <>
            <div className="card">
                <div className="card-info">
                    <div className="card-id">{id}</div>
                    <p> {body.substr(0,120)} </p>
                    <p> {title.substr(0,15)} </p>
                </div>
            </div>
        </>
  )
}

export default MovieCard