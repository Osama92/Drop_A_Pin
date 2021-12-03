import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 6.457171,
      lng: 3.327709
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAsDbgavhwI18qO3lwKZlCyI1AnJlVSUaE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals={true}
        >
          <AnyReactComponent lat={6.457171} lng={3.327709} text="My Location" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
