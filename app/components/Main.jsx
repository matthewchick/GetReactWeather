
var React = require('react');
var Nav = require('Nav');   // Nav is another component

// method 2
var Main = (props) => {
    return (
      <div>
        <Nav />
        <h2>Main Component</h2>
        {props.children}
      </div>
    );
};
/* method 1
var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav />
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});
*/
module.exports = Main;
