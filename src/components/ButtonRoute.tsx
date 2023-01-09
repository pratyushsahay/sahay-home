import React from "react";
import './Button.css';
import { Link } from 'react-router-dom';

interface ButtonProps {
    readonly children?: any;
    readonly type?: any;
    readonly onClick?: any;
    readonly buttonStyle?: any;
    readonly buttonSize?: any;
}

class ButtonRoute extends React.Component<ButtonProps & React.HTMLAttributes<HTMLDivElement>, {}> {

    render(): React.ReactNode {
        const STYLES = ['btn--primary', 'btn--outline'];
        const SIZES = ['btn--medium', 'btn--large'];

        const checkButtonStyle = STYLES.includes(this.props.buttonStyle) ? this.props.buttonStyle : STYLES[0];
        const checkButtonSize = SIZES.includes(this.props.buttonSize) ? this.props.buttonSize : SIZES[0];

        return (
            <Link to='/login' className={this.props.className}>
                <button 
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                >
                    {this.props.children}
                </button>
            </Link>
        )   
    }
}

export default ButtonRoute;