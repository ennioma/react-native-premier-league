'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  TouchableHighlight,
  View,
} = React;

var styles = require('./style');

var TeamCell = React.createClass({
  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
      <View style={styles.container}>
        <Text style={styles.teamTitle}>
          {this.props.team.name}
        </Text>
        <Image
          source={{uri: this.props.team.crestUrl}}
          style={styles.teamThumbnail} />
      </View>
      </TouchableHighlight>
    );
  }
});

module.exports = TeamCell;
