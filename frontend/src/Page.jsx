import React, { Component } from 'react';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamsInfo: '',
      playersInfo: '',
      choosedTeam: null,
    };
  }

  componentDidMount() {
    this.getTeams();
    if (this.state.choosedTeam != null) {
      this.getPlayers(this.state.choosedTeam);
    }
  }

  getTeams() {
    setTimeout(() => {
      const teamList = [];
      fetch('/teams')
        .then(response => response.json())
        .then((response) => {
          this.state.isLoaded = true;
          this.state.teamsInfo = response;
          for (let i = 0; i < response.data.length; i++) {
            teamList[i] = response.data[i].full_name;
          }
          this.setState({
            teamsInfo: teamList,
          });
        });
    }, 20);
  }

  getPlayers() {
    setTimeout(() => {
      const playerList = [];
      fetch(`/players/${this.state.choosedTeam}`)
        .then(response => response.json())
        .then((response) => {
          this.state.isLoaded = true;
          this.state.playersInfo = response;
          for (let i = 0; i < response.data.length; i++) {
            playerList[i] = response.data[i].firstName.concat(' ', response.data[i].lastName);
          }
          this.setState({
            playersInfo: playerList,
          });
        });
    }, 20);
  }

  showChoosedTeam(e, id, teamID) {
    this.state.choosedTeam = parseInt(id.key, 10) + 1;
    this.componentDidMount();
  }

  render() {
    const { teamsInfo, playersInfo } = this.state;
    return (
      // eslint-disable-next-line max-len,react/no-array-index-key,react/button-has-type
      <div>
        <div id="teams">{Array.from(teamsInfo)
          .map((team, key) => <button key={key} value={key} onClick={(e) => {
            this.showChoosedTeam(e, { key }, { team });
          }}>{team}</button>)}
        </div>
        <div id="players">
          {Array.from(playersInfo)
            .map((player, key) => <li key={key}>{player}</li>)}
        </div>
      </div>
    );
  }
}


export default Page;
