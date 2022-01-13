import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import LeafletMap from './utils/LeafletMap'

class CoronaMap extends Component{
    state = {

    }
    handleApiLoaded = (map, maps) => {
        // use map and maps objects
    };

    render() {
        const defaultProps = {
            center: {
                lat: 10.99835602,
                lng: 77.01502627
            },
            zoom: 11
        };



        return(
            <div style={{ height: '100vh', width: '100%' }}>
                <LeafletMap/>
            </div>
        )
    }
}

export default CoronaMap