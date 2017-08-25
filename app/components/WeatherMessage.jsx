
var React = require('react');

var WeatherMessage = React.createClass({

  render: function() {
    var {temp, location} = this.props;  // this.props.temp and this.props.location

    return (
      <h3>It's it {temp} in {location}</h3>
    )
  }
});

module.exports = WeatherMessage;
