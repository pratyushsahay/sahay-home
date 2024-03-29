import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Things I Read Recently</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="machine-learning.png"
                            text="Continuous Delivery for Machine Learning"
                            label="Machine Learning"
                            path="https://martinfowler.com/articles/cd4ml.html"
                            link=""
                        />
                        <CardItem 
                            src="distributed.jpg"
                            text="Message-Oriented Middleware"
                            label="Distributed Computing"
                            path="https://docs.oracle.com/cd/E19340-01/820-6424/aeraq/index.html"
                            link=""
                        />
                        <CardItem 
                            src="twitter.jpg"
                            text="One Machine Twitter"
                            label="System Design"
                            path="https://thume.ca/2023/01/02/one-machine-twitter/"
                            link=""
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;