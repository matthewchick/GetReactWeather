
/*
 1. Use reactboilerplate to create reactWeather
 2. Install front-end router => sudo npm install react_router@latest --save
 3. Add React Developer Tools in the Chrome
    https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en
 4. Use {this.props.children} and IndexRoute
 5. Create WeatherForm and WeatherMessage components under the weather component
 6. Use third party API - openweathermap.org and use www.jsoneditoronline.org to decode it
    create API key
 7. https://chrome.google.com/webstore/category/extensions => JSONView
 8. Use ES6 - promises
 9. how to pass the function from Weather to WeatherForm and back to Weather, next to WeatherMessage
10. install axios => npm install axios --save => Promise based HTTP client for the browser and node.js
11.
*/

var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
