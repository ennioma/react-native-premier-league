'use strict';

var React = require('react-native');

var styles = require('./style');

var {
  ActivityIndicatorIOS,
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
    return(
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderFooter={this._renderFooterSpinner}
        renderHeader={this._renderHeader}
        renderRow={this._renderTeamCell}/>
    );
  },

  _renderHeader: function(){
    if (!this.state.loaded){
      return(
        <Text style={styles.loadingText}>
          Loading Teams from the server ...
        </Text>
      );
    } else {
      return(
        <Text style={styles.loadingText}>
          #{this.state.teams.length} teams downloaded!
        </Text>
      );
    }
  },
  _renderFooterSpinner: function() {
    if (!this.state.loaded) {
      return <ActivityIndicatorIOS />;
    }
    return null;
  },
  _renderTeamCell: function(team){
    return(
      <TeamCell
        onSelect={() => this.selectTeam(team)}
        team={team}/>
    );
  },
  selectTeam: function(team){
    this.props.navigator.push({
      title: team.name + " details",
      component: TeamDetail,
      passProps: {team: team},
    });
  },
});

module.exports = TeamsView;
