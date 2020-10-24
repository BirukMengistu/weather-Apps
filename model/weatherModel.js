class WeatherModel {
    constructor() {

        }
        /*     async loadCountry() {
                let promise = await fetch('json/country.json');
                return promise;

            } */

    async loadWeather() {


        let promise = await fetch('https://api.openweathermap.org/data/2.5/group?id=5039192,5344994,1850147,1220988,1819729,2988506,3369157,2147714,3530597&appid=2d5a44be63bd6e373470666cac187727&appid=2d5a44be63bd6e373470666cac187727');
        return promise;



    }





}