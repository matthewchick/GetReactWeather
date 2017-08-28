// Weather component
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      location: 'Sydney',
      temp: 88
    }
  },
  handleSearch: function (updatelocation){

    var that = this;
    // alert (updatelocation);
    openWeatherMap.getTemp(updatelocation).then(function (temp){
      that.setState({           //use this => TypeError: Cannot read property 'setState' of undefined, use that instead of this
        location: updatelocation,
        temp: temp
      });
    }, function(errorMessage) {
      alert(errorMessage);
    });
    /*
    this.setState({
      location: updatelocation,
      temp: 23
    });
    */
  },
  render: function() {
    // destructing ES6
    var {temp, location} = this.state;
    console.log(location);
    console.log(temp);
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
