'use strict';

var React = require('react-native');

var styles = require('./style');

var {
  Image,
  Text,
  View,
} = React;

var TeamDetail = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  componentDidMount: function() {
    console.log('Download ' + this.props.team.crestUrl);
  },
  render: function() {
    return(
      <View style={styles.container}>
        <Text style={styles.teamTitle}>
          {this.props.team.name} | {this.props.team.squadMarketValue}
        </Text>
        <Image
          source={{uri: this.props.team.crestUrl}}/>
      </View>
    );
  },
});
module.exports = TeamDetail;
