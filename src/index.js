import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';
import {OSM, TileArcGISRest} from 'ol/source';

import {getPlanetApiKey} from './login.js'

const esrilyr = 'https://hstsrv-amer.tst.azure.chevron.com/ags/rest/services/CRISIS_MANAGEMENT/CVX_Facilities/MapServer/0';

/*
const map1 = new Map({
 target: 'map',
 layers: [
   new TileLayer({
     source: new XYZ({
       url: 'https://tiles{0-3}.planet.com/basemaps/v1/planet-tiles/global_monthly_2020_01_mosaic/gmap/{z}/{x}/{y}.png?api_key=' + getPlanetApiKey()
     })
   })
 ],
 view: new View({
   center: fromLonLat([-122.395, 37.783]),
   zoom: 12
 })
});
*/

const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new XYZ({
          url: 'https://server.arcgisonline.com/arcgis/rest/services/Reference/World_Reference_Overlay/MapServer'
        })
      })
    ],
    view: new View({
        center: [0, 0],
        zoom: 2
    })
   });

