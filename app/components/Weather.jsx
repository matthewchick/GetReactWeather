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
      errorMessage: undefined,
      location: undefined,
      temp: undefined
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

  componentDidMount: function() {
    // from examples.jsx
    // https://facebook.github.io/react/docs/react-component.html
    // This is provided to you by react-router! It give you access to awesome location
    // based data like the url, query string values, etc.
    var location = this.props.location.query.location;
    // https://medium.freecodecamp.org/beginner-s-guide-to-react-router-53094349669
    console.log('location', location);
    if (location && location.length > 0) {
      this.handleSearch(location);
      //window.location.hash = '#/'; //make it refresh
    }
  },

  componentWillReceiveProps: function(newProp) {
    // Search from nav
    // An update can be caused by changes to props or state.
    // These methods are called when a component is being re-rendered
    var location = newProp.location.query.location;
    // https://medium.freecodecamp.org/beginner-s-guide-to-react-router-53094349669
    console.log('newlocation', location);
    if (location && location.length > 0) {
      this.handleSearch(location);
      //window.location.hash = '#/';
    }
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
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
