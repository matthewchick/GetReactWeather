
/*
 1. Use reactboilerplate to create reactWeather
 2. Install front-end router => sudo npm install react_router@latest --save
 3. Add React Developer Tools in the Chrome
    https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en
 4. 
*/

var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
