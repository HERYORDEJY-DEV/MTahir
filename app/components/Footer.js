import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  darkBlue,
  FooterText,
  Header3,
  Header4,
  LightContainer,
} from '../utils/styledComponents';
import { Icon } from 'native-base';
import normzer from '../utils/normalizer';

class _Footer extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <LightContainer style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: 15,
            marginTop: 15,
          }}
        >
          <TouchableOpacity style={{}}>
            <FooterText style={{}}>
              WhatsApp{' '}
              <Icon
                name={'whatsapp'}
                type={'FontAwesome'}
                style={{ color: darkBlue, fontSize: normzer(19) }}
              />
            </FooterText>
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <FooterText style={{}}>
              Twitter{' '}
              <Icon
                name={'twitter'}
                type={'FontAwesome'}
                style={{ color: darkBlue, fontSize: normzer(19) }}
              />
            </FooterText>
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <FooterText style={{}}>
              Facebook{' '}
              <Icon
                name={'facebook'}
                type={'FontAwesome'}
                style={{ color: darkBlue, fontSize: normzer(19) }}
              />
            </FooterText>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}
        >
          <TouchableOpacity style={{}}>
            <FooterText style={{}}>
              Instagram{' '}
              <Icon
                name={'instagram'}
                type={'FontAwesome'}
                style={{ color: darkBlue, fontSize: normzer(19) }}
              />
            </FooterText>
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <FooterText style={{}}>
              Google{' '}
              <Icon
                name={'google'}
                type={'FontAwesome'}
                style={{ color: darkBlue, fontSize: normzer(19) }}
              />
            </FooterText>
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <FooterText style={{}}>
              YouTube{' '}
              <Icon
                name={'youtube'}
                type={'FontAwesome'}
                style={{ color: darkBlue, fontSize: normzer(19) }}
              />
            </FooterText>
          </TouchableOpacity>
        </View>
      </LightContainer>
    );
  }
}

export default _Footer;

const styles = StyleSheet.create({});
