/*Docs of Leafle:
* https://react-leaflet.js.org/docs/
* issue:
* https://stackoverflow.com/questions/67551922/cra-react-leaflet-failed-to-compile
* https://github.com/PaulLeCam/react-leaflet/issues/881
* */
import React, { PureComponent, Fragment } from 'react';
import { Map, MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const position = [51.505, -0.09]

function LeafletMap (){

    return (
        <MapContainer center={position} zoom={13} style={{ width: '100vw', height: '100vh' }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={L.divIcon({ html: '我是 div icon' })}/>
        </MapContainer>
    )
}

export default LeafletMap
/*
* ./node_modules/@react-leaflet/core/esm/path.js 10:41
Module parse failed: Unexpected token (10:41)
File was processed with these loaders:
 * ./node_modules/react-scripts/node_modules/babel-loader/lib/index.js
You may need an additional loader to handle the result of these loaders.
|   useEffect(function updatePathOptions() {
|     if (props.pathOptions !== optionsRef.current) {
>       const options = props.pathOptions ?? {};
|       element.instance.setStyle(options);
|       optionsRef.current = options;


fix:
After reading about it on all blogs , I have concluded that : It's because of the new version of the react-leaflet. I faced the same problem and here's how I got rid of the error:

Open your package.json file

 "browserslist": {
 "production": [
  ">0.2%",
  "not dead",
  "not op_mini all"
],
"development": [
  "last 1 chrome version",
  "last 1 firefox version",
  "last 1 safari version"
]
},
Replace it with following lines :

"browserslist": [
">0.2%",
"not dead",
"not op_mini all"
],
Now Delete node_modeules/.cache folder

npm install

npm start

Another method is to just add these lines in your package.json file:

"react-leaflet": ">=3.1.0 <3.2.0 || ^3.2.1",
"@react-leaflet/core": ">=1.0.0 <1.1.0 || ^1.1.1"
This will skip the newly released version of the @react-leaflet/core package
*/
