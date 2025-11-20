function pushdata(data){
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
    console.log(data);
    let icon = document.getElementById("icon");
    console.log(icon.src)
    const date = new Date();
    console.log(date);
    icon.src = data.current.condition.icon;
    document.getElementById("TEMPERATURE").innerText=data.current.heatindex_c+"°C";
    document.getElementById("PRECIPITATION").innerText=data.current.precip_mm+"mm";
    document.getElementById("HUMIDITY").innerText=data.current.humidity+"%";
    document.getElementById("VISIBILITY").innerText=data.current.vis_km+"km";
    document.getElementById("weatherStatus").innerText=data.current.condition.text;
    document.getElementById("jour").innerText=date.toLocaleDateString("en-US", { weekday: "long" });
    document.getElementById("date").innerText=date.getFullYear()+"/"+(date.getMonth() + 1)+"/"+date.getDate()
    document.getElementById("windspeed").innertext=data.current.wind_kph+"kmh"
    document.getElementById("winddirection").innerText="direction: "+data.current.wind_dir
    document.getElementById("uvvalue").innerText=data.current.uv
    document.getElementById("uvsuggestion").innerText=uvSuggestions[data.current.uv]

    
}





function search(){
    let ville=document.getElementById('cityInput');
    console.log(ville.value);
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=308f10c1c8044db88ad213913251511&q=${ville.value}&days=7&aqi=yes&alerts=no`)
        .then(response => response.json())
        .then(data => pushdata(data))
        .catch(error(err));
    
}