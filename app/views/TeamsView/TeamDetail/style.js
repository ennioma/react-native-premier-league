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
  separator: {
    height: 0.8,
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: '#7BADE5',
  },
  teamMainImage: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 10,
  },
  teamName: {
    alignSelf: 'center',
    color: '#7BADE5',
    fontSize: 20,
  }
});
