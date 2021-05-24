import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { light } from '../styles/color';
import { Icon } from 'native-base';
import normzer from '../utils/normalizer';
import _Text from './Text';
import { RFValue } from 'react-native-responsive-fontsize';

class _Quote extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Icon
          name={'quote-left'}
          type={'FontAwesome'}
          style={{ color: light, fontSize: RFValue(14), textAlign: 'center' }}
        />
        <_Text
          textType={'quoteText'}
          textStyle={{
            fontSize: RFValue(16),
            lineHeight: RFValue(30),
            marginVertical: RFValue(10),
          }}
        >
          Financial freedom is freedom from fear. The philosophy of the rich and
          the poor is this: the rich invest their money and spend what is left.
          The poor spend their money and invest what is left. The biggest risk a
          person can take is to do nothing.
        </_Text>
        <Icon
          name={'quote-right'}
          type={'FontAwesome'}
          style={{ color: light, fontSize: RFValue(14), textAlign: 'center' }}
        />
        <View style={{ marginVertical: RFValue(10) }} />
        <_Text textType={'quoteAuthor'} textStyle={{ fontSize: RFValue(14) }}>
          - MTAHIR
        </_Text>
      </View>
    );
  }
}

export default _Quote;

const styles = StyleSheet.create({
  container: {
    margin: RFValue(20),
    borderWidth: 1,
    borderColor: light,
    padding: RFValue(20),
  },
});
