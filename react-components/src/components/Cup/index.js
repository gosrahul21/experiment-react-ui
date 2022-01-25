import React from 'react';
import './cup.css';



function index() {
    function getCssVar(val){
        return  {'--i':val };
    }
    
  return <div className='cup'>
            <div className="container">
                
               

                <div className="container__cup">
                    <div className="top">
                        <div className="vapour">
                            <span style={getCssVar(1)}></span>
                            <span style={getCssVar(13)}></span>
                            <span style={getCssVar(5)}></span>
                            <span style={getCssVar(12)}></span>
                            <span style={getCssVar(3)}></span>
                            <span style={getCssVar(14)}></span>
                            <span style={getCssVar(4)}></span>
                            <span style={getCssVar(12)}></span>
                            <span style={getCssVar(8)}></span>
                            <span style={getCssVar(14)}></span>
                            <span style={getCssVar(7)}></span>
                            <span style={getCssVar(18)}></span>
                            <span style={getCssVar(9)}></span>
                            <span style={getCssVar(2)}></span>
                            <span style={getCssVar(16)}></span>
                            <span style={getCssVar(18)}></span>
                        </div>
                        <div className="circle">
                            <div className="tea">

                            </div>
                        </div>
                    </div>
                    <div className="handle"/>
                </div>

               
                <div className="plate"></div>

                
            </div>
      
      </div>;
}

export default index;
