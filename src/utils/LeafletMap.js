/*Docs of Leafle:
* https://react-leaflet.js.org/docs/
* */
import React, { PureComponent, Fragment } from 'react';
import { Map, MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default class LeafletMap extends PureComponent {

    render() {
        return (
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        )
    }
}
