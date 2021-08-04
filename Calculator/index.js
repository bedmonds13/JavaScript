const express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('', function( req, res){
   res.sendFile(__dirname+'/index.html');
});

app.listen(3000, function(){
    console.log("Server started at 3000")
});