import React, { Component } from 'react';
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

// import axios from 'axios';

import io from 'socket.io-client';
import L from 'leaflet';
// const L = window.L

import { connect } from 'react-redux';

import * as actions from '../actions';

import language from '../../language/language_main';

import MapComponent from './map/MapComponent'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vzdalenost: 0,
      cas: 0,
      marker: 0,
      cilbod: 0,
      center: 0
    }
  }
  componentDidMount() {

    this.socket = io('https://api.singlecube.cz:7778');

    let vzdalenost,
        cas,
        marker,
        cilbod,
        center

    this.socket.on('traindata', data => {
      vzdalenost=parseFloat(data.speed)
      cas=parseFloat(data.timeMillis)
      marker=L.latLng(parseFloat(data.lat),parseFloat(data.long))
      if (marker!=null){
        cilbod=marker
        center=[parseFloat(data.lat),parseFloat(data.long)]
      }

      this.setState({
        vzdalenost,
        cas,
        marker,
        cilbod,
        center
      })
    })
  }

  // restart = e => {
  //   this.socket.emit('simulace_start', "")
  // }

  render() {
    const {vzdalenost, cas, marker, cilbod, center} = this.state
    // console.log('vzdalenost, cas, marker, cilbod, center', vzdalenost, cas, marker, cilbod, center);
    // console.log(this.socket);
    return (
      <div>
        <div>{vzdalenost, cas, marker, cilbod, center}</div>
        {/* <button onClick={e => this.restart(e)}>Restart</button> */}
         {/* <div id="mapid"></div> */}
         <MapComponent
            vzdalenost={vzdalenost}
            cas={cas}
            marker={marker}
            cilbod={cilbod}
            center={center}
            zoom="13"
         />
	    </div>
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {

  };
};

export default connect(mapStateToProps, actions)(App);
