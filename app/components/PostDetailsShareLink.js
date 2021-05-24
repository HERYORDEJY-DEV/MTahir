import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import _Text from './Text';
import { Icon } from 'native-base';
import { light, lightBlue } from '../styles/color';
import { RFValue } from 'react-native-responsive-fontsize';
import { _isTab } from '../utils/dimension';

class PostDetailsShareLink extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { claps, reads, comments, url, facebook, twitter } = this.props;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: RFValue(10),
        }}
      >
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: RFValue(10),
          }}
        >
          <_Text
            textType={'metaInfo'}
            textStyle={{
              fontSize: RFValue(14),
              marginHorizontal: _isTab ? RFValue(10) : RFValue(5),
              marginLeft: 0,
            }}
          >
            <Icon
              name={'heart-o'}
              type={'FontAwesome'}
              style={{
                color: light,
                fontSize: RFValue(14),
                alignSelf: 'center',
              }}
            />{' '}
            {claps}
          </_Text>
          <_Text
            textType={'metaInfo'}
            textStyle={{
              fontSize: RFValue(14),
              marginHorizontal: _isTab ? RFValue(10) : RFValue(5),
            }}
          >
            <Icon
              name={'comment-o'}
              type={'FontAwesome'}
              style={{
                color: light,
                fontSize: RFValue(14),
                alignSelf: 'center',
              }}
            />{' '}
            555
          </_Text>
          <_Text
            textType={'metaInfo'}
            textStyle={{
              fontSize: RFValue(14),
              marginHorizontal: _isTab ? RFValue(10) : RFValue(5),
            }}
          >
            <Icon
              name={'eye'}
              type={'FontAwesome'}
              style={{
                color: light,
                fontSize: RFValue(14),
                alignSelf: 'center',
              }}
            />{' '}
            666
          </_Text>
        </View>
        <View
          style={{
            flex: 0.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: lightBlue,
              borderRadius: RFValue(20),
              padding: _isTab ? RFValue(10) : RFValue(5),
              alignItems: 'center',
              justifyContent: 'center',
              width: _isTab ? RFValue(40) : RFValue(30),
              height: _isTab ? RFValue(40) : RFValue(30),
            }}
          >
            <Icon
              name={'link'}
              type={'FontAwesome'}
              style={{
                color: light,
                fontSize: RFValue(14),
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: lightBlue,
              borderRadius: RFValue(20),
              padding: _isTab ? RFValue(10) : RFValue(5),
              alignItems: 'center',
              justifyContent: 'center',
              width: _isTab ? RFValue(40) : RFValue(30),
              height: _isTab ? RFValue(40) : RFValue(30),
            }}
          >
            <Icon
              name={'whatsapp'}
              type={'FontAwesome'}
              style={{
                color: light,
                fontSize: RFValue(14),
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: lightBlue,
              borderRadius: RFValue(20),
              padding: _isTab ? RFValue(10) : RFValue(5),
              alignItems: 'center',
              justifyContent: 'center',
              width: _isTab ? RFValue(40) : RFValue(30),
              height: _isTab ? RFValue(40) : RFValue(30),
            }}
          >
            <Icon
              name={'facebook'}
              type={'FontAwesome'}
              style={{
                color: light,
                fontSize: RFValue(14),
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: lightBlue,
              borderRadius: RFValue(20),
              padding: _isTab ? RFValue(10) : RFValue(5),
              alignItems: 'center',
              justifyContent: 'center',
              width: _isTab ? RFValue(40) : RFValue(30),
              height: _isTab ? RFValue(40) : RFValue(30),
            }}
          >
            <Icon
              name={'twitter'}
              type={'FontAwesome'}
              style={{
                color: light,
                fontSize: RFValue(14),
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PostDetailsShareLink;

const styles = StyleSheet.create({});
