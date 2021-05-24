import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { light } from '../utils/styledComponents';
import { Icon } from 'native-base';
import normzer from '../utils/normalizer';
import _Text from './Text';
import { RFValue } from 'react-native-responsive-fontsize';
import { _isTab } from '../utils/dimension';

class _MetaInfo extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { date, readingTime, likes } = this.props;
    const { containerStyles, metaStyles, showDate = true } = this.props;
    return (
      <View style={{ ...styles.container, ...containerStyles }}>
        {date && (
          <_Text
            textStyle={{
              fontSize: _isTab ? RFValue(12) : RFValue(16),
              fontFamily: 'Poppins-Bold',
              color: light,
            }}
          >
            {date}
          </_Text>
        )}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <_Text
            textStyle={{
              marginHorizontal: RFValue(12),
              marginLeft: 0,
              fontSize: _isTab ? RFValue(12) : RFValue(16),
              fontFamily: 'Poppins-Bold',
              color: light,
            }}
          >
            <Icon
              name={'heart-o'}
              type={'FontAwesome'}
              style={{
                color: light,
                fontSize: _isTab ? RFValue(12) : RFValue(16),
                alignSelf: 'center',
              }}
            />{' '}
            {likes}
          </_Text>
          <_Text
            textStyle={{
              marginHorizontal: RFValue(12),
              fontSize: _isTab ? RFValue(12) : RFValue(16),
              fontFamily: 'Poppins-Bold',
              color: light,
            }}
          >
            <Icon
              name={'comment-o'}
              type={'FontAwesome'}
              style={{
                color: light,
                fontSize: _isTab ? RFValue(12) : RFValue(16),
                alignSelf: 'center',
              }}
            />{' '}
            5
          </_Text>
          <_Text
            textStyle={{
              marginHorizontal: RFValue(12),
              fontSize: _isTab ? RFValue(12) : RFValue(16),
              fontFamily: 'Poppins-Bold',
              color: light,
            }}
          >
            <Icon
              name={'eye'}
              type={'FontAwesome'}
              style={{
                color: light,
                fontSize: _isTab ? RFValue(12) : RFValue(16),
                alignSelf: 'center',
              }}
            />{' '}
            6
          </_Text>
        </View>
      </View>
    );
  }
}

export default _MetaInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 20,
    // flex: 1,
    flexWrap: 'wrap',
  },
});
