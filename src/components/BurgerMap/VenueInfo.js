import React, {Component} from 'react'
import {InfoWindow} from 'react-google-maps'

export default class VenueInfo extends Component {
  render() {
    return <InfoWindow
      position={this.props.location}
      options={{
        pixelOffset: {
          width: 0,
          height: -40
        }
      }}
      onCloseClick={() => this.props.closeInfo(null)}
    >
      <div className={'VenueInfo'}>
        <h1>{this.props.name}</h1>
      </div>
    </InfoWindow>
  }
}