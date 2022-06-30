import React from "react";
import {BsCheck} from 'react-icons/bs';
import cn from 'classnames';


const Check = ({isCompleted}) => {
    return (
        <div className={cn(
            'none', {
            'none1': isCompleted,
        }
        )}
        >
            {
            isCompleted && <BsCheck className="bscheck"/>  
            }
        </div>
    )
}

export default Check;