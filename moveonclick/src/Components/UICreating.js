import React, {useState} from 'react'
import '../styles/UICreating.css';
import Contentpart1 from './Contentpart1';
import Contentpart2 from './Contentpart2';

const UICreating = () => {

     const [isactive,setisactive] = useState(1);

    const showbottomdata  = () => {
        switch(isactive){
            case 1 :
                return <Contentpart1 />
            case 2 :
                return <Contentpart2 />
             default : 
                return  <Contentpart1 />
        }
    }

    const isactivetab = (num) => {
         if(isactive === num){
            return "tab-active";
         }
    }

  return (
        <>
          <div className = "ui-container">
                <div className={`oneside ${isactivetab(1)}`}  onClick={() => setisactive(1)}>
                    X-0
                </div>
                <div className={`oneside ${isactivetab(2)}`}  onClick={() => setisactive(2)}>
                    Y-0
                </div>
                <div className="att-bottom">
                    <div> {showbottomdata()} </div>
                </div>
          </div>
        </>
  )
}

export default UICreating