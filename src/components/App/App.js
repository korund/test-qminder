import React, { Component } from 'react'
import Venue from '../Venue/Venue'
import BurgerMapContainer from '../BurgerMap/BurgerMapContainer'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.foursquare = require('react-foursquare')(this.props.foursquareCredentials)
    this.state = {
      venues: []
    }
  }

  componentDidMount() {
    this.requestVenues()
  }

  // request venues
  requestVenues() {
    this.foursquare.venues.getVenues({
      ll: `${this.props.location.latitude},${this.props.location.longitude}`,
      ...this.props.venueRequest
    }).catch(reject => {
      console.error(reject)
    }).then(venuesResponse => {
      const expectedVenues = venuesResponse.response.venues
        .filter(venue => venue.location.distance > this.props.map.excludeRadius)
      Promise.all(expectedVenues
        .map(venue => this.foursquare.venues.getVenuePhotos({
          ...this.props.venuePhotoRequest,
          venue_id: venue.id
        }))
      ).then(res => {
        expectedVenues.forEach((venue, index) => expectedVenues[index] = {
          ...venue,
          photo: (res[index].response.photos ? res[index].response.photos.items[0] : undefined)
        })
        this.setState({
          venues: expectedVenues.sort((a, b) => a.location.distance - b.location.distance)
        })
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Venues</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <BurgerMapContainer
          map={{
            ...this.props.location,
            ...this.props.map
          }}
          venues={this.state.venues}
        />
        <div className={'App-venues'}>
          {this.state.venues.map(venue => <Venue
            key={venue.id}
            {...venue}
          />)}
        </div>
      </div>
    )
  }
}

export default App;
