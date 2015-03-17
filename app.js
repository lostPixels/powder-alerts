var scrape = require('./app/models/scrape');
var say = require('say');

function checkWeather(){
    scrape.it(function(err,res){
        if(!err){
            if(res.conditions.toLowerCase() === 'powder'){
                //It's a powder day!
            }
            say.speak(null,res.conditions);
            console.log('conditions: %s',res.conditions);
        }
    });
}

checkWeather();