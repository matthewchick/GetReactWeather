// Weather component
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
      /*
      location: 'Sydney',
      temp: 88
      */
    }
  },
  handleSearch: function (updatelocation){

    var that = this;
    // alert (updatelocation);
    debugger;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(updatelocation).then(function (temp){
      that.setState({           //use this => TypeError: Cannot read property 'setState' of undefined, use that instead of this
        location: updatelocation,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage) {
      that.setState({isLoading: false});
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
    var {isLoading, temp, location} = this.state;
    // console.log(location);
    // console.log(temp);
    function renderMessage() {
      if (isLoading) {    //if isLoading is true
        return <h3>Fetching weather...</h3>
      } else if (temp && location){      //check temp && location exist
        return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return (
      <div>
        <h3>Weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
