import React from 'react';

const City = (props) => {
    const places = props.places;

    return (
        <ol>
        {
            props.places.map((place)=>{
                return (<li>{place.PlaceName}/{place.PlaceId}</li>)                
                }
            )
        }
        </ol>
    );
};

export default City;