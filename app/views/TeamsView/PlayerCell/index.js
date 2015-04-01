'use strict';

var React = require('react-native');

var roles = require('./../../../utils/rolesData.js');

var {
  Image,
  Text,
  TouchableHighlight,
  View,
} = React;

var styles = require('./style');

var PlayerCell = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  componentDidMount: function() {

  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.playerRole}>
          {roles[this.props.player.position]}
        </Text>
        <Text style={styles.playerName}>
          {this.props.player.name}
        </Text>
      </View>
    );
  }
});

module.exports = PlayerCell;
