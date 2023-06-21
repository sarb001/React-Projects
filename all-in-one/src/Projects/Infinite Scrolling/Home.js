import React, { useEffect, useState } from 'react'
import MovieComponent from './MovieComponent';

const Home = () => {

   const [card,setcard] = useState([]); 
   const [page,setpage] = useState(1); 

  const getcardData = async() => {
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
     const data = await res.json();
     console.log('data is --',data);

     setcard((prev) => [...prev ,...data]);
  }

   useEffect(() => {
        getcardData();
   },[page])

    const handlescroll = async() => {
        try{

             const scrollheight = document.documentElement.scrollHeight;           
                // provide the whole height of page 
             const scrolltop  = document.documentElement.scrollTop;
                // Provide  how much you Scrolled 
             const innerheight = window.innerHeight;
                // inner width of Page we are viewing 
            if(scrolltop + innerheight + 1 >=  scrollheight){
                    setpage((prev) => prev + 1);
            }

        }catch(err){
            console.log('error is --',err);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handlescroll);
        return () => window.removeEventListener('scroll', handlescroll);
    })

  return (
    <>
           <MovieComponent  movieinfo = {card} />
    </>
  )
}

export default Home