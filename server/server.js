//require express - gives us back a function
express = require('express');
//Create an instance of express by calling the function
//gives us back an option;

var app = express();
//Don't use port 80; computer is already using that to connect to internet.
var port = 5000;//used to direct traffic.

//Serve files from this folder
// by default index.html is returned.

app.use(express.static('server/public'));


app.listen(port, function () {
    console.log('listening on port:', port);
});