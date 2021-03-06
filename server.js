// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
// var ig = require('instagram-node').instagram();


// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
//router
var router = require('./app/routes');
app.use('/',router)
// configure instagram app with your access token
// we'll get to this soon

// configure instagram app with your access_token
// ig.use({
//     // get access token here: http://instagram.pixelunion.net/
//     access_token: '1663265456.1677ed0.f2d8f8976c3c400797bf850a10dc7fbd',
//     });



// SET THE ROUTES
// ===================================================
// home page route - our profile's images
// app.get('/', function(req, res) {
//     // use the instagram package to get popular media
//     ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
//             // render the home page and pass in our profile's images
//             res.render('pages/index',{grams: medias});
//     });

// });
// START THE SERVER
// ==================================================
app.listen(8080);
console.log('App started! Look at http://localhost:8080');