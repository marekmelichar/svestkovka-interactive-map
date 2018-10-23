var mymap = L.map('interactive_map').setView([51.505, -0.09], 13);

L.tileLayer('https://mapserver.mapy.cz/base-m/{z}-{x}-{y}?s=0.2&dm=Luminosity', {
  attribution: ''
}).addTo(mymap);

const pointer = L.marker([0,0]).addTo(mymap)

const socket = io('https://api.singlecube.cz:7778');

let vzdalenost,
  cas,
  marker,
  cilbod,
  center

socket.on('traindata', data => {
  vzdalenost=parseFloat(data.speed)
  cas=parseFloat(data.timeMillis)
  marker=L.latLng(parseFloat(data.lat),parseFloat(data.long))
  if (marker!=null){
    cilbod=marker
    center=[parseFloat(data.lat),parseFloat(data.long)]
  }

  mymap.setView(center, 13)

  pointer.setLatLng(center)

})
