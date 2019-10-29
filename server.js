
const axios = require("axios").default;
const moment = require("moment");
const today = moment().format("MM/DD/YYYY")
console.log("NBA app");
console.log(today)


const getTodaysGames = (today) => {
  fetch(`https://stats.nba.com/stats/scoreboard/?gamedate=${today}&LeagueID=00&DayOffset=0`, (response) => {
    console.log(response.data.resultSets[0].name);
    console.log(response.data.resultSets[0].headers);
    console.log(response.data.resultSets[0].rowSet);
  });
}

const fetch = (url, callback) => {
  axios.get(url)
  .then(response => callback(response))
  .catch(error => console.log(error))
};

getTodaysGames(today);
