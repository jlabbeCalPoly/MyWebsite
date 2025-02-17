import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css"

function CardItems(props) {
    return (
        <>
            <li className="cards-item">
                <Link className="cards-item-link" to={props.path}>
                    <figure className="cards-item-picture-wrap" data-category={props.label}> 
                        <img src={props.src} className="cards-item-img"/>
                    </figure>
                    <div className="cards-item-info">
                        <h5 className="cards-item-text">
                            {props.text}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItems;
