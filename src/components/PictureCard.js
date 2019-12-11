import React from "react";

const PictureCard = props => {
    console.log("Props:", props)
    return <div key={props.index}>
                <h3>{props.title}</h3>
                <img src={props.url}/>
                <div>Photo taken at: {props.date}</div>
                <h3>Description</h3>
                <p>{props.explanation}</p>
            </div>
    
}

export default PictureCard;