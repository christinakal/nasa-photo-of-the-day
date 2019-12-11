import React from "react";

const PictureCard = props => {
    console.log("Props:", props)
    return <div key={props.index}>
                This is PictureCard.js
                <h2>{props.title}</h2>
                <img src={props.url}/>
                <h3>Description</h3>
                <p>{props.explanation}</p>
            </div>
    
}

export default PictureCard;