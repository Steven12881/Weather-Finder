import React, { Component } from "react";
class Weather extends Component {
  state = {};

  render(props) {
    return (
      <div>
        {this.props.location && (
          <p className="weather__key">
            <span className="weather__value">
              Locations:
              {this.props.location}
            </span>
          </p>
        )}
        {this.props.temp && (
          <p className="weather__key">
            <span className="weather__value">
              Temperture:
              {this.props.temp}{" "}
            </span>
          </p>
        )}
        {this.props.humidity && (
          <p className="weather__key">
            <span className="weather__value">
              Humidity:
              {this.props.humidity}
            </span>
          </p>
        )}
        {this.props.condition && (
          <p className="weather__key">
            <span className="weather__value">
              Condition:
              {this.props.condition}
            </span>
          </p>
        )}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
