const L = window.L
const _ = window._

const trainmap = L.map('interactive_map', {
  // dragging: true
}).setView([50.478378, 13.837630], 11.4);

L.tileLayer('https://mapserver.mapy.cz/base-m/{z}-{x}-{y}?s=0.2&dm=Luminosity', {
  attribution: ''
}).addTo(trainmap);

const pointer = L.marker([50.502861, 13.639820]).addTo(trainmap)

const socket = io('https://api.singlecube.cz:7778');

let vzdalenost,
  cas,
  getLatLng,
  cilbod,
  pointerPosition,
  data,
  nextPOI = [],
  currentPOIs = [],
  unionArr = [],
  nextUnionArr = [],
  poi,
  // POI,
  poiStore,
  leafsPoiArr = [],
  counter = 0,
  renderNewPoints = [],
  alreadyOnMap = [],
  someNew

const eventInit = new Event('init');
const eventDataUpdated = new Event('dataUpdated');
// const eventDataUpdated = new CustomEvent('dataUpdated', {});
// let eventDataUpdated;







const myIcon = L.icon({
  iconUrl: '/marker_icon/map_pin_zvyrazeny.svg',
  iconSize: [25, 50],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76]
});

var customOptions = {
  'className' : 'customPopup'
}






function poiDiv(itm) {
  return `
    <div class="row">
      <div class="col-md-6 bg-image-popup" style="background: url(${itm.url});"></div>
      <div class="col-md-6">
        <h3>${itm.nadpis}</h3>
        <div>${itm.obsah}</div>
      </div>
    </div>
  `
}

















socket.on('traindata', function(data) {

  vzdalenost=parseFloat(data.speed)
  cas=parseFloat(data.timeMillis)

  getLatLng=L.latLng(parseFloat(data.lat),parseFloat(data.long))

  if (getLatLng!=null){
    pointerPosition=[parseFloat(data.lat),parseFloat(data.long)]
  }

  // if we dont want to center the map and keep it static, leave this commented:
  // trainmap.setView(pointerPosition, 13)

  pointer.setLatLng(pointerPosition)

  // nextPOI = data.poi
  poiStore = data.poi

  if (counter === 0) {
    window.dispatchEvent(eventInit);
  }
  window.dispatchEvent(eventDataUpdated);

  counter++
})







window.addEventListener('init', function (e) {

  poiStore.map((itm, i) => {
    leafsPoiArr[i] = L.marker([itm.lat, itm.lan], {
        icon: myIcon,
	      title: 'marker',
        name: 'some name'
      })
      .bindPopup(poiDiv(itm), customOptions)
      .on('click', markerOnClick)
      .addTo(trainmap);

    alreadyOnMap.push(itm)
  })
})









window.addEventListener('dataUpdated', function (e) {

  someNew = _.differenceBy(currentPOIs, alreadyOnMap, '_id')

  if (someNew) {
    someNew.map((itm, i) => {

      // update leafsPoiArr
      leafsPoiArr.push(L.marker([itm.lat, itm.lan], {icon: myIcon})
        .bindPopup(poiDiv(itm), customOptions)
        .on('click', markerOnClick)
        .addTo(trainmap))

      // update alreadyOnMap
      alreadyOnMap.push(itm)
    })
  }

  currentPOIs = poiStore

}, false);
