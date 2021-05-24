/* eslint-disable react-native/no-inline-styles */
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
import { light, lightBlue, red400 } from '../styles/color';
import moment from 'moment';
import _Text from './Text';
import { SaveArticleAction, RemoveArticleAction } from '../redux/actions';
import { connect } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';
import { _isTab } from '../utils/dimension';

class _OtherArticleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  _checkSaved = () => {
    for (let i in this.props.savedArticles) {
      if (this.props.savedArticles[i].id === this.props.item.id) {
        return true;
      }
    }
  };

  render() {
    const {
      navigation,
      item,
      saveArticle,
      removeArticle,
      savedArticles,
      type = 'save',
      index,
    } = this.props;

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
                // flex: 1,
                margin: RFValue(20),
                justifyContent: 'center',
              }}
            >
              {item.category && <_Tag tags={item.category} />}
              <_MetaInfo
                date={moment().format('MMMM D, YYYY')}
                likes={item.claps}
              />
            </View>
          </ImageBackground>

          <View style={{ marginHorizontal: RFValue(20), marginVertical: 10 }}>
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
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            margin: RFValue(20), margin
          }}
        >
          <_Text
            textStyle={{
              fontFamily: 'Poppins-Italic',
              fontSize: _isTab ? RFValue(10) : RFValue(12),
            }}
          >
            {item.reading_time} min read
          </_Text>
          {type === 'remove' ? (
            <TouchableOpacity
              style={{
                backgroundColor: red400,
                paddingHorizontal: 10,
              }}
              onPress={() => removeArticle(savedArticles, item.id)}
              // onPress={() => console.log(this.props.savedArticles)}
            >
              <_Text
                textType={'tagText'}
                textStyle={{ fontSize: _isTab ? RFValue(10) : RFValue(12) }}
              >
                REMOVE
              </_Text>
            </TouchableOpacity>
          ) : this._checkSaved() ? (
            <TouchableOpacity
              style={{
                backgroundColor: '#999',
                paddingHorizontal: 10,
              }}
              disabled={true}
            >
              <_Text
                textType={'tagText'}
                textStyle={{ fontSize: _isTab ? RFValue(10) : RFValue(12) }}
              >
                SAVED
              </_Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: lightBlue,
                paddingHorizontal: 10,
              }}
              onPress={() => saveArticle(savedArticles, item.id)}
            >
              <_Text
                textType={'tagText'}
                textStyle={{ fontSize: _isTab ? RFValue(10) : RFValue(12) }}
              >
                SAVE
              </_Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  savedArticles: state.savedArticles,
});

const mapDispatchToProps = (dispatch) => {
  return {
    saveArticle: (articleList, articleID) =>
      dispatch(SaveArticleAction(articleList, { id: articleID })),

    removeArticle: (articleList, articleID) =>
      dispatch(RemoveArticleAction(articleList, articleID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(_OtherArticleItem);

const styles = StyleSheet.create({
  container: {
    marginBottom: RFValue(20),
    borderWidth: 1,
    borderColor: light,
    flex: 1,
  },
  imageBackground: { width: '100%', height: RFValue(150) },
});
