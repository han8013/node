var express = require('express');
var router = express.Router();
module.exports = router;
var path = require('path');

var ig = require('instagram-node').instagram();
ig.use({
    // get access token here: http://instagram.pixelunion.net/
    access_token: '1663265456.1677ed0.f2d8f8976c3c400797bf850a10dc7fbd',
    });


router.get('/', function(req, res) {
    // use the instagram package to get popular media
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
            // render the home page and pass in our profile's images
            res.render('pages/index',{grams: medias});
    });

});

router.get('/about',function(req,res){
    // res.sendFile(path.join(__dirname,"../views/pages/about.ejs"));
    res.render("pages/about.ejs");
    
})

router.get('/contact',function(req,res){
    res.render("pages/contact.ejs");
});
router.post('/contact',function(){

});
