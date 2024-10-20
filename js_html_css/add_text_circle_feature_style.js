import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import Point from 'ol/geom/Point.js';
import View from 'ol/View.js';
import {
  Circle,
  Fill,
  Icon,
  Stroke,
  Style,
  Text,
  RegularShape,
} from 'ol/style.js';
import {OGCMapTile, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

const iconFeature = new Feature({
  geometry: new Point([0, 0]),
});

const iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 1],
    src: 'data/world.png',
  }),
  text: new Text({
    text: '無線装置ID\n7870',
    font: 'bold 0.7rem Calibri,sans-serif',
    fill: new Fill({
      color: 'black',
    }),
    stroke: new Stroke({
      color: 'white',
      width: 1,
    }),
  }),
});

const duplicateStyle = new Style({
  image: new RegularShape({
    fill: new Fill({
      color: 'black',
    }),
    stroke: new Stroke({
      color: 'white',
      width: 1,
    }),
    points: 4,
    radius: 10,
    angle: Math.PI / 4,
  }),
  text: new Text({
    text: '9+',
    font: '0.8rem Calibri,sans-serif',
    fill: new Fill({
      color: 'white',
    }),
    stroke: new Stroke({
      color: 'white',
      width: 1,
    }),
  }),
});

const iconOutlineStyle = new Style({
  image: new RegularShape({
    fill: new Fill({
      color: 'black',
    }),
    stroke: new Stroke({
      color: 'white',
      width: 1,
    }),
    points: 4,
    radius: 10,
    scale: [2.5, 1.5],
  }),
});

iconFeature.setStyle([iconOutlineStyle, duplicateStyle, iconStyle]);

const vectorSource = new VectorSource({
  features: [iconFeature],
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

const rasterLayer = new TileLayer({
  source: new OGCMapTile({
    url: 'https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:raster:HYP_HR_SR_OB_DR/map/tiles/WebMercatorQuad',
    crossOrigin: '',
  }),
});

const map = new Map({
  layers: [rasterLayer, vectorLayer],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 3,
  }),
});

const textAlignments = ['left', 'center', 'right'];
const textBaselines = ['top', 'middle', 'bottom'];
const controls = {};
const controlIds = [
  'rotation',
  'rotateWithView',
  'scaleX',
  'scaleY',
  'anchorX',
  'anchorY',
  'displacementX',
  'displacementY',
  'textRotation',
  'textRotateWithView',
  'textScaleX',
  'textScaleY',
  'textAlign',
  'textBaseline',
  'textOffsetX',
  'textOffsetY',
];
controlIds.forEach(function (id) {
  const control = document.getElementById(id);
  const output = document.getElementById(id + 'Out');
  function setOutput() {
    const value = parseFloat(control.value);
    if (control.type === 'checkbox') {
      output.innerText = control.checked;
    } else if (id === 'textAlign') {
      output.innerText = textAlignments[value];
    } else if (id === 'textBaseline') {
      output.innerText = textBaselines[value];
    } else {
      output.innerText = control.step.startsWith('0.')
        ? value.toFixed(2)
        : value;
    }
  }
  control.addEventListener('input', function () {
    setOutput();
    updateStyle();
  });
  setOutput();
  controls[id] = control;
});

function updateStyle() {
  iconStyle
    .getImage()
    .setRotation(parseFloat(controls['rotation'].value) * Math.PI);

  iconStyle.getImage().setRotateWithView(controls['rotateWithView'].checked);

  iconStyle
    .getImage()
    .setScale([
      parseFloat(controls['scaleX'].value),
      parseFloat(controls['scaleY'].value),
    ]);

  iconStyle
    .getImage()
    .setAnchor([
      parseFloat(controls['anchorX'].value),
      parseFloat(controls['anchorY'].value),
    ]);

  iconStyle
    .getImage()
    .setDisplacement([
      parseFloat(controls['displacementX'].value),
      parseFloat(controls['displacementY'].value),
    ]);

  iconStyle
    .getText()
    .setRotation(parseFloat(controls['textRotation'].value) * Math.PI);

  iconStyle.getText().setRotateWithView(controls['textRotateWithView'].checked);

  iconStyle
    .getText()
    .setScale([
      parseFloat(controls['textScaleX'].value),
      parseFloat(controls['textScaleY'].value),
    ]);

  iconStyle
    .getText()
    .setTextAlign(textAlignments[parseFloat(controls['textAlign'].value)]);

  iconStyle
    .getText()
    .setTextBaseline(textBaselines[parseFloat(controls['textBaseline'].value)]);

  iconStyle.getText().setOffsetX(parseFloat(controls['textOffsetX'].value));
  iconStyle.getText().setOffsetY(parseFloat(controls['textOffsetY'].value));

  iconFeature.changed();
}
updateStyle();

// change mouse cursor when over marker
map.on('pointermove', function (e) {
  const hit = map.hasFeatureAtPixel(e.pixel);
  map.getTargetElement().style.cursor = hit ? 'pointer' : '';
});

