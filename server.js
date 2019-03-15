var express = require("express");
var logger = require("morgan");
// var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var exphbs = require("express-handlebars");


// Require all models
// var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();



app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/mongoScaper", { useNewUrlParser: true });

// Routes
require('./Routes/html-routes.js')(app);
require('./Routes/api-routes.js')(app);

// app.get("/", function(req, res){

// axios.get('https://www.nytimes.com/column/inside-the-list')
// .then(function(response){
//   var $ = cheerio.load(response.data);

//   var result = {};
  

//   $('section ol li').each(function(i, element){
    
    
//     var title = $(element).find('h2').text();
//     var summary = $(element).find('p').text();
//     var link = $(element).find('a').attr('href');

    
//     result.title = title;
//     result.summary = summary;
//     result.link = link;


//     console.log(result);
      
//     // res.render({
//     //   title: result.title,
//     //   link: result.link,
//     //   summary: result.summary
//     // });

      


//   });

  
  
  
// })



// })






// Start the server
app.listen(PORT, function() {
console.log("App running on port " + PORT + "!");
});
