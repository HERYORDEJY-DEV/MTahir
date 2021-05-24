import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import normzer from '../utils/normalizer';
import _Text from './Text';
import { red600 } from '../styles/color';

const _Input = ({
  _styles,
  showPlaceholder = true,
  placeholder = 'Placeholder',
  placeholderTextColor = 'rgba(255, 255, 255, 0.3)',
  inputStyle,
  inputContainerStyle,
  value,
  keyboardType,
  onChangeText,
  defaultValue,
  touched,
  error,
  ...props
}) => {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <View style={{ ...styles.container, ..._styles }}>
      <_Text
        text={touched && error}
        fontSize={15}
        color={red600}
        styles={{ marginLeft: 10 }}
      />

      <Input
        {...props}
        placeholder={showPlaceholder ? placeholder : null}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        // defaultValue={defaultValue}
        // label={showLabel ? placeholder : null}
        // labelStyle={{
        //   color: placeholderTextColor,
        //   fontSize: normzer(22),
        //   fontFamily: 'Product-Regular',
        //   fontWeight: '100',
        //   paddingLeft: 5,
        // }}
        caretHidden={false}
        inputStyle={{ color: '#fff', fontSize: normzer(22), ...inputStyle }}
        inputContainerStyle={{
          backgroundColor: 'transparent',
          borderBottomWidth: 0.5,
          borderColor: 'white',
          ...inputContainerStyle,
        }}
        // value={value}
      />
    </View>
  );
};

export default _Input;

const styles = StyleSheet.create({
  container: {},
  input: { flex: 1 },
});
