
var React = require('react');

var WeatherMessage = ({temp, location}) => <h3>It's it {temp} in {location}</h3>


module.exports = WeatherMessage;

/* method 2
var WeatherMessage = (props) => {

    var {temp, location} = props;  // this.props.temp and this.props.location

    return (
      <h3>It's it {temp} in {location}</h3>
    )
};
*/
/* method 1
var WeatherMessage = React.createClass({

  render: function() {
     var {temp, location} = this.props;  // this.props.temp and this.props.location

    return (
      <h3>It's it {temp} in {location}</h3>
    )
  }
}); */
