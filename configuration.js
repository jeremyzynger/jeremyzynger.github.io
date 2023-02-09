function api(codeInsee) {
  let api =
    "https://api.meteo-concept.com/api/forecast/nextHours?token=7d40c1d45f535f38d7632b32e1c54c89ffa09c88abdc0b4aa8077c3d7f007cd1&insee=" +
    codeInsee;
  return api;
}

// function api(codeInsee) {
//   let api =
//     "https://api.meteo-concept.com/api/forecast/nextHours?token=7d40c1d45f535f38d7632b32e1c54c89ffa09c88abdc0b4aa8077c3d7f007cd1&insee=" +
//     codeInsee;
//   return api;
// }

let tabVille = [
  {
    ville: "PARIS",
    code: "75056",
  },
  {
    ville: "LYON",
    code: "69123",
  },
  {
    ville: "STRASBOURG",
    code: "67482",
  },
  {
    ville: "ROUEN",
    code: "76540",
  },
  {
    ville: "MARSEILLE",
    code: "13055",
  },
  {
    ville: "AJACCIO",
    code: "2A004",
  },
  {
    ville: "BREST",
    code: "29019",
  },
  {
    ville: "BIARRITZ",
    code: "64122",
  },
  {
    ville: "BORDEAUX",
    code: "33063",
  },
  {
    ville: "NICE",
    code: "06088",
  },
];
