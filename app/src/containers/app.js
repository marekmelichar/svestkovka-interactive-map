import React, { Component } from 'react';
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

// import axios from 'axios';

import io from 'socket.io-client';
import L from 'leaflet';

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
      ma: 0,
      cilbod: 0,
      center: 0
    }
  }
  componentDidMount() {
    // async fetch('http://213.136.78.184:7778/socket.io/?EIO=3&transport=polling&t=MOw5h21&sid=gKsXXthhb7iFuNoBAAAB')

    // const request = async () => {
    //   const response = await fetch('http://213.136.78.184:7778/socket.io/?EIO=3&transport=polling&t=MOw5h21&sid=gKsXXthhb7iFuNoBAAAB');
    //   const json = await response.json();
    //   console.log('json', json);
    // }
    //
    // request();


    // axios.get('http://213.136.78.184:7778/socket.io/?EIO=3&transport=polling&t=MOw5h21&sid=gKsXXthhb7iFuNoBAAAB')
    //   .then(response => {
    //     console.log('response', response);
    //   })
    //   .catch(err => {
    //     console.log('err', err);
    //   })

    // const socket = io('http://213.136.78.184:7778/socket.io/?EIO=3&transport=polling&t=MOw5h21&sid=gKsXXthhb7iFuNoBAAAB');
    this.socket = io('https://api.singlecube.cz:7778');

    let vzdalenost,
        cas,
        ma,
        cilbod,
        center

    this.socket.on('traindata', data => {
      vzdalenost=parseFloat(data.speed)
      cas=parseFloat(data.timeMillis)
      ma=L.latLng(parseFloat(data.lat),parseFloat(data.long))
      if (ma!=null){
        cilbod=ma
        center=[parseFloat(data.lat),parseFloat(data.long)]
      }

      this.setState({
        vzdalenost,
        cas,
        ma,
        cilbod,
        center
      })
    })


    // console.log(socket);

    // server-side
    // const io = require('socket.io')();

    // middleware
    // io.use((socket, next) => {
    //   let token = socket.handshake.query.token;
    //   if (isValid(token)) {
    //     return next();
    //   }
    //   return next(new Error('authentication error'));
    // });

    // then
    // io.on('connection', (socket) => {
    //   let token = socket.handshake.query.token;
    //   // ...
    // });
  }

  restart = e => {
    this.socket.emit('simulace_start', "")
  }

  render() {
    const {vzdalenost, cas, ma, cilbod, center} = this.state
    // console.log('vzdalenost, cas, ma, cilbod, center', vzdalenost, cas, ma, cilbod, center);
    console.log(this.socket);
    return (
      <div>
        <div>{vzdalenost, cas, ma, cilbod, center}</div>
        <button onClick={e => this.restart(e)}>Restart</button>
         {/* <div id="mapid"></div> */}
         <MapComponent />
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
