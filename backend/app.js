const path = require('path');
const express = require('express');
const fetch = require('node-fetch');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

app.get('/getTeam/:teamName', (req, res) => {
  fetch('https://www.balldontlie.io/api/v1/teams/')
    .then(response => response.json())
    .then((response) => {
      res.send(response.data[1]);
    });
});


// //////////////////////////////////////////////////////////////////////


async function getPlayers(teamID) {

  try {
    return new Promise((resolve) => {
      let players = {
        data: [],
      };
      for (let i = 1; i < 3; i++) {
        fetch(`https://www.balldontlie.io/api/v1/players?per_page=100&page=${i}`)
          .then(response => response.json())
          .then((response) => {
            for (let key in response.data) {
              if (response.data[key].team.id === parseInt(teamID, 10)) {
                let playerObj = {
                  id: response.data[key].id,
                  firstName: response.data[key].first_name,
                  lastName: response.data[key].last_name,
                  team: response.data[key].team.id,
                };
                players.data.push(playerObj);
              }
            }
          });
      }
      return setTimeout(() => {
        resolve(players);
      }, 3000);
    });
  } catch (er) {
    console.log(er);
  }
}

app.get('/players/:teamID', async (req, res) => {
  let players = await getPlayers(req.params.teamID);
  res.send(players);
});


// //////////////////////////////////////////////////////////////////////

app.get('/teams', (req, res) => {
  fetch('https://www.balldontlie.io/api/v1/teams/')
    .then(response => response.json())
    .then((response) => {
      let teams = {
        data: [],
      };
      for (let key in response.data) {
        let teamObj = {
          id: response.data[key].id,
          full_name: response.data[key].full_name,
        };
        teams.data.push(teamObj);
      }
      res.send(teams);
    });
});

/* app.get('/getTeam/:teamID', (req, res) => {
  fetch(`https://www.balldontlie.io/api/v1/teams/${req.params.teamID}`)
    .then(response => response.json())
    .then((data) => {
      res.send(data);
      console.log(data);
    });
}); */


app.listen(port, (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});

module.exports = app;
