import React from 'react';

const userOutput = (props) => {

    const style = {
        backgroundColor: "green",
        fontSize: "40px"
    }
    return (
        <div>
            <p style={style}>Username is {props.userName}</p>
            <p>Welcome to our Website {props.stateuser}</p>
        </div>
    )
}

export default userOutput