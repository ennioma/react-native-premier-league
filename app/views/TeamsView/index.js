'use strict';

var React = require('react-native');

var styles = require('./style');

var {
  Text,
  View,
  ListView,
} = React;

var TeamCell = require('./TeamCell');
var TeamDetail = require('./TeamDetail');

var TeamsView = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      loaded: false,
      teams: [],
    };
  },
  componentDidMount: function() {
    this.fetchData();
  },
  fetchData: function() {
    fetch('http://api.football-data.org/alpha/soccerseasons/354/teams', {
          method: 'get',
          headers: {
            'X-Auth-Token': '85fbb4c7ee6d460da7b210dca94a12d1'
          }
      })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.teams),
          loaded: true,
          teams: responseData.teams,
        });
      })
      .done();
  },
  render: function() {
    if (!this.state.loaded){
      return(
        <View style={styles.container}>
          <Text style={styles.loadingText}>
            Loading Teams from the server ...
          </Text>
        </View>
      );
    } else {
      return(
        this.renderListView()
      );
    }
  },
  renderListView: function(){
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.warningText}>
            Just downloaded #{this.state.teams.length} teams
          </Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderTeamCell}/>
      </View>
    );
  },
  renderTeamCell: function(team){
    return(
      <TeamCell
        onSelect={() => this.selectTeam(team)}
        team={team}/>
    );
  },
  selectTeam: function(team){
    console.log(team);
    this.props.navigator.push({
      title: team.name + " details",
      component: TeamDetail,
      passProps: {team: team},
    });
  },
});

module.exports = TeamsView;
