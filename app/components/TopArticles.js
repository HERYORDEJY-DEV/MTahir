import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import _TopArticleItem from './TopArticleItem';
import normzer from '../utils/normalizer';
import { _isTab, _screenWidth } from '../utils/dimension';
import _Text from './Text';
import { RFValue } from 'react-native-responsive-fontsize';

class _TopArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { navigation, data } = this.props;
    return (
      <View style={styles.container}>
        <_Text textType={'header1'} textStyle={{ fontSize: RFValue(20) }}>
          Top Articles
        </_Text>
        <FlatList
          numColumns={_isTab ? 2 : 1}
          data={data}
          renderItem={({ item, index }) => (
            <_TopArticleItem
              navigation={navigation}
              item={item}
              index={index}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

export default _TopArticle;

const styles = StyleSheet.create({
  container: { margin: 20 },
});
