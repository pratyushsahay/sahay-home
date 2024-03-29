import React from "react";
import './Button.css';

interface ButtonProps {
    readonly children?: any;
    readonly type?: any;
    readonly onClick?: any;
    readonly buttonStyle?: any;
    readonly buttonSize?: any;
}

export class Button extends React.Component<ButtonProps & React.HTMLAttributes<HTMLDivElement>, {}> {

    render(): React.ReactNode {
        const STYLES = ['btn--primary', 'btn--outline'];
        const SIZES = ['btn--medium', 'btn--large'];

        const checkButtonStyle = STYLES.includes(this.props.buttonStyle) ? this.props.buttonStyle : STYLES[0];
        const checkButtonSize = SIZES.includes(this.props.buttonSize) ? this.props.buttonSize : SIZES[0];

        return (
            <a className={this.props.className} href={this.props.onClick} target='_blank' rel="noreferrer">
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
                    {this.props.children}
                </button>
            </a>
        )   
    }
}

export default Button;