import React from "react";
import { Link } from 'react-router-dom';

interface CollapseContentProps {
    readonly github: string;
    readonly path: string;
}

class CollapsedContent extends React.Component<CollapseContentProps, React.HTMLAttributes<HTMLDivElement>, {}> {
    render(): React.ReactNode {
        return (
            <>
                <li>
                    <a href={this.props.github} target='_blank' rel='noreferrer'>Source Code</a>
                </li>
                <li>
                    <Link to={this.props.path}>
                        App
                    </Link>
                </li>
            </>
        )
    }
}

export default CollapsedContent;