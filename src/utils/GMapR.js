/*使用rgoogle-map-react包! Key收费 弃用
* https://github.com/google-map-react/google-map-react
* */

// import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAglMAlYae3eTPg7hSwp3f2YCOhATkz7Zk" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        )
    }
}