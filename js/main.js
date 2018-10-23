const L = window.L

var mymap = L.map('interactive_map').setView([50.502861, 13.639820], 13);

L.tileLayer('https://mapserver.mapy.cz/base-m/{z}-{x}-{y}?s=0.2&dm=Luminosity', {
  attribution: ''
}).addTo(mymap);

const pointer = L.marker([50.502861, 13.639820]).addTo(mymap)

const socket = io('https://api.singlecube.cz:7778');

let vzdalenost,
  cas,
  marker,
  cilbod,
  center

socket.on('traindata', function(data) {
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
