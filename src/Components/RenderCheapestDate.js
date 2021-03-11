import React, { useEffect } from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const RenderCheapestDate = (props) => {
    const quotes= props.CheapestDate.Quotes
    useEffect(
        ()=>{
            console.log(quotes)
        }
    )
  return (
    <div>
        
        {quotes.map((quote)=>
                 ( <Card inverse>
                  {/* <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" /> */}
                  <CardImgOverlay>
                    <CardTitle tag="h5">Quote {quote.QuoteId}</CardTitle>
                    <CardText>
                      Minimum Price: {quote.MinPrice}
                    </CardText>
                    <CardText>
                      {/* <medium className="text-muted">Carrier : {quote.Carriers[0].Name}</medium> */}
                    </CardText>
                    <CardText>
                      Departure Date : {quote.OutboundLeg.DepartureDate}
                    </CardText>
                  </CardImgOverlay>
                </Card>)
        )}

    </div>
  );
};

export default RenderCheapestDate;
