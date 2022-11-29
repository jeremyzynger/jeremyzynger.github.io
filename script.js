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
    document.getElementById("meteo").innerHTML =
      Number(data.forecast[0].temp2m) + "°C";
    document.getElementById("rain").innerHTML =
      "Probabilité de pluie : " + data.forecast[0].probarain + "%";

      setSol(hours);
      setCloud(data.forecast[0].probarain);
      setHeavyCloud(data.forecast[0].probarain);
      setRain(data.forecast[0].probarain);
    })
    .catch((error) => alert("Erreur : " + error));
}


function runClock() {
  var today = new Date();
  hours = today.getHours();
  var minutes = today.getMinutes();
  var timeValue = hours;

  timeValue += (minutes < 10 ? ":0" : ":") + minutes;
  document.getElementById("heure").innerHTML = timeValue;
  console.log(timeValue);
}

let index = 0;
let container = document.getElementById("container-ville");
let p = document.createElement("p");
let img = document.getElementById("d");
let imgP = document.getElementById("d").parentNode
p.id = "ville";
p.innerHTML = tabVille[index].ville;
container.appendChild(p);
imgP.insertBefore(p,img)

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
  imgP.insertBefore(p,img)
}

runClock();
setInterval(runClock, 1000);

function mvtSun(x) {
  if (x > 6 && x < 18) {
    a = Math.abs(x - 12) * (60 / 6) + 10;
    document.getElementById("sun").style.top = `${a}%`;
    document.getElementById("status").innerHTML = "Ensoleillé";
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

setInterval(mvtSun(hours), 1000);
setInterval(mvtMoon(hours), 1000);

function changeToNuit(x) {
  if (x < 6 || x > 18) {
    document.getElementById("jour").style.background = "rgb(15,8,60,0.9)";
  } else if (x == 18 || x == 17) {
    document.getElementById("jour").style.background = "rgba(79, 64, 173, 0.8)";
  }
}
changeToNuit(hours);

function setCloud(x) {
  if (parseInt(x) >= 20) {
    document.getElementById("nuage").style.opacity = "1";
    document.getElementById("status").innerHTML = "Légèrement Nuageux";
  }
}
function setHeavyCloud(x) {
  if (parseInt(x) >= 30) {
    document.getElementById("nuage").style.opacity = "1";
    document.getElementById("sun").style.top = "-30%";
    document.getElementById("lune").style.top = "-30%";
    document.getElementById("dark").style.background = "rgb(15, 8, 60, 0.4)";
    document.getElementById("nuage").style.width = "30vw";
    document.getElementById("status").innerHTML = " Très Nuageux";
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

function setSol(hours) {
  setInterval(mvtSun(hours), 1000);
  setInterval(mvtMoon(hours), 1000);
  document.getElementById("nuage").style.width = "20vw";
  document.getElementById("nuage").style.opacity = "0";
  document.getElementById("pluie").style.opacity = "0";
}
