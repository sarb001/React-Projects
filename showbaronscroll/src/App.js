import React, { useEffect, useState } from 'react';
import './Components/App.css';


function App() {

   const [scrollTop,setscrollTop] = useState(0);

   const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      console.log('winScroll -',winScroll);

      const height =  document.documentElement.scrollHeight - document.documentElement.clientHeight;
      console.log(' height -',height);

      const scrolled = (winScroll / height ) * 100;
      console.log('scrolled --',scrolled);
      setscrollTop(scrolled);
   };

   useEffect(() => {
     window.addEventListener("scroll" , onScroll);
     return () => window.removeEventListener("scroll" ,onScroll);
   },[]);

  return (
    <div className="App">
        <div className="main-container">
              <div className="page-content" style = {{width : `${scrollTop}%`}}>
              </div>
        </div>
             <div className="text-content">
                  <h1> Here is the Trainer 1  </h1>
                  <h1> Here is the Trainer 1  </h1>
                  <h1> Here is the Trainer 1  </h1>
                  <h1> Here is the Trainer 1  </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi quod quibusdam 
                nisi dolorem, expedita quasi consectetur, sequi officiis praesentium rerum, in commodi 
                aliquid accusamus ad id molestiae harum sit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi quod quibusdam 
                nisi dolorem, expedita quasi consectetur, sequi officiis praesentium rerum, in commodi 
                aliquid accusamus ad id molestiae harum sit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi quod quibusdam 
                nisi dolorem, expedita quasi consectetur, sequi officiis praesentium rerum, in commodi 
                aliquid accusamus ad id molestiae harum sit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi quod quibusdam 
                nisi dolorem, expedita quasi consectetur, sequi officiis praesentium rerum, in commodi 
                aliquid accusamus ad id molestiae harum sit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi quod quibusdam 
                nisi dolorem, expedita quasi consectetur, sequi officiis praesentium rerum, in commodi 
                aliquid accusamus ad id molestiae harum sit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi quod quibusdam 
                nisi dolorem, expedita quasi consectetur, sequi officiis praesentium rerum, in commodi 
                aliquid accusamus ad id molestiae harum sit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi quod quibusdam 
                nisi dolorem, expedita quasi consectetur, sequi officiis praesentium rerum, in commodi 
                aliquid accusamus ad id molestiae harum sit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi quod quibusdam 
                nisi dolorem, expedita quasi consectetur, sequi officiis praesentium rerum, in commodi 
                aliquid accusamus ad id molestiae harum sit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi quod quibusdam 
                nisi dolorem, expedita quasi consectetur, sequi officiis praesentium rerum, in commodi 
                aliquid accusamus ad id molestiae harum sit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi quod quibusdam 
                nisi dolorem, expedita quasi consectetur, sequi officiis praesentium rerum, in commodi 
                aliquid accusamus ad id molestiae harum sit?
              </p>
              <h1> Here is the Trainer 2  </h1>
              <h1> Here is the Trainer 2  </h1>
              <h1> Here is the Trainer 2  </h1>
              <h1> Here is the Trainer 2  </h1>
              <h1> Here is the Trainer 2  </h1>
              <h1> Here is the Trainer 2  </h1>
              <h1> Here is the Trainer 2  </h1>
              <h1> Here is the Trainer 2  </h1>
              <h1> Here is the Trainer 2  </h1>
              <h1> Here is the Trainer 2  </h1>
              <h1> Here is the Trainer 2  </h1>
              <h1> Here is the Trainer 2  </h1>
              <h1> Here is the Trainer 2  </h1>
              <h1> Here is the Trainer 2  </h1>
            </div>
       
    </div>
      
  );
}

export default App;
