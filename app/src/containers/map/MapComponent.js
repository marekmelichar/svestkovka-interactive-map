import React, {Component} from 'react';
import L from 'leaflet';
// const L = window.L

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
    const {center, zoom, marker} = this.props

    this.map = L.map('map').setView([0, 0], zoom);

    // let tile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(this.map);

    let tile = L.tileLayer('https://mapserver.mapy.cz/base-m/{z}-{x}-{y}?s=0.2&dm=Luminosity', {
      attribution: ''
    }).addTo(this.map);

    var ratIcon = L.icon({
      iconUrl: 'https://www.google.cz/url?sa=i&source=images&cd=&ved=2ahUKEwiAvJCtgJreAhUL26QKHZMSDYcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F299087%2Fmap_marker_icon&psig=AOvVaw17lqfq8R5klgcYFeXVHgCy&ust=1540296122341650',
      iconSize: [60,50]
    });

    let markerOnMap = L.marker([0, 0], {icon: ratIcon}).addTo(this.map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }

  componentDidUpdate(prevProps, prevState) {

      const {center, zoom, marker} = this.props

      console.log(marker);

      this.map.setView(center, zoom);
      let markerOnMap = L.marker(marker).addTo(this.map)
  }

  render() {
    // console.log('map', this.map);
    // console.log('vzdalenost, cas, marker, cilbod, center, zoom', vzdalenost, cas, marker, cilbod, center, zoom);

    const {vzdalenost, cas, marker, cilbod, center, zoom} = this.props

    return (
      <div id="map"></div>
    );
  }
}

export default MapComponent;
