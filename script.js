fetch("https://api.meteo-concept.com/api/forecast/daily/0?token=74b90bd6180f93281bc8096d7f2f512765009b478573094d89c7d54eea11ca55&insee=2A041")
.then((response) => {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
})
.then((data) => {
    console.log(data)
    document.getElementById("ville").innerHTML = "Ville : " + data.city.name;
    document.getElementById("meteo-min").innerHTML =  "Température minimal : " + JSON.stringify(data.forecast.tmin) + "°C";
    document.getElementById("meteo-max").innerHTML =  "Température maximal : " + JSON.stringify(data.forecast.tmax) + "°C";
})
.catch(error => alert("Erreur : " + error))