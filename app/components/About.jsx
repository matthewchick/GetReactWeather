var React = require('react');

/* method 2
React 0.14 introduced functional, stateless components
as a way to define React components as a function, rather than
as an ES2015 class or via React.createClass.
*/
var About = props => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application build on React under Node.js and Express.
        I have built this for The Complete React Web App Developer Course.
      </p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
          - This was JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
          - Use Open Weather Map API to search for weather data by City name.
        </li>
        <li>
          <a href="https://github.com/mochajs/mocha">Mocha</a>
          - Use Mocha with Expect, Spies and Promise for testing.
        </li>
        <li>
          <a href="http://sass-lang.com/guide">SASS</a>
          - Use SASS/SCSS instead of CSS.
        </li>
      </ul>
    </div>
  );
};
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
