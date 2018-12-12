import React, { Component } from 'react';
import VenueList from './VenueList'

class SideBar extends Component {
	constructor() {
		super();
		this.state= {
			query:""
		};
	}

	handleChange =e => {
		this.setState({query : e.target.value})
		const markers = this.props.venues.map(venue => {
			const isMatched = venue.name
			.toLowerCase()
			.includes(e.target.value.toLowerCase());
			const marker = this.props.markers.find(marker => marker.id === venue.id);
			if(isMatched) {
				marker.isVisible = true;
			} else {
				marker.isVisible = false;
			}
			return marker;
		});
		this.props.updateSuperState({markers});
	}

	render() {
		return(
			<div className="sideBar">
				<input type={"search"} id={"search"} placeholder={"filter venues"} onChange={this.handleChange}/>
				<VenueList {...this.props} handleListItemClick={this.props.handleListItemClick}/>
			</div>
		);
	}
}

export default SideBar;