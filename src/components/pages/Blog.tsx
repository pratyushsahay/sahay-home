import React from "react";
import '../../App.css'
import { CardItemRoute } from "../CardItem";
import '../Cards.css'

export default function Blog() {
    return (
        <div className="cards">
            <div className="cards__container">
                <h1>Blog Posts</h1>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItemRoute 
                            src="/firebase.png"
                            text="Hosting a Website With Firebase"
                            label="Firebase"
                            path="/blog/firebase"
                            link=""
                        />
                        <CardItemRoute 
                            src="/typescript_react.jpg"
                            text="Building A React App With Typescript"
                            label="Typescript"
                            path="/blog/react-typescript"
                            link=""
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}