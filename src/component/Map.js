/*global google*/
import React, { Component } from 'react';
import { withScriptjs, 
	withGoogleMap, 
	GoogleMap, 
	Marker,
	InfoWindow 
	} from "react-google-maps"

const MyMapComponent = withScriptjs(
	withGoogleMap((props) => (
  		<GoogleMap
    	defaultZoom={8}
    	zoom={props.zoom}
    	defaultCenter={{ lat: -34.397, lng: 150.644 }}
    	center={{
    		lat: parseFloat(props.center.lat),
    		lng: parseFloat(props.center.lng)
    	}}
  	>
    {props.markers 	&&
     props.markers
     .filter( marker => marker.isVisible)
     .map((marker, idx, arr) => {
            const venueInfo = props.venues.find(
              venue => venue.id === marker.id
            );
            return(
              <Marker 
                key={idx} 
                position={{ lat: marker.lat, lng: marker.lng }}
                onClick={() => props.handleMarkerClick(marker)}
                animation={
                  arr.length === 1
                    ? google.maps.Animation.BOUNCE
                    : google.maps.Animation.DROP
                }
              >
              {marker.isOpen &&
                venueInfo.bestPhoto &&  (
                <InfoWindow>
                  <React.Fragment>
                    <p className="font-weight-bold">{venueInfo.name}</p>
                    <hr />
                    <p>
                      {venueInfo.location.formattedAddress[0]}
                      <br />
                      {venueInfo.location.formattedAddress[1]}
                    </p>
                    <img
                      src={`${venueInfo.bestPhoto.prefix}200x200${
                          venueInfo.bestPhoto.suffix
                        }`}
                      alt={`${venueInfo.name}`}
                    />
                  </React.Fragment>
                </InfoWindow>
             )}
             </Marker>
          );
     	})}
 	 </GoogleMap>
))
);

export default class Map extends Component {

	render() {
		return(
			<MyMapComponent
  				{...this.props}
  				googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAr7_bhm_T4gTYGPYYsdYzdkmnak283zpI"
  				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `100%`, width:`75%` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}
