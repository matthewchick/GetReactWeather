var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function() {
    var modal = new foundation.Reveal($('#error-model'));
    modal.open();
  },
  render: function() {
    return (
      <div id="error-model" className="reveal tiny text-center" data-reveal>
        <h4>Some Title</h4>
        <p>Our error message!</p>
        <p>
          <button className="button hollow" data-close>
            OKay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
