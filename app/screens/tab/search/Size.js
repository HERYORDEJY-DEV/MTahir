import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { ActivityIndicator } from 'react-native-paper';
import { _lightGreen, blue } from '../../../styles/color';
import { wearSize } from '../../../api/wearsList';
import * as Colors from 'react-native-paper/src/styles/colors';

export default function Size() {
  const [state, setState] = useState({
    selectedBrand: '',
  });
  return (
    <View>
      <View style={{ elevation: 100 }}>
        <FlatList
          scrollEventThrottle={16}
          horizontal={false}
          bounces={false}
          bouncesZoom={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            // marginVertical: 50,
            marginTop: 20,
            marginBottom: 20,
            elevation: 10000,
            marginLeft: 10,
            paddingBottom: 50,
          }}
          // ListFooterComponent={
          //   <View>
          //     <ActivityIndicator color={blue} size={'large'} />
          //   </View>
          // }
          comp
          onEndReachedThreshold={0.7}
          data={wearSize}
          renderItem={({ item }, index) => (
            <TouchableOpacity
              onPress={() => setState({ ...state, selectedBrand: item.name })}
              style={{
                // marginRight: index === 0 ? 5 : 0,
                marginRight: 10,
                borderWidth: 1,
                borderColor: '#ccc',
                marginBottom: 10,
                backgroundColor: 'transparent',
                paddingVertical: 10,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Icon
                style={{
                  color:
                    state.selectedBrand === item.name ? _lightGreen : '#fff',
                  // fontSize: responsiveFontSize(3.4),
                  alignSelf: 'center',
                }}
                name={
                  state.selectedBrand === item.name
                    ? 'check-square'
                    : 'square-o'
                } //check-square, check, square-o
                type={'FontAwesome'}
              />
              <Text
                style={{
                  fontSize: responsiveFontSize(3),
                  fontWeight: '500',
                  letterSpacing: 1,
                  color: '#fff',
                  marginHorizontal: 20,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}
