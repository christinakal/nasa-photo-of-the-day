import React, {useState, useEffect} from "react";
import axios from "axios";
import PictureCard from "./PictureCard";


function Picture(){

    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(res => {
                console.log(res.data)
                // setNasaData(res.data);
            })
            .catch(err => console.log(err))
        }, []);

    return (
        <div className="picture">
            {nasaData.map((data,index) => (
                <PictureCard 
                    key={index}
                    date={data.date}
                    explanation={data.explanation}
                    title={data.title}
                    url={data.url}
                />
            ))} 
        </div>
    );
    
    
}

export default Picture;
