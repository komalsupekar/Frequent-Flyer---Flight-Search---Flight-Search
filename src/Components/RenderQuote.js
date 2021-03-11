import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const RenderQuote = (props) => {
  return (
    <div>
      <Card inverse>
        {/* <CardImg width="100%" src="/assets/318x270.svg" alt="Card image cap" /> */}
        <CardImgOverlay>
          <CardTitle tag="h5">Quote</CardTitle>
          <CardText>
            <large>Minimum Price: {props.quote.Quotes[0].MinPrice}</large>    
          </CardText>
          <CardText>
            <medium className="text-muted">Carrier : {props.quote.Carriers[0].Name}</medium>
          </CardText>
          <CardText>
            <medium className="text-muted">Departure Date : {props.quote.Quotes[0].OutboundLeg.DepartureDate}</medium>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default RenderQuote;
