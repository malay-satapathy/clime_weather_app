import React, { Component } from "react";
import Search from "../components/Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/dashboard.css";

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: "",
    };

    this.updateWeather = this.updateWeather.bind(this);
  }

  updateWeather(jsonData) {
    console.log(jsonData);

    this.setState({
      weatherData: jsonData,
    });
  }

  render() {
    return (
      <div className="dashboard">
        <Search updateWeather={this.updateWeather}></Search>
      </div>
    );
  }
}

export default Dashboard;
