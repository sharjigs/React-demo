import React from 'react';

import '../UserInput/UserInput.css';

const userInput = (props) => {
    return(
<div >
     <input type="text"  className="Usinput" 
                onChange={props.changed} 
                value={props.currentName}/>
                </div>
    )
    
}

export default userInput