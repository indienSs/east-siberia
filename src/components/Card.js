import React from "react";

const Card = (props) => (
    <div className="card">
        <img src={props.img} alt="" className="photo" />
        <div className="info">
            <div className="location">
                <img src="/images/place.png" alt="" className="placeholder" />
                <p>{props.region}</p> 
                <a href={props.location} target="_blank" className="link">View on Google Maps</a>
            </div>
            <div className="description">
                <h1 className="name-location">{props.name}</h1>
                <p className="bold">{props.period}</p>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
)

export default Card;