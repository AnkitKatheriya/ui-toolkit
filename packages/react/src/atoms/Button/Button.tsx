import React from "react";

interface ButtonProps {
    label: string
}

const Button : React.FC<ButtonProps> = ({ label }) => {
    return <input type="button" className="ui-toolkit-button-container" value={label} />
}

export default Button