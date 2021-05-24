import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { light } from '../styles/color';
import normzer from '../utils/normalizer';
import _Text from './Text';
import { RFValue } from 'react-native-responsive-fontsize';

class _RelatedPostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { navigation } = this.props;
    const _text =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptatem!ipsum dolor sit amet, consectetur adipisicing elit. Quos, voluptatem!';
    return (
      <View style={styles.container}>
        <TouchableOpacity
          // onPress={() => navigation.navigate('PostDetails', { itemID: item.id })}
          style={{
            flexDirection: 'row',
            // flexWrap: 'wrap',
            flex: 1,
            borderWidth: 1,
            borderColor: light,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: RFValue(10),
          }}
        >
          <View
            style={{
              height: RFValue(100),
              width: RFValue(150),
            }}
          >
            <Image
              resizeMode={'cover'}
              source={require('../assets/images/img_7.jpg')}
              style={{ width: null, flex: 1, resizeMode: 'cover' }}
            />
          </View>
          <View
            style={{
              flexWrap: 'wrap',
              width: '100%',
              flex: 1,
              paddingHorizontal: RFValue(5),
            }}
          >
            <_Text
              numberOfLines={4}
              textType={'pText'}
              textStyle={{
                width: '100%',
                flexShrink: 1,
                fontSize: RFValue(14),
              }}
            >
              {_text}
            </_Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default _RelatedPostItem;

const styles = StyleSheet.create({ container: { flex: 1 } });
