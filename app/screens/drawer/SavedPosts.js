import React, { useCallback, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { blue } from '../../styles/color';
import _NavBar from '../../components/NavBar';
import _Quote from '../../components/Quote';
import _TopArticle from '../../components/TopArticles';
import _OtherArticles from '../../components/OtherArticles';
import { darkBlue, DarkContainer } from '../../utils/styledComponents';
import normzer from '../../utils/normalizer';
import { useSelector } from 'react-redux';
import { RemoveArticleAction } from '../../redux/actions';
import { connect } from 'react-redux';
import _Text from '../../components/Text';
import { RFValue } from 'react-native-responsive-fontsize';

const SavedPosts = (props) => {
  const { navigation } = props;
  const store = useSelector((state) => state);
  const { articles, savedArticles } = store;
  const _savedArticles = () => {
    let array = [];
    for (let i in articles) {
      for (let j in savedArticles) {
        if (articles[i].id === savedArticles[j].id) {
          array.push(articles[i]);
        }
      }
    }
    return array;
  };

  return (
    <>
      <_NavBar navigation={navigation} />
      <View style={{ flex: 1, backgroundColor: darkBlue }}>
        <ScrollView
          scrollEnabled={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
          bouncesZoom={false}
          scrollEventThrottle={16}
          contentContainerStyle={{ backgroundColor: darkBlue }}
          style={{ backgroundColor: darkBlue }}
        >
          <View
            style={{
              flex: 1,
              top: RFValue(70),
              backgroundColor: darkBlue,
              marginBottom: 70,
            }}
          >
            {_savedArticles().length > 0 ? (
              <_OtherArticles
                navigation={navigation}
                data={_savedArticles()}
                header={'Saved Articles...'}
                saved={true}
                type={'remove'}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  padding: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <_Text textStyle={{ flex: 1 }}>
                  Ooops!!! No article saved yet...
                </_Text>
              </View>
            )}
          </View>
        </ScrollView>
        {/*<_Footer />*/}
      </View>
    </>
  );
};

export default SavedPosts;

const styles = StyleSheet.create({});
