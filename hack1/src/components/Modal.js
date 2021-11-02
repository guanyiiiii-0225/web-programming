/****************************************************************************
  FileName      [ Modal.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu, Chin-Yi Cheng ]
  Synopsis      [ This file generates the Modal component. ]
  Copyright     [ 2021 10 ]
****************************************************************************/

import React, { useEffect, useState } from "react";
import './css/Modal.css'

export default function Modal({restartGame, backToHome, win}){
    const [render, setRender] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, 1000);
    }, []);

    let content = "";
    const contentHelper = ()=>{
        if(win){
            content = "WIN";
        }
        else{
            content = "Game Over";
        }
    }

    return (
        /* -- TODO 5-1 -- */
        /* Useful Hint: style = {{opacity: 1 or 0 }} */
        <>
            <div className = "modalWrapper"/>
            <div className = "modalContent">
                <div className = "modalResult">{content}</div>
                <div className = "modalBtnWrapper"/>
                    {win?
                    
<div className = "modalContent">
                        <div className = "modalBtn">New Game</div>
                        <div className = "modalBtn">Back to Home</div>
                        </div>
                        :
                        <div className = "modalContent">
                        <div className = "modalBtn">Try Again</div>
                        <div className = "modalBtn">Back to Home</div>
                        </div>

                    }
                <div className = "modalBtnWrapper"/>
            </div>

        </>
        
    );
}