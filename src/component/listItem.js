import React, { Component } from 'react';

class ListItem extends Component {
	render() {
		return(
			<li className="listItem" tabIndex={0} role="button" onClick={() => this.props.handleListItemClick(this.props)}>
				<img src={this.props.categories[0].icon.prefix+"32"+this.props.categories[0].icon.suffix} alt={this.props.categories[0].name}/>
				{this.props.name}
			</li>
		);
	}
}

export default ListItem;