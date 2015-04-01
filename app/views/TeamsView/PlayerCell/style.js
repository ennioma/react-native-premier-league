'use strict';

var React = require('react-native');

var {
StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#4C2D73',
    height: 60,
  },
  playerName: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: '#FFFFFF'
  },
  playerRole: {
    width: 60,
    height: 60,
    marginLeft: 5,
    fontSize: 30,
    backgroundColor: '#FFFFFF',
    containerBackgroundColor: '#FFFFFF',
    color: '#4C2D73',
    textAlign: 'center',
  }
});
