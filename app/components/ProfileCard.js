import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { light } from '../styles/color';
import normzer from '../utils/normalizer';
import { Icon } from 'native-base';
import _Text from './Text';
import { RFValue } from 'react-native-responsive-fontsize';

class _ProfileCard extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { name, bio, facebook, twitter, whatsapp } = this.props;
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: light,
          padding: RFValue(10),
          marginBottom: RFValue(30),
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            // alignItems: 'flex-start',
            // flex: 1,
          }}
        >
          <View>
            <View
              style={{
                height: RFValue(110),
                width: RFValue(110),
              }}
            >
              <Image
                source={require('../assets/images/mtahirAvater.jpg')}
                style={{ width: null, flex: 1, borderRadius: RFValue(500) }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <TouchableOpacity
                style={{ padding: RFValue(10), paddingLeft: 0 }}
              >
                <Icon
                  name={'facebook'}
                  type={'FontAwesome'}
                  style={{ color: light }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: RFValue(10) }}>
                <Icon
                  name={'twitter'}
                  type={'FontAwesome'}
                  style={{ color: light }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ padding: RFValue(10), paddingRight: 0 }}
              >
                <Icon
                  name={'whatsapp'}
                  type={'FontAwesome'}
                  style={{ color: light }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingHorizontal: RFValue(20), flex: 1 }}>
            <_Text
              style={{ margin: 0, padding: 0 }}
              fontSize={25}
              textType={'bold'}
            >
              {name ?? 'Muhammad Tahir'}
            </_Text>
            <_Text textStyle={{ fontSize: RFValue(18), margin: 0, padding: 0 }}>
              {bio ??
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}
            </_Text>
          </View>
        </View>
      </View>
    );
  }
}

export default _ProfileCard;

const styles = StyleSheet.create({});
