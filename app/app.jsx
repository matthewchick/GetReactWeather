
var React = require('react');
var ReactDOM = require('react-dom');
// destructing ES6 - we use V2 for react-router
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation
//require ('style!css!foundation-sites/dist/css/foundation.min.css');
require ('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();
// var Route = require('react-router').Route;
// var Router = require ('react-router').Router;
/*
var obj = {
  name: 'Andrew'
}
var {name} = obj;
*/

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  /*
  Each router creates a history object,
  which it uses to keep track of the current location[1]
  and re-render the website whenever that changes.
  */
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
