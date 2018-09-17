import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  state = {
    location: undefined,
    temp: undefined,
    humidity: undefined,
    condition: undefined,
    error: "Please enter City and Country"
  };
  getWeather = async e => {
    // this is a function
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      "https://openweathermap.org/data/2.5/weather?q=" +
        city +
        "," +
        country +
        "&appid=b6907d289e10d714a6e88b30761fae22"
    );
    const data = await api_call.json();
    //console.log(data.weather[0].description);

    if (city && country) {
      this.setState({
        location: data.name + data.sys.country,
        temp: data.main.temp,
        humidity: data.main.humidity,
        condition: data.weather[0].description,
        error: undefined
      });
    } else {
      this.setState({
        location: undefined,
        temp: undefined,
        humidity: undefined,
        condition: undefined,
        error: "Please enter City and Country"
      });
    }
  };

  render(props) {
    //alert("render" + this.state.temp);
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                  <div className="col-xs-7 form-container">
                    <Form sendCityCountry={this.getWeather} />
                    <Weather
                      location={this.state.location}
                      temp={this.state.temp}
                      humidity={this.state.humidity}
                      condition={this.state.condition}
                      error={this.state.error}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
