fetch(api())
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("ville").innerHTML = "Ville : " + data.city.name;
    document.getElementById("meteo-min").innerHTML =
      "Température minimal : " + JSON.stringify(data.forecast.tmin) + "°C";
    document.getElementById("meteo-max").innerHTML =
      "Température maximal : " + JSON.stringify(data.forecast.tmax) + "°C";
  })
  .catch((error) => alert("Erreur : " + error));

function runClock() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var timeValue = hours;

  timeValue += (minutes < 10 ? ":0" : ":") + minutes;
  document.getElementById("heure").innerHTML = timeValue;
  console.log(timeValue);
}
runClock();
setInterval(runClock, 1000);
