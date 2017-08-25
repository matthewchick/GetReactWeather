// Weather component
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'Sydney',
      temp: 88
    }
  },
  handleSearch: function (updatelocation){
    // alert (updatelocation);
    this.setState({
      location: updatelocation,
      temp: 23
    });

  },
  render: function() {
    // destructing ES6
    var {temp, location} = this.state;
    console.log(location);
    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    )
  }
});

module.exports = Weather;
