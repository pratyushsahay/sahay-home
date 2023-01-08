import React from "react";
import './Button.css';
import { Link } from 'react-router-dom';

interface ButtonProps {
    readonly children?: any;
    readonly type?: any;
    readonly onClick?: any;
    readonly buttonStyle?: any;
    readonly buttonSize?: any;
    readonly className?: string;
}

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export function Button(props: ButtonProps) {
    const checkButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];
    
    return (
        <Link to='/sign-up' className="btn-mobile">
            <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
                onClick={props.onClick} 
                type={props.type}
            >
                {props.children}
            </button>
        </Link>
    )
}