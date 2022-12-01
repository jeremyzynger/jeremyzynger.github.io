function fetchApi(codeInsee) {
  fetch(api(codeInsee))
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("textrain").innerHTML =
        data.forecast[0].probarain + "%";
      document.getElementById("meteo").innerHTML =
        Number(data.forecast[0].temp2m) + "°C";
      setSol(hoursun);
      setCloud(data.forecast[0].probarain);
      setHeavyCloud(data.forecast[0].probarain);
      setRain(data.forecast[0].probarain);
      changeToNuit(hours);
    })
    .catch((error) => alert("Erreur : " + error));
}

let hours;
let minutes;
let hoursun;

function runClock() {
  var today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();
  var timeValue = hours;
  hoursun = hours + minutes / 60;

  timeValue += (minutes < 10 ? ":0" : ":") + minutes;
  document.getElementById("heure").innerHTML = timeValue;
}

runClock();
setInterval(runClock, 1000);

// hours = 2;
// minutes = 45;
// hoursun = hours + minutes / 60;

let index = 0;
let container = document.getElementById("container-ville");
let p = document.createElement("p");
let img = document.getElementById("d");
let imgP = document.getElementById("d").parentNode;
p.id = "ville";
p.innerHTML = tabVille[index].ville;
container.appendChild(p);
imgP.insertBefore(p, img);

fetchApi(tabVille[index].code);

function changeSlide(sens) {
  index = index + sens;

  if (index < 0) {
    index = tabVille.length - 1;
  }
  if (index > tabVille.length - 1) {
    index = 0;
  }

  fetchApi(tabVille[index].code);
  p.innerHTML = tabVille[index].ville;
  container.appendChild(p);
  imgP.insertBefore(p, img);
}

function mvtSun(x) {
  if (x > 6 && x < 18) {
    a = Math.abs(x - 12) * (60 / 6) + 10;
    document.getElementById("sun").style.top = `${a}%`;
    document.getElementById("status").innerHTML = "Ensoleillé";
    document.getElementById("jour").style.background = "rgb(135,206,235,1)";
  } else {
    document.getElementById("sun").style.top = "-30%";
    document.getElementById("status").innerHTML = "Nuit paisible";
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

setInterval(mvtSun(hoursun), 10000);
setInterval(mvtMoon(hoursun), 10000);

function changeToNuit(x) {
  if (x < 6 || x > 18) {
    document.getElementById("jour").style.background = "rgb(15,8,60,1)";
  } else if (x == 18 || x == 17) {
    document.getElementById("jour").style.background = "rgba(79, 64, 173, 0.8)";
  }
}
changeToNuit(hours);

function setCloud(x) {
  if (parseInt(x) >= 10) {
    document.getElementById("nuage").style.opacity = "0.9";
    document.getElementById("status").innerHTML = "Légèrement Nuageux";
    document.getElementById("jour").style.background = "rgb(148, 157, 225,1)";
  }
}
function setHeavyCloud(x) {
  if (parseInt(x) >= 20) {
    document.getElementById("nuage").style.opacity = "1";
    document.getElementById("sun").style.top = "-30%";
    document.getElementById("lune").style.top = "-30%";
    document.getElementById("dark").style.background = "rgb(15, 8, 60, 0.4)";
    document.getElementById("nuage").style.width = "30vw";
    document.getElementById("status").innerHTML = " Très Nuageux";
    document.getElementById("jour").style.background = "#555555";
  }
}

function setRain(x) {
  if (parseInt(x) >= 50) {
    document.getElementById("nuage").style.opacity = "1";
    document.getElementById("pluie").style.opacity = "1";
    document.getElementById("sun").style.top = "-30%";
    document.getElementById("lune").style.top = "-30%";
    document.getElementById("nuage").style.width = "30vw";
    document.getElementById("dark").style.background = "rgb(15, 8, 60, 0.5)";
    document.getElementById("status").innerHTML = "Pluvieux";
  }
}

function setSol(hoursun) {
  setInterval(mvtSun(hoursun), 10000);
  setInterval(mvtMoon(hoursun), 10000);
  document.getElementById("nuage").style.width = "20vw";
  document.getElementById("nuage").style.opacity = "0";
  document.getElementById("pluie").style.opacity = "0";
}

let date = new Date();
let jour = date.toLocaleDateString("default", { day: "numeric" });
let mois = date.toLocaleDateString("default", { month: "long" });
let annee = date.toLocaleDateString("default", { year: "numeric" });
if (jour == "1") jour = "1er";

document.getElementById("date").innerHTML = jour + " " + mois + " " + annee;
