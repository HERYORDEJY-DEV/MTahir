import React, { Children } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { normalizer } from '../utils/fontSetup';
import normzer from '../utils/normalizer';
import { RFValue } from 'react-native-responsive-fontsize';

export default function _Text({
  children,
  textType = 'regular',
  textStyle,
  text,
  fontSize = 18,
  color = '#fff',
  ...props
}) {
  return (
    <Text
      {...props}
      style={[
        { ...style[textType] },
        // { fontSize: fontSize ? RFValue(fontSize) : null },
        { fontSize: RFValue(fontSize), color: color, ...textStyle },
      ]}
    >
      {children}
    </Text>
  );
}
export const styleJoiner = (...args) => StyleSheet.flatten(args);
const style = StyleSheet.create({
  regular: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(20),
    color: '#fff',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(20),
    color: '#fff',
  },
  header1: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(30),
    color: '#fff',
  },
  header2: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(28),
    color: '#fff',
  },
  header3: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(26),
    color: '#fff',
  },
  header4: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(24),
    color: '#fff',
  },
  italic: {
    fontFamily: 'Poppins-Italic',
    fontSize: RFValue(20),
    color: '#fff',
  },
  boldItalic: {
    fontFamily: 'Poppins-Bold-Italic',
    fontSize: RFValue(20),
    color: '#fff',
  },
  thin: {
    fontFamily: 'Poppins-Thin',
    fontSize: RFValue(20),
    color: '#fff',
  },
  thinItalic: {
    fontFamily: 'Poppins-Thin-Italic',
    fontSize: RFValue(20),
    color: '#fff',
  },
  black: {
    fontFamily: 'Poppins-Black',
    fontSize: RFValue(20),
    color: '#fff',
  },
  tagText: {
    fontSize: normalizer(15),
    fontFamily: 'Poppins-Regular',
    color: '#d8dfe2',
    textAlign: 'center',
    textTransform: 'uppercase',
    // backgroundColor: '#17a2b8',
    paddingLeft: RFValue(5),
    paddingRight: RFValue(5),
    letterSpacing: RFValue(1.5),
  },
  metaInfo: {
    fontSize: normalizer(18),
    fontFamily: 'Poppins-Bold',
    color: '#d8dfe2',
  },
  metaInfoItalic: {
    fontSize: normalizer(18),
    fontFamily: 'Poppins-Italic',
    color: '#d8dfe2',
  },
  pText: {
    fontSize: normalizer(20),
    fontFamily: 'Poppins-Regular',
    color: '#d8dfe2',
  },
  quoteText: {
    fontSize: normalizer(22),
    color: '#d8dfe2',
    lineHeight: RFValue(40),
  },
  quoteAuthor: {
    fontSize: normalizer(19),
    color: '#d8dfe2',
    fontFamily: 'Poppins-Italic',
    textAlign: 'center',
  },
});
