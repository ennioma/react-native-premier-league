'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4C2D73',
    height: 60,
  },
  teamTitle: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: '#FFFFFF'
  },
  teamThumbnail: {
    width: 60,
    height: 60,
  }
});
