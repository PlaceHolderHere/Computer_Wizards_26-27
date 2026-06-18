import React from "react";
import './Button.css';

interface ButtonProps {
    text: string
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
    return <button className="button"><p>{text}</p></button>
}