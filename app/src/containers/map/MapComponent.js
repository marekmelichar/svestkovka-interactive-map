import React, {Component} from 'react';
import L from 'leaflet';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class MapComponent extends Component {
  // componentDidMount() {
  //   // create map
  //   this.map = L.map('map', {
  //     // center: [49.8419, 24.0315],
  //     // zoom: 16,
  //     // layers: [
  //     //   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  //     //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  //     //   }),
  //     // ]
  //   });
  //
  //   // add marker
  //   // this.marker = L.marker(this.props.markerPosition).addTo(this.map);
  //
  //   // add layer
  //   this.layer = L.layerGroup().addTo(this.map);
  //   // this.updateMarkers(this.props.markersData);
  // }
  //
  // // componentDidUpdate({ markerPosition }) {
  // //   // check if position has changed
  // //   if (this.props.markerPosition !== markerPosition) {
  // //     this.marker.setLatLng(this.props.markerPosition);
  // //   }
  // // }
  //
  // // componentDidUpdate({ markersData }) {
  // //   // check if data has changed
  // //   if (this.props.markersData !== markersData) {
  // //     this.updateMarkers(this.props.markersData);
  // //   }
  // // }
  //
  // // updateMarkers(markersData) {
  // //   this.layer.clearLayers();
  // //   markersData.forEach(marker => {
  // //     L.marker(
  // //       marker.latLng,
  // //       { title: marker.title }
  // //     ).addTo(this.layer);
  // //  });
  // // }
  //

  constructor(props) {
    super(props)
    // this.state = {
    //   lat: 51.505,
    //   lng: -0.09,
    //   zoom: 13
    // }
  }

  componentDidMount() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    let tile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    let marker = L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }

  render() {
    console.log('map', this.map);
    
    return (
      <div id="map"></div>
    );
  }
}

export default MapComponent;
