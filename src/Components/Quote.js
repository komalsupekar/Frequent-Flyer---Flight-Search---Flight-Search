import React, { PropTypes, useEffect, useState } from 'react';
import RenderQuote from "./RenderQuote"

const Quote = props => {
    const [quote, setQuote] = useState()
    const [quoteDate, setDate] = useState()
    let origin = props.origin;
    let destination = props.destination;

    const fetchQuotes=()=>{
        const request = require('request');

        const options = {
        method: 'GET',
        url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/IN/INR/en-IN/${origin}/${destination}/${quoteDate}`,
        qs: {inboundpartialdate: '2021-03-15'},
        headers: {
            'x-rapidapi-key': '976cd8cb00msh0028629c1e15e47p1e50d5jsnd116d979d352',
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
            useQueryString: false
        }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            // console.log(body);
            setQuote(JSON.parse(body))
        });
}

useEffect(
    ()=>{
        console.log(quote)   
        // console.log(quoteDate)   

    }
)
    return (
        <div>
            <input type="date" onChange={(e)=>{setDate(e.target.value)}}></input>
            <button onClick={fetchQuotes}>Get Quotes</button>
            {quote?(<RenderQuote quote={quote} />):<></>}
        </div>
    );
};

Quote.propTypes = {
    
};

export default Quote;