class Controller {

    constructor() {

    }

    load() {
        model.loadWeather()
            .then(response => response.json())
            .then(function(data) {
                WeatherContainer.weather = data;
                view.init(WeatherContainer.weather)
                console.log(WeatherContainer.weather);
            })
            .catch(error => alert(error))


    }



}