function pushdata(data){
    /*initialisation des url pour une fond dynamique*/
    rainy=["image/background/rainy.jpg","image/icon/rainy.svg"];
    sunny=["image/background/sunny.jpg","image/icon/clear-sunny.svg","image/background/clear-night.jpeg","image/icon/clear-night.svg"];
    cloudy=["image/background/cloudy.jpg","image/icon/cloudy-sunny.svg","image/background/cloudy-night.jpg","image/icon/cloudy-night.svg"];
    fog=["image/background/fog.jpg","image/icon/mist.svg"];
    drizzle=["image/background/drizzle.jpg","image/icon/drizzle.svg"];
    ice=["image/background/sleet.jpg","image/icon/ice.svg"];
    snowy=["image/background/snowy.jpg","image/icon/snowy.svg"];
    thunder=["image/background/thunder.jpg","image/icon/thunder.svg"];
    /*----------------------*/

    /*dictionaire plein de suggestion pour des valeur precis d'indexe d'UV*/ 
    const uvSuggestions = {
        0: "Minimal risk. No protection needed.",
        1: "Minimal risk. Sunglasses are enough.",
        2: "Low risk. Wear sunglasses when outside.",
        3: "Moderate risk. Use sunscreen (SPF 30+).",
        4: "Moderate risk. Use sunscreen and stay hydrated.",
        5: "Moderate risk. Wear a hat and sunglasses.",
        6: "High risk. Use SPF 30+, seek shade at midday.",
        7: "High risk. Wear protective clothing and sunscreen.",
        8: "Very high risk. Reduce sun exposure between 11am–4pm.",
        9: "Very high risk. Use SPF 50+ and stay in shade.",
        10: "Very high risk. Avoid direct sun as much as possible.",
        11: "Extreme risk. Stay indoors during peak hours!",
        12: "Extreme risk. UV extremely dangerous, avoid exposure."
    };
    /*-------------------------*/

    /*dictionnaire pour attribuer a chaque valeur de data.current.condition.text 
    une url pour faire une fond dynamique, source: api documentation*/
    const weatherConditions = {
        // Clear / Sunny
        "Sunny": sunny,
        "Clear": sunny,

        // Cloudy
        "Partly cloudy": cloudy,
        "Cloudy": cloudy,
        "Overcast": cloudy,

        // Mist / Fog
        "Mist": fog,
        "Fog": fog,
        "Freezing fog": fog,

        // Drizzle
        "Patchy light drizzle": drizzle,
        "Light drizzle": drizzle,
        "Freezing drizzle": drizzle,
        "Heavy freezing drizzle": drizzle,
        "Patchy freezing drizzle possible": drizzle,

        // Rain
        "Patchy rain possible": rainy,
        "Patchy light rain": rainy,
        "Light rain": rainy,
        "Moderate rain at times": rainy,
        "Moderate rain": rainy,
        "Heavy rain at times": rainy,
        "Heavy rain": rainy,
        "Light rain shower": rainy,
        "Moderate or heavy rain shower": rainy,
        "Torrential rain shower": rainy,

        // Sleet / Ice
        "Patchy sleet possible": ice,
        "Light sleet": ice,
        "Moderate or heavy sleet": ice,
        "Light sleet showers": ice,
        "Moderate or heavy sleet showers": ice,
        "Ice pellets": ice,
        "Light showers of ice pellets": ice,
        "Moderate or heavy showers of ice pellets": ice,

        // Snow
        "Patchy snow possible": snowy,
        "Patchy light snow": snowy,
        "Light snow": snowy,
        "Patchy moderate snow": snowy,
        "Moderate snow": snowy,
        "Patchy heavy snow": snowy,
        "Heavy snow": snowy,
        "Light snow showers": snowy,
        "Moderate or heavy snow showers": snowy,
        "Blowing snow": snowy,
        "Blizzard": snowy,

        // Thunderstorms
        "Thundery outbreaks possible": thunder,
        "Patchy light rain with thunder": thunder,
        "Moderate or heavy rain with thunder": thunder,
        "Patchy light snow with thunder": thunder,
        "Moderate or heavy snow with thunder": thunder
    };
    /*-------------------------*/

    console.log(data);
    const date = new Date();
    console.log(date);
    console.log(weatherConditions[data.current.condition.text])

    document.getElementById("TEMPERATURE").innerText=data.current.heatindex_c+"°C";
    document.getElementById("PRECIPITATION").innerText=data.current.precip_mm+"mm";
    document.getElementById("HUMIDITY").innerText=data.current.humidity+"%";
    document.getElementById("VISIBILITY").innerText=data.current.vis_km+"km"; 
    document.getElementById("weatherStatus").innerText=data.current.condition.text;
    document.getElementById("jour").innerText=date.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("date").innerText=date.getFullYear()+"/"+(date.getMonth() + 1)+"/"+date.getDate();

    document.getElementById("windspeed").innerText = data.current.wind_kph;
    document.getElementById("winddirection").innerText="direction: "+data.current.wind_dir;
    document.getElementById("uvvalue").innerText=data.current.uv;
    document.getElementById("uvsuggestion").innerText=uvSuggestions[Math.round(data.current.uv)];
    document.getElementById("cityname").innerText=data.location.country+","+data.location.name;

    //icon et fond dynamique
    document.getElementById("icon").src = weatherConditions[data.current.condition.text][1];
    document.querySelector('body').style.backgroundImage=`url(${weatherConditions[data.current.condition.text][0]})`;
    document.querySelector('main').style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${weatherConditions[data.current.condition.text][0]})`;
    document.getElementById('mainCard').style.backgroundImage=`url(${weatherConditions[data.current.condition.text][0]})`;
    weatherCondList=["Sunny","Clear","Partly cloudy","Cloudy","Overcast"]






//echec pour mettre une icone interactive avec le temps

    /*     if(weatherCondList.include(data.current.condition.text)){
        const currentTimeStr = data.location.localtime;           // "2025-11-28 14:23"
        const sunriseStr = data.forecast.forecastday[0].astro.sunrise; // "07:42 AM"
        const sunsetStr = data.forecast.forecastday[0].astro.sunset;   // "05:12 PM"
        console.log(sunrisestr)
        
        const currentDate = new Date(currentTimeStr.replace(" ","T"));
        console.log(currentDate)
        const dateOnly = currentTimeStr.split(" ")[0]; // "2025-11-28"
        const sunriseDate = new Date(`${dateOnly}T${sunriseStr}`);
        const sunsetDate = new Date(`${dateOnly}T${sunsetStr}`);
        if(currentDate > sunriseDate && currentDate < sunsetDate){
            //day
            document.getElementById("icon").src = weatherConditions[data.current.condition.text][1];
            document.querySelector('body').style.backgroundImage=`url(${weatherConditions[data.current.condition.text][0]})`;
            document.querySelector('main').style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${weatherConditions[data.current.condition.text][0]})`;
            document.getElementById('mainCard').style.backgroundImage=`url(${weatherConditions[data.current.condition.text][0]})`;
        }
        else{
            //night
            document.getElementById("icon").src = weatherConditions[data.current.condition.text][3];
            document.querySelector('body').style.backgroundImage=`url(${weatherConditions[data.current.condition.text][2]})`;
            document.querySelector('main').style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${weatherConditions[data.current.condition.text][2]})`;
            document.getElementById('mainCard').style.backgroundImage=`url(${weatherConditions[data.current.condition.text][2]})`
        }
    }
    else{
        document.getElementById("icon").src = weatherConditions[data.current.condition.text][1];
        document.querySelector('body').style.backgroundImage=`url(${weatherConditions[data.current.condition.text][0]})`;
        document.querySelector('main').style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${weatherConditions[data.current.condition.text][0]})`;
        document.getElementById('mainCard').style.backgroundImage=`url(${weatherConditions[data.current.condition.text][0]})`;
    } */

}





function search(){
    let ville=document.getElementById('cityInput');
    console.log(ville.value);
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=308f10c1c8044db88ad213913251511&q=${ville.value}&days=7&aqi=yes&alerts=no`)
        .then(response => response.json())
        .then(data => pushdata(data))
        .catch(error(err));
    
}




/*pour mettre par defaut la meteo de tunis*/ 
fetch(`http://api.weatherapi.com/v1/forecast.json?key=308f10c1c8044db88ad213913251511&q=36.8065,10.1815&days=7&aqi=yes&alerts=no`)
    .then(response => response.json())
    .then(data => pushdata(data))
    .catch(error(err));
