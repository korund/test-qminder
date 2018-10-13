import React, {Component} from 'react'
import {Marker} from 'react-google-maps'

export default class VenueMarker extends Component {
  render() {
    return <Marker
      position={this.props.location}
      onClick={() => this.props.openInfo(this.props.id)}
    />
  }
}