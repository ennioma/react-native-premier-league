'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var TeamsView = require('./app/views/TeamsView');

var PremierLeague = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        tintColor='#4C2D73'
        initialRoute={{
          title: 'Premier League browser',
          component: TeamsView,
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
  },
});

AppRegistry.registerComponent('PremierLeague', () => PremierLeague);

module.exports = PremierLeague;
