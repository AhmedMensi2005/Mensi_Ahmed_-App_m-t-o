function pushdata(data){
    console.log(data);
    let icon = document.getElementById("icon");
    console.log(icon.src)
    const date = new Date();
    console.log(date);
    icon.src = data.current.condition.icon;
    document.getElementById("TEMPERATURE").innerText=data.current.dewpoint_c+"°C";
    document.getElementById("PRECIPITATION").innerText=data.current.precip_mm+"mm";
    document.getElementById("HUMIDITY").innerText=data.current.humidity+"%";
    document.getElementById("VISIBILITY").innerText=data.current.vis_km+"km";
    document.getElementById("jour").innerText=date.toLocaleDateString("en-US", { weekday: "long" });
    document.getElementById("date").innerText=date.getFullYear()+"/"+(date.getMonth() + 1)+"/"+date.getDate()
    
    
}





function search(){
    let ville=document.getElementById('cityInput');
    console.log(ville.value);
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=308f10c1c8044db88ad213913251511&q=${ville.value}&days=7&aqi=yes&alerts=no`)
        .then(response => response.json())
        .then(data => pushdata(data))
        .catch(error(err));
    
}