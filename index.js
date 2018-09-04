var express = require('express');
var fs = require('fs-extra');
var request = require('request');
var cheerio = require('cheerio');
var tabletojson = require('tabletojson');
var app = express();

    var baseURL = "https://guildstats.eu/bosses?world=Kenora&monsterName=";
    var bosses = ["Ferumbras", "Ghazbaran"];
    var bossesURL = []
    var globalJson = []
    for (i = 0; i < bosses.length; i++) {
        bossesURL.push(`${baseURL}${bosses[i]}`)
    }
function requestAsync(url) {
    return new Promise(function(resolve, reject) {
        request(url, function(err, res, body) {
            if (err) { return reject(err); }
            else {
                var table = tabletojson.convertUrl(url,{forceIndexAsNumber:true})
                return resolve([res, body, table]);
            }

        });
    });
}

    app.get("/scrape",(req,res)=>{
        Promise.all(bossesURL.map(requestAsync))
            .then(function(allData) {
                globalJson.push(allData)
                console.log(globalJson.length)
            });
    })




app.listen('8081');


exports = module.exports = app;
// app.get('/scrape', function (req, res) {
//
//     var baseURL = "https://guildstats.eu/bosses?world=Kenora&monsterName=";
//     var bosses = ["Ferumbras", "Ghazbaran"];
//     var bossesURL = []
//     for (i = 0; i < bosses.length; i++) {
//         bossesURL.push(`${baseURL}${bosses[i]}`)
//         var globalJSON = []
//
//     }
//     async.each(bossesURL, function (url) {
//         request(url, function (res, err, html) {
//
//                 tabletojson.convertUrl(url, {
//                     forceIndexAsNumber: true,
//                 }).then(tableAsJson => {
//                     globalJSON.push(tableAsJson[3])
//                     fs.writeFile('client/src/output.json', JSON.stringify(tablesAsJson[3], null, 4), function (err) {
//
//                         console.log('File successfully written! - Check your project directory for the output.json file');
//
//                     })
//
//                 })
//             })
//     });
// });


// Sprobowac podejsc inaczej dla kazdego bossa oddzielny get request. for(i;bosses;i++ {
// app.get() itd}
