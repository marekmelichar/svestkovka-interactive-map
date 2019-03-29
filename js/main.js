'use strict';

(function ($) {
  $(document).ready(function () {
    // wait for DOM


    var L = window.L;
    var _ = window._;

    var mapContainer = $('#interactive_map');
    // var mapContainer = document.getElementById('interactive_map')

    if (mapContainer.length) {
      var poiDiv = function poiDiv(itm) {
        return '\n    <div class="row">\n      <div class="col-md-6 bg-image-popup" style="background: url(' + itm.url + ');"></div>\n      <div class="col-md-6">\n        <h3>' + itm.nadpis + '</h3>\n        <div>' + itm.obsah + '</div>\n      </div>\n    </div>\n  ';
      };

      var trainmap = L.map('interactive_map', {
        // dragging: true
      }).setView([50.478378, 13.837630], 11.4);

      L.tileLayer('https://mapserver.mapy.cz/base-m/{z}-{x}-{y}?s=0.2&dm=Luminosity', {
        attribution: ''
      }).addTo(trainmap);

      var customMainPin = L.icon({
        iconUrl: '/wp-content/plugins/Svestkovka-mapa/style/images/pin_train.svg',
        iconSize: [70, 70],
        iconAnchor: [34, 55]
      });

      var customOptions = {
        'className': 'customMainPin'
      };

      var pointer = L.marker([50.502861, 13.639820], { icon: customMainPin }).addTo(trainmap);
      // const markerGroup = L.layerGroup().addTo(trainmap);

      var socket = io('https://api.singlecube.cz:7778');

      var vzdalenost = void 0,
          cas = void 0,
          getLatLng = void 0,
          cilbod = void 0,
          pointerPosition = void 0,
          data = void 0,
          nextPOI = [],
          currentPOIs = [],
          unionArr = [],
          nextUnionArr = [],
          poi = void 0,

      // POI,
      poiStore = void 0,
          leafsPoiArr = [],
          counter = 0,
          renderNewPoints = [],
          alreadyOnMap = [],
          someNew = void 0;

      var eventInit = new Event('init');
      var eventDataUpdated = new Event('dataUpdated');
      // const eventDataUpdated = new CustomEvent('dataUpdated', {});
      // let eventDataUpdated;


      var myIcon = L.icon({
        // iconUrl: '/marker_icon/map_pin_zvyrazeny.svg',
        iconUrl: '/wp-content/plugins/Svestkovka-mapa/style/images/pin_basic.svg',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [-3, -76]
        // shadowUrl: 'my-icon-shadow.png',
        // shadowSize: [68, 95],
        // shadowAnchor: [22, 94]
      });

      var customOptions = {
        // 'maxWidth': '700',
        'className': 'customPopup'
      };

      socket.on('traindata', function (data) {

        // console.log('data', data);

        vzdalenost = parseFloat(data.speed);
        cas = parseFloat(data.timeMillis);

        getLatLng = L.latLng(parseFloat(data.lat), parseFloat(data.long));

        if (getLatLng != null) {
          // cilbod=marker
          pointerPosition = [parseFloat(data.lat), parseFloat(data.long)];
        }

        // if we dont want to center the map and keep it static, leave this commented:
        // trainmap.setView(pointerPosition, 13)

        pointer.setLatLng(pointerPosition);

        // nextPOI = data.poi
        poiStore = data.poi;

        // eventDataUpdated = new CustomEvent('dataUpdated', {detail: data});
        // console.log(counter);
        if (counter === 0) {
          window.dispatchEvent(eventInit);
        }
        window.dispatchEvent(eventDataUpdated);

        counter++;
      });

      window.addEventListener('init', function (e) {

        // console.log('Init');
        // console.log(poiStore);

        poiStore.map(function (itm, i) {
          // console.log(itm);
          leafsPoiArr[i] = L.marker([itm.lat, itm.lan], {
            icon: myIcon,
            title: 'marker',
            name: 'some name'
          }).bindPopup(poiDiv(itm), customOptions).on('click', markerOnClick).addTo(trainmap);

          alreadyOnMap.push(itm);
        });
      });

      window.addEventListener('dataUpdated', function (e) {

        // console.log('leafsPoiArr', leafsPoiArr);
        // console.log('alreadyOnMap', alreadyOnMap);
        // console.log('currentPOIs', currentPOIs);

        someNew = _.differenceBy(currentPOIs, alreadyOnMap, '_id');

        // console.log('someNew', someNew);

        if (someNew) {
          someNew.map(function (itm, i) {

            // update leafsPoiArr
            leafsPoiArr.push(L.marker([itm.lat, itm.lan], { icon: myIcon }).bindPopup(poiDiv(itm), customOptions).on('click', markerOnClick).addTo(trainmap));

            // update alreadyOnMap
            alreadyOnMap.push(itm);
          });
        }

        currentPOIs = poiStore;
      }, false);

      var markerOnClick = function markerOnClick(e) {}
      // console.log("hi. you clicked the marker at " + this.getLatLng());
      // console.log('EEE', JSON.stringify(e, null, 4));
      // console.log('e', e);
      // console.log("hi. you clicked the marker at " + e.latlng);
      // console.log("title of marker: " + e.title);
      // console.log("name: " + e.name);


      // create toggle :


      ;mapContainer.append('\n  <div class="toggleSizeMap">\n    <img src="/wp-content/plugins/Svestkovka-mapa/style/images/map_open.svg" />\n  </div>\n');

      $('.toggleSizeMap').on('click', function (e) {
        mapContainer.toggleClass('open');

        if (mapContainer.hasClass('open')) {
          $('.toggleSizeMap img').attr('src', '/wp-content/plugins/Svestkovka-mapa/style/images/map_close.svg');
        } else {
          $('.toggleSizeMap img').attr('src', '/wp-content/plugins/Svestkovka-mapa/style/images/map_open.svg');
        }
      });
    }
  });
})(jQuery, window);
