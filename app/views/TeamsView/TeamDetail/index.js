'use strict';

var React = require('react-native');

var images = require('./../../../utils/imagesData.js');

var styles = require('./style');

var {
  Image,
  ListView,
  Text,
  View,
} = React;

var PlayerCell = require('../PlayerCell');

var TeamDetail = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
      teams: [],
    };
  },
  componentDidMount: function() {
    /*
    {"_links":
    {"self":
    {"href":"http://api.football-data.org/alpha/teams/66"},
    "fixtures":
    {"href":"http://api.football-data.org/alpha/teams/66/fixtures"},
    "players":{"href":"http://api.football-data.org/alpha/teams/66/players"}},
    "name":"Manchester United FC",
    "code":"MUFC",
    "shortName":"ManU",
    "squadMarketValue":"425,000,000 €",
    "crestUrl":"http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"}"



    ListView Header -->
    |---------------------------------|
    |           |  TEAM NAME          |
    | TEAM LOGO |                     |
    |           |  TEAM VALUE         |
    |---------------------------------|

    LisView Cell --> One for each team player downloadd from -> this.props.team.players
    {"id":409,
     "name":"David de Gea",
     "position":"Keeper",
     "jerseyNumber":1,
     "dateOfBirth":"1990-11-07",
     "nationality":"Spain",
     "contractUntil":"2016-06-30",
     "marketValue":"25,000,000 €"}


    */
    this.fetchData();
  },
  fetchData: function() {
    console.log('Downloading data from ' + JSON.stringify(this.props.team._links.players.href));
    fetch(this.props.team._links.players.href, {
          method: 'get',
          headers: {
            'X-Auth-Token': '85fbb4c7ee6d460da7b210dca94a12d1'
          }
      })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.players),
          loaded: true,
          players: responseData.teams,
        });
      })
      .done();
  },
  render: function() {
    return(
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderHeader={this._renderHeader}
        renderRow={this._renderPlayerCell}/>
    );
  },

  _renderHeader: function(){
    if (!this.state.loaded){
      return(
        <Text style={styles.loadingText}>
          Loading {this.props.team.name}''s players ...
        </Text>
      );
    } else {
      return(
        <View style={styles.container}>
          <Text style={styles.teamName}>
            {this.props.team.name}
          </Text>
          <Image
            source={{uri: images[this.props.team.code]}}
            style={styles.teamMainImage} />
        </View>
      );
    }
  },
  _renderPlayerCell: function(player){
    return(
      <PlayerCell
        //onSelect={() => this.selectTeam(team)}
        player={player}/>
    );
  },
});
module.exports = TeamDetail;
