import React from "react";


const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className="button button_style bottom_color">
            {children}
        </button>
    )
};

export default MyButton;