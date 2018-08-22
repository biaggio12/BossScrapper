var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var tabletojson = require('tabletojson');
var app = express();

app.get('/scrape', function (req, res) {
    url = "http://guildstats.eu/bosses?monsterName=&world=Kenora&rook=0";
    request(url, function (error, response, html) {

        // if (!error) {
        //     // var $ = cheerio.load(html)
        // }
        // else {
        //     console.log(error)
        // }

        tabletojson.convertUrl(
            'http://guildstats.eu/bosses?monsterName=&world=Kenora&rook=0',
            {
                forceIndexAsNumber: true,
                stripHtmlFromCells: true,
            },
        )
            .then((tablesAsJson) => {
                fs.writeFile('client/src/output.json', JSON.stringify(tablesAsJson[3], null, 4), function (err) {

                    console.log('File successfully written! - Check your project directory for the output.json file');

                })

            })





    })
})

app.listen('8081');


exports = module.exports = app;
// console.log(tablesAsJson[3].length)
// var table = tablesAsJson[3];
// console.log(typeof table)
// return table;
// $(".NewsHeadlineText").first().filter(function(){
//     var data = $(this);
//     title = data.children().text()
//     obj.title = title;
// })
// if ($("td:nth-child(2)","tr").text())

// $("tr","table").map(function (index) {
//     if (boss.includes($(this).text())) {
//         console.log("dziaa jak chuj")
//     }
// })


// $("td:nth-child(2)","tr").map(function (index) {
//
// });

// $("td:nth-child(8)","tr").map(function () {
//     var zush;
//     zush = $(this).text();
//     console.log(zush)
// });