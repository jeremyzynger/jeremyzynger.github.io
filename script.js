// fetch(api())
//   .then((response) => {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     document.getElementById("ville").innerHTML = "Ville : " + data.city.name;
//     document.getElementById("meteo-min").innerHTML =
//       "Température ambiante : " +
//       JSON.stringify(data.forecast[0].temp2m) +
//       "°C";
//   })
//   .catch((error) => alert("Erreur : " + error));

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

// if (hours <= 12) {
//   console.log("lol");
//   document.getElementById("sun").style.top = "-30%";
// }

// const nuit =
//   hours <= 6 || hours >= 18
//     ? (document.getElementById("sun").style.top = "-30%")
//     : hours == 7
//     ? (document.getElementById("sun").style.top = "60%")
//     : hours == 8
//     ? (document.getElementById("sun").style.top = "50%")
//     : hours == 9
//     ? (document.getElementById("sun").style.top = "40%")
//     : hours == 10
//     ? (document.getElementById("sun").style.top = "30%")
//     : hours == 11
//     ? (document.getElementById("sun").style.top = "20%")
//     : hours == 12
//     ? (document.getElementById("sun").style.top = "10%")
//     : (document.getElementById("sun").style.top = "70%");

// for (let i = 6; i < 12; i++) {
//   console.log;
//   if (i == hours) {
//     console.log(i);
//     document.getElementById("sun").style.top += "10%";
//   }
// }

function mvtSun(x) {
  let a = Math.abs(x - 12) * (60 / 8) + 10;
  document.getElementById("sun").style.top = `${a}%`;
}
setInterval(mvtSun(hours), 1000);
