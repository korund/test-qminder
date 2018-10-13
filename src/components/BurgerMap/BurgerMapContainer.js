import React, { Component } from 'react'
import BurgerMap from './BurgerMap'

export default class BurgerMapContainer extends Component {
  render() {
    return (
      <BurgerMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${this.props.map.apiKey}&libraries=geometry,drawing`}
        containerElement={<div className={'BurgerMap container'} />}
        loadingElement={<div className={'BurgerMap loading'} />}
        mapElement={<div className={'BurgerMap map'} />}
        {...this.props}
      />
    )
  }
}