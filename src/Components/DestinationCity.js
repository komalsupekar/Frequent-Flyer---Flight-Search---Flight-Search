import React, { useState } from 'react';
import City from "./City"


const DestinationCity = (props) => {
    const [data, setData] = [props];
    const [destinationPlaces, setDPlaces] = useState([])
    const handleChange = (e)=>{
        // e.target.value
        props.setData({...data, [e.target.name]:e.target.value});
    }

    async function fetchDestinationPlaces(e) {
        const request = require('request');
        const options = {
            method: 'GET',
            url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/IN/INR/en-IN/',
            qs: { query: data.destinationCity },
            headers: {
                'x-rapidapi-key': '976cd8cb00msh0028629c1e15e47p1e50d5jsnd116d979d352',
                'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                useQueryString: true
            }
        };

        await request(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            setDPlaces(JSON.parse(body).Places);
        });
    }

    return (
        <div>
            <label for="destination">Origin City</label>
            <input id="de" type="text" value={data.originCity} name="originCity" onChange={handleChange}></input>
            <button onClick={fetchDestinationPlaces}>Search</button>
            <City places={destinationPlaces}/>
        </div>
    );
};

export default DestinationCity;