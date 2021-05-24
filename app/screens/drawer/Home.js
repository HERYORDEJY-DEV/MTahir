import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Animated, Alert } from 'react-native';
import _Text from '../../components/Text';
import _NavBar from '../../components/NavBar';
import _Quote from '../../components/Quote';
import _TopArticle from '../../components/TopArticles';
import _OtherArticles from '../../components/OtherArticles';
import { darkBlue } from '../../styles/color';
import normzer from '../../utils/normalizer';
import { useSelector } from 'react-redux';
import { getAll } from '../../api/db';
import axios from 'axios';
import { RFValue } from 'react-native-responsive-fontsize';
// import { firebaseDB } from '../../firebase/config';

let isHidden = true;

const Home = (props) => {
  const { navigation } = props;
  const store = useSelector((state) => state);
  const { articles } = store;
  const _topArticles = () => {
    return articles.filter((article) => article.claps > 800);
  };
  const [state, setState] = useState({
    bounceValue: -3000,
  });

  const toggleIcon = () => {
    // this.setState({ ...this.state, showNav: !this.state.showNav });
    let toValue = 90;

    if (isHidden) {
      toValue = 0;
    }

    Animated.spring(state.bounceValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
      duration: 1000,
    }).start();
    isHidden = !isHidden;
  };

  // const callAPI = () => {
  //   fetch('http://localhost:3000/articles')
  //     .then((res) => res.text())
  //     .then((res) => setState({ ...state, apiResponse: res }));
  //   console.log(state.apiResponse);
  // };
  // const ss = () => {
  //   firebaseDB.ref('/title').on('value', (querySnapShot) => {
  //     let data = querySnapShot.val() ? querySnapShot.val() : {};
  //     let todoItems = { ...data };
  //     Alert.alert(JSON.stringify(todoItems));
  //   });
  // };
  // useEffect(() => {
  //   firebase.db().onSnapshot((snapshot) => {
  //     new Alert(alert, snapshot.docs());
  //     // console.log(snapshot.docs());
  //   });
  //   ss();
  //   // toggleIcon();
  //   // callAPI();
  // }, []);

  return (
    <View style={{ flex: 1 }}>
      <_NavBar navigation={navigation} toggleIcon={toggleIcon} />
      <View
        style={{
          flex: 1,
          top: RFValue(70),
          backgroundColor: darkBlue,
          marginBottom: RFValue(70),
          elevation: 1000,
        }}
      >
        <ScrollView
          scrollEnabled={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
          bouncesZoom={false}
          scrollEventThrottle={16}
          keyboardDismissMode={'interactive'}
          contentContainerStyle={{}}
        >
          <_Quote />
          <_TopArticle navigation={navigation} data={_topArticles()} />
          <_OtherArticles navigation={navigation} data={_topArticles()} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
