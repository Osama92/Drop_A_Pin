import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null
    };
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.LocationError
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  getCoordinates = (position) => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    this.reverseGeoCoordinates();
  };

  reverseGeoCoordinates = () => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyAsDbgavhwI18qO3lwKZlCyI1AnJlVSUaE`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ userAddress: data.results[0].formatted_address })
      )
      .catch((error) => alert(error));
  };

  LocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Show Current Location</h1>
        <button onClick={this.getLocation}>Get my Location</button>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
        <p>GeoCoded Address: {this.state.userAddress}</p>
      </div>
    );
  }
}
export default App;
