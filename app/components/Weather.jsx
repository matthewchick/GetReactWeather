// Weather component
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

// Weather is state component
var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
      /*
      location: 'Sydney',
      temp: 88
      */
    };
  },
  handleSearch: function(location) {
    //must use location as global variable as window.location

    var that = this;
    // alert (updatelocation);
    // debugger;
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(
      function(temp) {
        that.setState({
          //use this => TypeError: Cannot read property 'setState' of undefined, use that instead of this
          location: location,
          temp: temp,
          isLoading: false
        });
      },
      function(e) {
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });
        alert(errorMessage);
      }
    );
    /*
    this.setState({
      location: updatelocation,
      temp: 23
    });
    */
  },
  render: function() {
    // destructing ES6
    var { isLoading, temp, location, errorMessage } = this.state;
    // console.log(location);
    // console.log(temp);
    function renderMessage() {
      if (isLoading) {
        //if isLoading is true
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        //check temp && location exist
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return <ErrorModal />;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
