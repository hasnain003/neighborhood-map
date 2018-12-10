import React, { Component } from 'react';
import './App.css';
import Map from './component/Map';
import SquareAPI from "./API/index"


class App extends Component {
  constructor() {
    super();
    this.state = {
      venues: [],
      markers: [],
      center: [],
      zoom:12
    };
  }
  handleMarkerClick = (marker) => {
    marker.isOpen=true;
    this.setState({markers: Object.assign(this.state.markers,marker)});
  };
  componentDidMount() {
    SquareAPI.search({
      query: 'coffee',
      near: 'Eau Claire, WI',
      limit: 10
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true,
          id: venue.id
        };
      });
      this.setState({ venues, markers, center });
      console.log(results);
    });
  }

  render() {
    return (
      <div className="App">
        <Map {...this.state} handleMarkerClick={this.handleMarkerClick}/>
      </div>
    );
  }
}

export default App;
