import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import normzer from '../../utils/normalizer';
import { Icon, Input } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { darkBlue, light, lightBlue } from '../../styles/color';
import _RelatedPostItem from '../../components/RelatedPostItem';
import _NavBar from '../../components/NavBar';
import _Text from '../../components/Text';
import { RFValue } from 'react-native-responsive-fontsize';

const Contact = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView
          scrollEnabled={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
          bouncesZoom={false}
          scrollEventThrottle={16}
        >
          <_Text textType={'header1'} textStyle={{ fontSize: RFValue(20) }}>
            Contact
          </_Text>
          <View style={{ flex: 1 }}>
            <View style={{ marginBottom: RFValue(20) }}>
              <_Text textType={'pText'} textStyle={{ fontSize: RFValue(14) }}>
                Name
              </_Text>
              <TextInput
                style={{
                  backgroundColor: light,
                  flex: 1,
                  fontSize: RFValue(14),
                  height: RFValue(40),
                }}
              />
            </View>
            <View style={{ marginBottom: RFValue(20) }}>
              <_Text textType={'pText'} textStyle={{ fontSize: RFValue(14) }}>
                Email
              </_Text>
              <TextInput
                style={{
                  backgroundColor: light,
                  flex: 1,
                  fontSize: RFValue(14),
                  height: RFValue(40),
                }}
              />
            </View>
            <View style={{ marginBottom: RFValue(20) }}>
              <_Text textType={'pText'} textStyle={{ fontSize: RFValue(14) }}>
                Message
              </_Text>
              <TextInput
                scrollEnabled={true}
                numberOfLines={50}
                multiline={true}
                style={{
                  backgroundColor: light,
                  flex: 1,
                  fontSize: RFValue(14),
                  height: RFValue(160),
                  padding: 0,
                  margin: 0,
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{ paddingVertical: RFValue(10), backgroundColor: lightBlue }}
          >
            <_Text textType={'tagText'} textStyle={{ fontSize: RFValue(14) }}>
              Send
            </_Text>
          </TouchableOpacity>
          <View style={{ marginVertical: RFValue(30) }}>
            <_Text textType={'header3'} textStyle={{ fontSize: RFValue(20) }}>
              Popular Articles
            </_Text>
            <_RelatedPostItem navigation={navigation} />
            <_RelatedPostItem navigation={navigation} />
            <_RelatedPostItem navigation={navigation} />
          </View>
        </ScrollView>
      </View>
      <_NavBar navigation={navigation} />
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: darkBlue,
    top: RFValue(70),
    marginBottom: 20,
  },
});
