

// var express = require('express');
var axios = require('axios');

var cheerio = require('cheerio');

module.exports = function(app){
    app.get("/scrape", function(req, res){

        axios.get('https://www.nytimes.com/column/inside-the-list')
        .then(function(response){
          var $ = cheerio.load(response.data);
        
          var result = {};
          
        
          $('section ol li').each(function(i, element){
            
            
            var title = $(element).find('h2').text();
            var summary = $(element).find('p').text();
            var link = $(element).find('a').attr('href');
        
            
            result.title = title;
            result.summary = summary;
            result.link = link;
        
        
            console.log(result);
              
            
        
              
        
        
          });
        
          
          
          
        })
        
        
        
        })
    }
        
