/*使用react-google-maps包
* https://tomchentw.github.io/react-google-maps
* */

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const RGMaps = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        <Marker
            position={{ lat: -34.397, lng: 150.644 }}
        />
    </GoogleMap>
));

export default RGMaps

{/*<MapWithAMarker*/}
    {/*containerElement={<div style={{ height: `400px` }} />}*/}
    {/*mapElement={<div style={{ height: `100%` }} />}*/}
{/*/>*/}