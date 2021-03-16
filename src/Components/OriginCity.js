import React, { useEffect, useState } from 'react';
import City from "./City"

const OriginCity = (props) => {
    // const [data, setData] = props;
    const [originPlaces, setOPlaces] = useState([])
    const [origin, setorigin] = useState("")

    const handleChange = (e)=>{
        // e.target.value
        setorigin(e.target.value);
        console.log(origin)
        
    }
    const fetchOriginPlaces=(e)=>{
        const request = require('request');
        const options = {
        method: 'GET',
        url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/IN/INR/en-IN/',
        qs:     {query: origin},
        headers: {
            'x-rapidapi-key': '976cd8cb00msh0028629c1e15e47p1e50d5jsnd116d979d352',
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
            useQueryString: true
        }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            setOPlaces(JSON.parse(body).Places)
        });
    }

    useEffect(
        ()=>{
            console.log("data"+originPlaces);
        }
        
    )
    return (
        <div>
            <label for="origin">Origin City</label>
            <input id="origin" type="text" value={origin} name="originCity" onChange={handleChange}></input>
            <button onClick={fetchOriginPlaces}>Search</button>
            <City places={originPlaces}/>
        </div>
    );
};

export default OriginCity;