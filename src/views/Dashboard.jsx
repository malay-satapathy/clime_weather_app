import React, { Component } from "react";
import Search from "../components/Search";
import Results from "../components/Results";
import Footer from "../components/Footer";
import history from "../history/history";
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
      <div>
        <div className="dashboard">
          <Router history={history}>
            <Switch>
              <Route exact path="/">
                <Search updateWeather={this.updateWeather}></Search>
              </Route>
              <Route path="/results">
                <Results weatherInfo={this.state.weatherData}></Results>
              </Route>
            </Switch>
          </Router>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Dashboard;
