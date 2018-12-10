import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker , InfoWindow } from "react-google-maps"

const MyMapComponent = withScriptjs(
	withGoogleMap((props) =>(
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
     .map((marker,idx) => (
     	<Marker 
     		key={idx} 
     		position={{ lat: marker.lat, lng: marker.lng }}
     		onClick={() => props.handleMarkerClick(marker)}
     	>
     	{marker.isOpen && (
     		<InfoWindow>
     			<p>Hello</p>
     		</InfoWindow>
     	)}
     	</Marker>
     	))}
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
  				containerElement={<div style={{ height: `400px` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}
