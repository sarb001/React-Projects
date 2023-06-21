import React from 'react'

const Paginationshow = ({totalposts,postperpage,setcurrentpage}) => {

    let pages  = [];
    //  20/4 = 5
     //  for calculating page length 
    for(let i = 1 ;i <= Math.ceil(totalposts / postperpage) ; i++ ){
        pages.push(i);
    }

  return (
    <>
        <div className="pagination" style = {{cursor:'pointer'}}>
            {pages.map((page,index) => {
                return <button key = {index} onClick={() => setcurrentpage(page)} > {page} </button>
            })}
        </div>
    </>
  )
}

export default Paginationshow