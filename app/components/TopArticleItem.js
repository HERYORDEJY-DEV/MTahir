import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import normzer from '../utils/normalizer';
import _Tag from './Tag';
import _MetaInfo from './MetaInfo';
import { light } from '../styles/color';
import moment from 'moment';
import _Text from './Text';
import { RFValue } from 'react-native-responsive-fontsize';
import { _isTab } from '../utils/dimension';

class _TopArticleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  componentDidMount() {}

  render() {
    const { navigation, item, index } = this.props;
    const ttext =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad doloremque laboriosam modi reprehenderit voluptates? Culpa dolorem earum est facere vitae? Aspernatur at consectetur culpa cumque distinctio, ea eaque eius expedita id inventore iste magni, mollitia non odio officia possimus praesentium quos saepe, sequi unde. Ab aliquid, aperiam architecto at atque beatae debitis delectus deleniti dicta doloremque dolorum explicabo itaque, laborum laudantium magnam modi mollitia neque quam quidem quo rem sequi sit. Asperiores enim impedit perspiciatis placeat porro quo, sed tenetur. Asperiores beatae, consequuntur, corporis distinctio dolorum earum et incidunt iste labore numquam omnis quasi qui repellendus ut vel vero voluptatum.';
    return (
      <View
        style={[
          styles.container,
          {
            marginRight: _isTab && index % 2 === 0 ? RFValue(20) : RFValue(0.4),
          },
        ]}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PostDetails', { itemID: item.id })
          }
        >
          <ImageBackground
            source={require('../assets/images/img_5.jpg')}
            style={styles.imageBackground}
          >
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: '#00000080',
              }}
            />
            <View
              style={{
                position: 'relative',
                flex: 1,
                margin: RFValue(20),
                justifyContent: 'center',
              }}
            >
              {item.category && <_Tag tags={item.category} />}
              <_MetaInfo
                date={moment().format('MMMM D, YYYY')}
                likes={item.claps}
              />
              <_Text
                numberOfLines={3}
                textType={'header3'}
                textStyle={{
                  color: '#fff',
                  fontFamily: 'Poppins-Regular',
                  fontSize: _isTab ? RFValue(16) : RFValue(20),
                  // marginHorizontal: 20,
                }}
              >
                {/*{ttext.substring(0, 85)}...*/}
                {item.title.toString().length > 85
                  ? item.title.toString().substring(0, 85) + `...`
                  : item.title.toString()}
              </_Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

export default _TopArticleItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: RFValue(20),
    borderWidth: 1,
    borderColor: light,
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: _isTab ? RFValue(280) : RFValue(250),
  },
});
