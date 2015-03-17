var request = require('request');
var cheerio = require('cheerio');

var url = "http://www.stowe.com/ski-ride/conditions/?printReport=1"


module.exports.it = function(callback){

    request(url,function(err,res,html){

        if(!err){

            var $ = cheerio.load(html);

            var inches = $('#sr-stats .stat').eq(3).text();
            var conditions = $('#sr-stats .stat').eq(4).text();
            var details = $('.sr-tip').text();
            callback(null,{conditions:conditions, inches:inches,details:details});
        }
        else{
            callback(err);
        }
    })
}
