import React from "react";
import './Cards.css'

interface CardItemProps {
    readonly path: string;
    readonly text: string;
    readonly src: string;
    readonly label: string;
}

class CardItem extends React.Component<CardItemProps & React.HTMLAttributes<HTMLDivElement>, {}> {
    render(): React.ReactNode {
        return (
            <>
                <li className="cards__item">
                    <a href={this.props.path} className="cards__item__link" target="_blank" rel="noreferrer">
                        <figure className="cards__item__pic-wrap" datatype={this.props.label}>
                            <img className="cards__item__img" src={this.props.src} alt="Adventure"></img>
                        </figure>
                        <div className="cards__item__info">
                            <h5 className="cards__item__text"> {this.props.text} </h5>
    
                        </div>
                    </a>
                </li>
            </>
        )
    }
}

export class CardItemRoute extends React.Component<CardItemProps & React.HTMLAttributes<HTMLDivElement>, {}> {
    render(): React.ReactNode {
        return (
            <>
                <li className="cards__item">
                    <a href={this.props.path} className="cards__item__link">
                        <figure className="cards__item__pic-wrap" datatype={this.props.label}>
                            <img className="cards__item__img" src={this.props.src} alt="Adventure"></img>
                        </figure>
                        <div className="cards__item__info">
                            <h5 className="cards__item__text"> {this.props.text} </h5>
    
                        </div>
                    </a>
                </li>
            </>
        )
    }
}

export default CardItem;