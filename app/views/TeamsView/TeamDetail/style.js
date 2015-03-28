'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  teamTitle: {
    marginTop: 64,
    marginLeft: 10,
    fontSize: 15,
    textAlign: 'left',
    color: '#4C2D73',
    height: 35,
  },
  teamMainImage: {
    height: 100,
    width: 100,
    marginTop: 5,
    alignItems: 'center',
  }
});
