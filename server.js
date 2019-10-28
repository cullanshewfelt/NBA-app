const axios = require("axios").default;
const moment = require("moment");
const today = moment().format("MM/DD/YYYY")
console.log("NBA app");
console.log(today)

axios.get(`https://stats.nba.com/stats/scoreboard/?gamedate=${today}&LeagueID=00&DayOffset=0`)
  .then(response => {
    console.log(response.data.resultSets)
  })
  .catch(error => console.log(error));
