import React from 'react'
import PaginationCard from './PaginationCard'

const Pagecomponent = ({sharedata}) => {
    console.log('sharedata is -',sharedata);
  return (
    <>
        <h2> Page Component  Here  </h2>
         <div className="main-pagecomponent" style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
             {sharedata.map((item,id) => {
                    return <PaginationCard   key = {id}  cardData = {item}  />
             })}
         </div>
    </>
  )
}

export default Pagecomponent