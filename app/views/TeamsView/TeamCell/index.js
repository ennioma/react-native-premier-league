'use strict';

var React = require('react-native');

var images = require('./../../../utils/imagesData.js');

var {
  Image,
  Text,
  TouchableHighlight,
  View,
} = React;

var styles = require('./style');

var TeamCell = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  componentDidMount: function() {

  },

  render: function() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.container}>
          <Text style={styles.teamTitle}>
            {this.props.team.name}
          </Text>
          <Image
            source={{uri: images[this.props.team.code]}}
            style={styles.teamThumbnail} />
        </View>
      </TouchableHighlight>
    );
  }
});

module.exports = TeamCell;
