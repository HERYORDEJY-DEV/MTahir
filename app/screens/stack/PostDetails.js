import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { darkBlue, light, lightBlue } from '../../styles/color';
import normzer from '../../utils/normalizer';
import _Tag from '../../components/Tag';
import { Icon } from 'native-base';
import _RelatedPostItem from '../../components/RelatedPostItem';
import _NavBar from '../../components/NavBar';
import _Text from '../../components/Text';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { _isTab } from '../../utils/dimension';
import PostDetailsShareLink from '../../components/PostDetailsShareLink';

const PostDetails = ({ navigation, ...props }) => {
  const {
    route: {
      params: { itemID },
    },
  } = props;
  // const navigation = useNavigation();
  const store = useSelector((state) => state);
  const { articles } = store;
  const [state, setState] = useState({
    article: articles.filter((article) => article.id === itemID)[0],
    paragraphs: articles
      .filter((article) => article.id === itemID)[0]
      .text.split('\n'),
  });
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        scrollEnabled={true}
        bounces={false}
        showsVerticalScrollIndicator={false}
        bouncesZoom={false}
        scrollEventThrottle={16}
      >
        <View style={styles.container}>
          <_Text
            textType={'header2'}
            textStyle={{ fontFamily: 'Poppins-Bold', fontSize: RFValue(20) }}
          >
            {state.article.title}
          </_Text>
          <View style={{ height: RFValue(250), width: '100%' }}>
            <Image
              source={require('../../assets/images/img_2.jpg')}
              style={{ width: null, flex: 1 }}
            />
          </View>
          <View style={{ marginTop: RFValue(10) }}>
            {state.article.category && <_Tag tags={state.article.category} />}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginTop: RFValue(10),
            }}
          >
            <_Text
              textStyle={{
                fontFamily: 'Poppins-Italic',
                fontSize: RFValue(12),
              }}
            >
              {state.article.reading_time} mins read
            </_Text>
            <_Text textStyle={{ fontSize: RFValue(12) }}>
              {moment().format('MMMM D, YYYY')}
            </_Text>
          </View>
          <View
            style={{ borderBottomColor: lightBlue, borderBottomWidth: 2 }}
          />
          {/*Post content*/}
          <View style={styles.postContent}>
            {state.paragraphs.map((p) => (
              <View style={{ flex: 1 }}>
                <_Text textStyle={styles.postContentParagraph}>{p}</_Text>
              </View>
            ))}
          </View>
          <View style={{ marginTop: RFValue(0) }}>
            {state.article.category && <_Tag tags={state.article.category} />}
          </View>

          {/*Likes, Comments, Read --- Social Share Link*/}
          <PostDetailsShareLink claps={state.article.claps} />
          <View style={{ marginVertical: RFValue(50) }}>
            <_Text textType={'header3'} textStyle={{ fontSize: RFValue(20) }}>
              Related Posts
            </_Text>
            <_RelatedPostItem navigation={navigation} />
            <_RelatedPostItem navigation={navigation} />
            <_RelatedPostItem navigation={navigation} />
          </View>
        </View>
      </ScrollView>
      <_NavBar navigation={navigation} />
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    padding: RFValue(20),
    backgroundColor: darkBlue,
    flex: 1,
    marginBottom: RFValue(20),
    top: RFValue(70),
  },
  postContent: { marginVertical: RFValue(10) },
  postContentParagraph: {
    marginBottom: RFValue(15),
    fontSize: _isTab ? RFValue(14) : RFValue(16),
  },
});
