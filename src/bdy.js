import React from 'react';
import './bdy.css';
function Bdy() {
    return (
      <div className="fbd">
    
       {
          <form className="formmargin"> 
                    <label>
                        First Name:<input type="text"></input>
                    </label><br/><br/><br/>
                    <label>
                        Last  Name:<input type="text"></input>
                    </label><br/><br/><br/>
                    <label>
                        Mobile :<input type="text"></input>
                    </label><br/><br/><br/>
                    <label>
                        Email:<input type="text"></input>
                    </label><br/><br/>
<input type="submit"></input>

          </form>

          }
  
        
      </div>
  
  
    );
  }
  
  export default Bdy;
  