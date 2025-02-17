import React from "react";
import CardItem from "./CardItem";
import Image from "../../videoAssets/rainforest.jpg";

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these epic destinations!</h1>
            <div className="cards-container">   
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem 
                            src={Image}
                            text="Explore the hidden waterfall deep inside the Amazon jungle"
                            label="Adventure"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
            <div className="cards-container">   
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem 
                            src={Image}
                            text="Explore the hidden waterfall deep inside the Amazon jungle"
                            label="Adventure"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;