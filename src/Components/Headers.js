import React, { useEffect, useState } from 'react';
import City from "./City"
import OriginCity from "./OriginCity"
import DestinationCity from "./DestinationCity"
import Quote from "./Quote"
import CheapestDate from "./CheapestDate"

function Headers(props) {
    
    const [data, setData] = useState({});
    const [originPlaces, setOPlaces] = useState([]);
    const [destinationPlaces, setDPlaces] = useState([]);
    const [quote, setQuote] = useState({});

    const handleChange = (e) => {
        // e.target.value
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const fetchQuotes = () => {
        const request = require('request');

        const options = {
            method: 'GET',
            url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IN/INR/en-IN/${data.originCity}/${data.destinationCity}/2021-03-15`,
            qs: { inboundpartialdate: '2021-03-15' },
            headers: {
                'x-rapidapi-key': '976cd8cb00msh0028629c1e15e47p1e50d5jsnd116d979d352',
                'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                useQueryString: true
            }
        };

        request(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            // console.log(body);
            setQuote(JSON.parse(body));
        });
    };

    const fetchOriginPlaces = (e) => {
        const request = require('request');
        const queryS = e.target.value;
        const options = {
            method: 'GET',
            url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/IN/INR/en-IN/',
            // qs: { query: data.originCity },
            qs: { query: queryS },

            headers: {
                'x-rapidapi-key': '976cd8cb00msh0028629c1e15e47p1e50d5jsnd116d979d352',
                'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                useQueryString: true
            }
        };

        request(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            setOPlaces(JSON.parse(body).Places);
        });
    };

    const fetchDestinationPlaces = (e) => {
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

        request(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            setDPlaces(JSON.parse(body).Places);
        });
    };

    const fetchDates = () => {
    };

    useEffect(
        () => {
            // console.log(places);
            console.log(quote);
        }

    );
    return (
        <>
            {/* <OriginCity data={data} setData={setData}/> */}
            <label for="origin">Origin City</label>
            <input id="origin" type="text" value={data.originCity} name="originCity" onChange={handleChange}></input>
            <button value={data.originCity} onClick={fetchOriginPlaces}>Search</button>
            <City places={originPlaces} />  
            {/* <DestinationCity data={data} setData={setData}/> */}
            <label for="destination">Destination City</label>
            <input id="destination" type="text" value={data.destinationCity} name="destinationCity" onChange={handleChange}></input>
            <button value={data.destinationCity} onClick={fetchOriginPlaces}>Search</button>
            <City places={destinationPlaces} />
            <Quote origin={data.originCity} destination={data.destinationCity} />
            <CheapestDate origin={data.originCity} destination={data.destinationCity} />
            {/* <button onClick={fetchQuotes}>Get Quotes</button> */}
        </>
    );
}

export default Headers;