
const axios = require("axios").default;
const moment = require("moment");
const today = moment().format("MM/DD/YYYY")
console.log("NBA app");
console.log(today)

const getTodaysGames = () => {
  fetch(`https://stats.nba.com/stats/scoreboard/?gamedate=${today}&LeagueID=00&DayOffset=0`, (response) => {
    response = response.data.resultSets;
    console.log(`There are ${response[0].rowSet.length} Games Today`);

    let gamesAsObjects = response[0].rowSet.map((columns, i) => {
      return columns.map((column, j) => {
        let obj = {};
        obj[response[0].headers[j]] = column;
        return obj;
      })
    }).reduce((acc, curr) => {
      let newObj = {};
      curr.forEach(x => {
        newObj = { ...newObj, ...x };
      });
      return [...acc, newObj];
    }, [])

    // console.log(10, response[0].name);
    // console.log(11, response[0].headers);
    console.log(12, gamesAsObjects);
  })
};

const fetch = (url, callback) => {
  axios.get(url)
  .then(response => {
    callback(response);
  })
  .catch(error => console.log(error));
};

getTodaysGames();
