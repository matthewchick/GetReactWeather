var React = require('react');
var { Link } = require('react-router');

// method 2
var Examples = props => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out: </p>
      <ol>
        <li>
          <Link to="/?location=Sydney">Sydney</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

/* method 1
var Examples = React.createClass({
  render: function() {
    return (
      <h3>Examples component</h3>
    )
  }
});
*/
module.exports = Examples;
