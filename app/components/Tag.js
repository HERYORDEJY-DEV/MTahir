import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import normzer from '../utils/normalizer';
import _Text from './Text';
import { lightBlue } from '../styles/color';
import { RFValue } from 'react-native-responsive-fontsize';
import { _isTab } from '../utils/dimension';

class _Tag extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { tags } = this.props;
    return (
      <View style={styles.container}>
        {tags &&
          tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <_Text
                textType={'tagText'}
                textStyle={{ fontSize: _isTab ? RFValue(10) : RFValue(12) }}
              >
                {tag}
              </_Text>
            </View>
          ))}
      </View>
    );
  }
}

export default _Tag;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', flexWrap: 'wrap' },
  tag: {
    marginRight: RFValue(10),
    marginBottom: RFValue(10),
    backgroundColor: lightBlue,
  },
});
