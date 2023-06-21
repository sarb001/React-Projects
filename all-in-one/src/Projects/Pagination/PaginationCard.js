import React from 'react'

const PaginationCard = ({cardData}) => {
  return (
    <>
        <div className="pagination-card" style = {{margin:'15px',backgroundColor:'lightgreen'}}>
             <div className="id"> <b> {cardData.id} </b> </div>
             <div className="category">  <h2> {cardData.category} </h2> </div>
             <div className="description">{cardData.description}</div>
             <div className="image" style = {{textAlign:'center'}}>
                <img src = {cardData.image} alt='main-image'   style = {{width:'30%'}}  />
            </div>
             <div className="price"> Rs.- {cardData.price}</div>
        </div>
    </>
  )
}

export default PaginationCard