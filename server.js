
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
11. add the dynamic loading text
12. Use react debugging tools in chrome and add inline-source-map inside webpack.config.js - use debugger
13. learn stateless functional components
14. Deploy it to Heroku - toolbelt.heroku.com <= Heroku
    heroku login
    heroku auth:whoami
    tell heroku how to start your app - modify the package.json file
    heroku create
    git remote -v
    git push heroku master
    heroku open
    heroku apps:rename matthewchick
    git remote set-url origin git@github.com:matthewchick/GetReactWeather.git
15. foundation.zurb.com or bootstrap = install foundation
    sudo npm install css-loader@latest script-loader@latest style-loader@latest jquery@latest foundation-sites@latest
    --save-exact --save-dev
    React use className instead of class

    https://github.com/prettier/prettier
    https://www.draw.io/
    https://medium.com/@victorleungtw/how-to-use-webpack-with-react-and-bootstrap-b94d33765970
*/

var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;  //deploy to heroku

app.use(function (req, res, next) {  //middleware
  /* The x-forwarded-proto header is set by heroku.
  This lets our application know if the user is on the https
  or http version of the site. In this case the weather api
  were using only allows http requests (https are part of the paid plan).
  The above code redirects https visitor over to the http site
  so they can use the weather api.
  */
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
