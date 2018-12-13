import React, { Component } from 'react';
import ListItem from './listItem'

class VenueList extends Component {
	render() {
		return(
			<ol className="venueList" aria-label="List of Coffe Shop">
				{this.props.venues &&
					this.props.venues.map((venue,idx) =>  (<ListItem key={idx} {...venue} handleListItemClick={this.props.handleListItemClick}/>
				))}
			</ol>
		);
	}
}

export default VenueList;