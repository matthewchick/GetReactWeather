
var React = require('react');
var Nav = require('Nav');   // Nav is another component

// method 2
var Main = (props) => {
    return (
      <div>
        <Nav />
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {props.children}
          </div>
        </div>
      </div>
    );
}
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
