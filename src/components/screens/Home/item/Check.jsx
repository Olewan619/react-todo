import React from "react";
import {BsCheck} from 'react-icons/bs'


const Check = ({isCompleted}) => {
    return (
        <div className="none">
            {
            isCompleted && <BsCheck className="bscheck"/>  
            }
        </div>
    )
}

export default Check;