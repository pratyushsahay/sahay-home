import React from "react";
import '../../App.css';
import { CardItemRoute } from "../CardItem";
import '../Cards.css';

export default function Projects() {
    return (
        <div className="cards">
            <div className="cards__container">
                <h1>Projects</h1>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItemRoute 
                            src="/reddit.jpg"
                            text="reddit-scraper"
                            label="Python"
                            path="/projects/reddit-scraper"
                            link="https://github.com/pratyushsahay/sahay-home"
                        />
                        <CardItemRoute 
                            src="/home.jpg"
                            text="sahay-home OS"
                            label="Rust"
                            path="/projects/sahay-home-os"
                            link=""
                        />
                        <CardItemRoute 
                            src="/firebase_react.png"
                            text="sahay-home React App"
                            label="React"
                            path="/projects/sahay-home"
                            link=""
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}