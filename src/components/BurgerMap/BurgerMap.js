import React, {Component} from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, Circle} from 'react-google-maps'
import VenueMarker from './VenueMarker'
import VenueInfo from './VenueInfo'
import './BurgerMap.css'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentVenue: null
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(venueId) {
    if (venueId === null) {
      this.setState({currentVenue: null})
    } else {
      this.setState({currentVenue: this.props.venues.filter(venue => venue.id === venueId)[0]})
    }
  }

  setLatLng(lat, lng) {
    return {lat: lat, lng: lng}
  }

  render() {
    const center = this.setLatLng(this.props.map.latitude, this.props.map.longitude)
    return (
      <GoogleMap
        defaultZoom={this.props.map.defaultZoom}
        center={center}
      >
        <Circle
          center={center}
          radius={this.props.map.excludeRadius}
          options={{
            fillColor: 'gray',
            fillOpacity: 0.75,
            strokeColor: 'red',
            strokeWeight: 2
          }}
        />
        {this.state.currentVenue && <VenueInfo
          {...this.state.currentVenue}
          closeInfo={this.handleToggle}
        />}
        {this.props.venues.map(venue => <VenueMarker
          {...venue}
          key={venue.id}
          openInfo={this.handleToggle}
        />)}
      </GoogleMap>
    )
  }
}


const BurgerMap = withScriptjs(withGoogleMap(Map))
export default BurgerMap;