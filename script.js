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
      "Température ambiante : " +
      JSON.stringify(data.forecast[0].temp2m) +
      "°C";
  })
  .catch((error) => alert("Erreur : " + error));

let hours = 0;

function runClock() {
  var today = new Date();
  hours = today.getHours();
  var minutes = today.getMinutes();
  var timeValue = hours;

  timeValue += (minutes < 10 ? ":0" : ":") + minutes;
  document.getElementById("heure").innerHTML = timeValue;
  console.log(timeValue);
}

runClock();
setInterval(runClock, 1000);

if (hours >= 12) {
  console.log("lol");
  document.getElementById("sun").style.top = "-30%";
}
