var scrape = require('./app/models/scrape');

function checkWeather(){
    scrape.it();
}

checkWeather();