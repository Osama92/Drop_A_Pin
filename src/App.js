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
    // this.getLocation = this.getLocation.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getCoordinates(position) {
    console.log(position);
  }
  render() {
    return (
      <div className="App">
        <h1>Get User Coordinates</h1>
        <button onclick={this.getLocation}>Get my Location</button>
        <p>Lat: {this.state.latitude}</p>
        <p>Long: {this.state.longitude}</p>
        <p>Address: {this.state.userAddress}</p>
      </div>
    );
  }
}
export default App;
