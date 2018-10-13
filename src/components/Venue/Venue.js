import React, { Component } from 'react'

const svgNoPic = `"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text x='24%' y='56%' fill='dimgray' font-weight='bold' font-size='2rem' font-family='sans-serif'>NO PIC</text></svg>"`

class Venue extends Component {
  render() {
    /*
    const venueDetails = <div className={'Venue'}>
      <p>
        Name: {this.props.name}, Distance: {this.props.location.distance}<br/>
        Location: {this.props.location.lat}, {this.props.location.lng}
      </p>
    </div>
    */
    const bgStyle = {
      background: `lightgray url(${svgNoPic}) center/cover`
    }
    if (typeof this.props.photo !== 'undefined') {
      const imgUrl = this.props.photo.prefix + '500x500' + this.props.photo.suffix
      bgStyle.background = `url(${imgUrl}) center/cover`
    }
    return (
      <div
        className={'Venue-container'}
        style={bgStyle}
      >
      </div>
    )
  }
}

export default Venue;