var React = require('react');

/*
React 0.14 introduced functional, stateless components
as a way to define React components as a function, rather than
as an ES2015 class or via React.createClass.
*/
var About = (props) => <h3>About component</h3>
/* method 1
var About = function (props) {
  return (
    <h3>About component</h3>
  )
};

/*
var About = React.createClass({
  render: function() {
    return (
      <h3>About component</h3>
    )
  }
}); */

module.exports = About;
