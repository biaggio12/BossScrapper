var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var tabletojson = require('tabletojson');
var async = require('async')

var app = express();

app.get('/scrape', function (req, res) {

    var baseURL = "https://guildstats.eu/bosses?world=Kenora&monsterName=";
    var bosses = ["Zushuka", "Ferumbras", "Ghazbaran", "White Pale", "Tyrn"];
    var bossesURL = []
    for (i = 0; i < bosses.length; i++) {
        bossesURL.push(`${baseURL}${bosses[i]}`)
        var globalJSON = []

    }
    async.each(bossesURL, function (url) {
        request(url, function (res, err, html) {

                tabletojson.convertUrl(url, {
                    forceIndexAsNumber: true,
                }).then(tableAsJson => {
                    globalJSON.push(tableAsJson[3])
                    console.log(globalJSON.length)
                })
            },
            function (err) {

                if (err) {
                    console.log("Nie dizala")
                }

            })
    });
});
app.listen('8081');


exports = module.exports = app;