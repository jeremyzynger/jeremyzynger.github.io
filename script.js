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
    document.getElementById("meteo").innerHTML =
      "Température ambiante : " +
      JSON.stringify(data.forecast[0].temp2m) +
      "°C";
    document.getElementById("rain").innerHTML =
      "Probabilité de pluie : " + data.forecast[0].probarain + "%";

    setCloudy(data.forecast[0].probarain);
    setRain(data.forecast[0].probarain);
    setSun(data.forecast[0].probarain);
  })
  .catch((error) => alert("Erreur : " + error));

// function runClock() {
//   var today = new Date();
//   hours = today.getHours();
//   var minutes = today.getMinutes();
//   var timeValue = hours;

//   timeValue += (minutes < 10 ? ":0" : ":") + minutes;
//   document.getElementById("heure").innerHTML = timeValue;
//   console.log(timeValue);
// }

// runClock();
// setInterval(runClock, 1000);

let hours = 12;

function mvtSun(x) {
  if (x > 6 && x < 18) {
    a = Math.abs(x - 12) * (60 / 6) + 10;
    document.getElementById("sun").style.top = `${a}%`;
  } else {
    document.getElementById("sun").style.top = "-30%";
  }
}
function mvtMoon(x) {
  if (x < 6) {
    a = x * 10 + 10;
    document.getElementById("lune").style.top = `${a}%`;
  } else if (x >= 20) {
    b = (24 - x) * 10 + 10;
    document.getElementById("lune").style.top = `${b}%`;
  } else {
    document.getElementById("lune").style.top = "-30%";
  }
}

setInterval(mvtSun(hours), 1000);
setInterval(mvtMoon(hours), 1000);

function changeToNuit(x) {
  if (x < 6 || x > 18) {
    document.getElementById("nuit").style.background = "rgb(15, 8, 60, 0.9)";
  } else if (x == 18 || x == 17) {
    document.getElementById("nuit").style.background = "rgb(15, 8, 60, 0.5)";
  }
}
changeToNuit(hours);

function setCloudy(x) {
  if (parseInt(x) >= 20) {
    document.getElementById("nuage").style.opacity = "1";
    document.getElementById("sun").style.top = "-30%";
    document.getElementById("lune").style.top = "-30%";
    document.getElementById("status").innerHTML = "Nuageux";
  }
}

function setRain(x) {
  if (parseInt(x) >= 50) {
    document.getElementById("nuage").style.opacity = "1";
    document.getElementById("pluie").style.opacity = "1";
    document.getElementById("sun").style.top = "-30%";
    document.getElementById("lune").style.top = "-30%";
    document.getElementById("dark").style.background = "rgb(15, 8, 60, 0.5)";
    document.getElementById("status").innerHTML = "Pluvieux";
  }
}
function setSun(x) {
  if (parseInt(x) >= 10) {
    document.getElementById("status").innerHTML = "Ensoleillé";
  }
}
