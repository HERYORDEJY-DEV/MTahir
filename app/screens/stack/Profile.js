import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { darkBlue } from '../../styles/color';
import normzer from '../../utils/normalizer';
import _ProfileCard from '../../components/ProfileCard';
import _OtherArticleItem from '../../components/OtherArticleItem';
import _NavBar from '../../components/NavBar';
import { useSelector } from 'react-redux';
import _Text from '../../components/Text';
import { RFValue } from 'react-native-responsive-fontsize';

const Profile = (props) => {
  const {
    navigation,
    route: {
      params: { authorID, author },
    },
  } = props;
  const store = useSelector((state) => state);
  const { articles } = store;
  const _authorArticles = () => {
    let array = [];
    for (let i in articles) {
      if (articles[i].authorID === authorID) {
        array.push(articles[i]);
      }
    }
    return array;
  };
  return (
    <View style={{ flex: 1 }}>
      <_NavBar navigation={navigation} />
      <ScrollView
        scrollEnabled={true}
        bounces={false}
        showsVerticalScrollIndicator={false}
        bouncesZoom={false}
        scrollEventThrottle={16}
      >
        <View style={styles.container}>
          <_ProfileCard
            name={author}
            bio={'Engineer, Finance mentor, Lover of food...foodie'}
            // facebook={}
            // twitter={}
            // whatsapp={}
          />
          <View>
            <_Text textType={'header2'} textStyle={{ fontSize: RFValue(28) }}>
              Author's Articles
            </_Text>
            <_OtherArticleItem navigation={navigation} item={articles[0]} />
            <_OtherArticleItem navigation={navigation} item={articles[1]} />
            <_OtherArticleItem navigation={navigation} item={articles[2]} />
            <_OtherArticleItem navigation={navigation} item={articles[3]} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: RFValue(20),
    backgroundColor: darkBlue,
    top: RFValue(70),
    marginBottom: RFValue(70),
  },
});
