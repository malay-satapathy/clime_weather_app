import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/results.css";

export class Results extends Component {
  render() {
    console.log(this.props);

    if (this.props.weatherInfo !== "") {
      var weather = this.props.weatherInfo;
      var city = weather.name;
      var temp = Math.round(weather.main.temp);
      var minTemp = Math.round(weather.main.temp_min);
      var maxTemp = Math.round(weather.main.temp_max);
      var status = weather.weather[0].main;
      var description = weather.weather[0].description;

      var backgroundColor = "";

      if (temp > 70) {
        backgroundColor = "hot";
      } else if (temp < 50) {
        backgroundColor = "cold";
      } else {
        backgroundColor = "warm";
      }

      return (
        <div className={"results " + backgroundColor}>
          <div className="resultsContainer">
            <h1 className="temp">{temp}°</h1>
            <p className="status">{status}</p>
            <p className="longText">
              In <span className="info">{city}</span> currently, you will see{" "}
              <span className="info">{description}</span> if you happen to look
              outside. The temperature will range between a low of{" "}
              <span className="info">{minTemp}°</span> and a high of{" "}
              <span className="info">{maxTemp}°</span>.
            </p>
          </div>
          <Link to="/clime_weather_app/">go back</Link>
        </div>
      );
    } else {
      return (
        <div className="results error hot">
          <h1>Something went wrong somewhere!</h1>
          <Link to="/clime_weather_app/">go back</Link>
        </div>
      );
    }
  }
}

export default Results;
