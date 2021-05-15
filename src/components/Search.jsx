import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import '../styles/search.css'; 


export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "no_error",
    };

    this.cityInput = React.createRef();

    this.startSearch = this.startSearch.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  startSearch(e) {
    console.log("Search! " + this.cityInput.current.value);

    if (this.cityInput.current.value !== "") {
      this.fetchData();

      this.setState({
        error: "no_error",
      });
    }

    e.preventDefault();
  }

  fetchData() {
    // you should get an API key from: https://openweathermap.org/api
    var apiKey = "bab866c7637eea0bcc96f4e93e003ec5";
    var cityName = this.cityInput.current.value;

    var thisThis = this;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}&units=imperial`
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonResponse) {
        console.log(jsonResponse);
        thisThis.props.updateWeather(jsonResponse);
        thisThis.props.history.push("/results");
      })
      .catch(function (error) {
        thisThis.setState({
          error: "yes_error",
        });
        console.log(error);
      });
  }

  render() {
    return (
      <div className={"searchMain " + this.state.error}>
        <h1 className="searchArea">Cli-mate!</h1>
        <form onSubmit={this.startSearch}>
          <input
            className="searchArea"
            placeholder="Enter city name or zip code"
            ref={this.cityInput}
            type="text"
          />
          <input
            className="searchButton"
            type="submit"
            value="Search"
          />
        </form>
        
      </div>
    );
  }
}

export default withRouter(Search);
