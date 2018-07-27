// scrape_techstars.js

var webPage = require('webpage');
var page = webPage.create();

var fs = require('fs');
var path = 'public_ceo_export.html';

page.open('https://www.chronicle.com/interactives/executive-compensation?cid=wsinglestory#id=table_public_2017', function (status) {
  var content = page.content;
  fs.write(path,content,'w');
  phantom.exit();
});