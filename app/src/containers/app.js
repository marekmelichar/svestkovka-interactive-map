import React, { Component } from 'react';
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import axios from 'axios';
import io from 'socket.io-client';

import { connect } from 'react-redux';

import * as actions from '../actions';

import language from '../../language/language_main';

class App extends Component {
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

    const socket = io('http://213.136.78.184:7778/socket.io/?EIO=3&transport=polling&t=MOw5h21&sid=gKsXXthhb7iFuNoBAAAB');

    console.log(socket);

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

  render() {
    return (
      <div>
        MAPA
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
