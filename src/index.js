import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const data = {
  location: {
    longitude: 26.7321094,
    latitude: 58.3780494
  },
  map: {
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_JS_API_KEY,
    defaultZoom: 13,
    excludeRadius: 1000
  },
  foursquareCredentials: {
    clientID: process.env.REACT_APP_FOURSQUARE_CLIENT_ID,
    clientSecret: process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET
  },
  venueRequest: {
    categoryId: '4bf58dd8d48988d16c941735',
    radius: 4000
  },
  venuePhotoRequest: {
    limit: 1
  }
}

ReactDOM.render(<App {...data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
