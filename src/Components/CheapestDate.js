import React, { PropTypes, useEffect, useState } from 'react';
import RenderCheapestDate from "./RenderCheapestDate"

const CheapestDate = (props) => {
    const [CheapestDate, setCheapestDate] = useState()   
    let origin = props.origin;
    let destination = props.destination;

    const fetchCheapestDates = props => {
        const request = require('request');

        const options = {
        method: 'GET',
        url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/IN/INR/en-IN/${origin}/${destination}/anytime`,
        qs: {inboundpartialdate: '2021-03-15'},
        headers: {
            'x-rapidapi-key': '976cd8cb00msh0028629c1e15e47p1e50d5jsnd116d979d352',
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
            useQueryString: false
        }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            setCheapestDate(JSON.parse(body))
            // console.log(body);
        });
    }

useEffect(
    ()=>{
        console.log("fetched"+CheapestDate)
    }
)
    return (
        <div>
            <button onClick={fetchCheapestDates}>Get CheapestDates</button>
            {CheapestDate?(<RenderCheapestDate CheapestDate={CheapestDate}/>):<></>}
        </div>
    );
};

export default CheapestDate;