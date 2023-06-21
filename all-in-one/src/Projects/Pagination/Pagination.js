import React, { useEffect, useState } from 'react'
import Pagecomponent from './Pagecomponent';
import Paginationshow from './Paginationshow';

const Pagination = () => {

     const[cardData,setcardData]= useState([]);
     const[currentpage,setcurrentpage]= useState(1);
     const[postsperpage,setpostsperpage]= useState(4);

     const fetchdallata  = async() => {
            const res = await fetch('https://fakestoreapi.com/products');
            const result  = await res.json();
            console.log('result DATA  is --',result);
            setcardData(result);
     }

     useEffect(( ) => {
        fetchdallata();
     },[])

      const lastindex = currentpage *   postsperpage;       // 1 * 4 = 4 
      const firstpostindex =  lastindex - postsperpage;     // 4 - 4 = 1

     const currentposts = cardData.slice(firstpostindex,lastindex);

  return (
    <>      
         <div className="main-container">
             <div className="main-part" >
                 <Pagecomponent    sharedata = {currentposts} />

                 <Paginationshow   
                    totalposts = {cardData.length}  
                    postperpage = {postsperpage}
                    setcurrentpage = {setcurrentpage}
                 />
             </div>
         </div>
    </>
  )
}

export default Pagination