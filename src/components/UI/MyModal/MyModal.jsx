import React from "react";
import cl from "./MyModal.module.css"


const MyModal = ({children, visible, setVisible}) =>{

    const rootClasses = [cl.modal]
    if(visible)
        rootClasses.push(cl.modal_active)
    return (
        <div className={rootClasses.join(" ")}>
            {children}
        </div>
    )
}

export default MyModal;