import * as React from 'react'

import "./MyBigBang.css"

export interface MyButtonProps {
    isEnable: boolean,
    varient: string,
    title: string,
    color: string,
    onClick: ()=>void
}



export  const MyButton: React.FC<MyButtonProps> =({ 
    isEnable = false,
     varient = "primary", 
     title = "MyButton" ,
     color,
     onClick=()=>{
         alert(1)
     },
     ...props
    }) => {
        const mode = isEnable ? 'enable' : 'disable';
        return(
        <button  
        className={`my-button ${varient} ${mode}`} 
        onClick= {onClick}
        style={{color}}
       > 
            {title}
        </button>
        );
    };


