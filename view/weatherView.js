class View {


    init(weather) {
        let htmldiv = '';
        console.log(weather.list[0].main.temp)

        for (let i = 0; i < weather.list.length; i++) {
            const icon = weather.list[i].weather[0].icon;
            htmldiv += '<div> ';
            console.log(weather.list[i].weather[0].icon)

            htmldiv += '<span> <p>Humdity  ' + weather.list[i].main.humidity + '%   </p>' + '</span>';
            htmldiv += '<span> <p>Weather type -  ' + weather.list[i].weather[0].main + '  </p>' + '</span>';
            //htmldiv += '<div id="icon"><img id="wicon" src="img/icons/' + icon + '.png"alt="Weather icon"></div>'
            htmldiv += '<div id="icon"><img id="wicon" src="http://openweathermap.org/img/w/' + icon + '.png"alt="Weather icon"></div>'
            htmldiv += '<span><p>Temp  ' + this.weatherConverter(weather.list[i].main.temp) + '<sup>o </p></span>';
            htmldiv += '<span> City ' + weather.list[i].name + '</span></div>';


        };

        Helper.setHtml('show-container-waether', htmldiv);
    }

    weatherIcon(iconcode) {
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        return iconcode;
    }
    weatherConverter(value) {

        let temp = Number(value) - 273;
        return temp.toFixed(1);
    }
}