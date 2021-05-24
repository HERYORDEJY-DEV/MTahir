import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import _OtherArticleItem from './OtherArticleItem';
import normzer from '../utils/normalizer';
import _Text from './Text';
import { RFValue } from 'react-native-responsive-fontsize';
import { _isTab } from '../utils/dimension';
import _TopArticleItem from './TopArticleItem';

class _OtherArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { navigation, data, header, saved, type } = this.props;
    return (
      <View style={styles.container}>
        <_Text textType={'header1'} textStyle={{ fontSize: RFValue(20) }}>
          {header ?? 'Other Articles'}
        </_Text>
        <FlatList
          contentContainerStyle={{ flex: 1 }}
          numColumns={_isTab ? 2 : 1}
          data={data}
          renderItem={({ item, index }) => (
            <_OtherArticleItem
              navigation={navigation}
              item={item}
              saved={saved}
              type={type}
              index={index}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

export default _OtherArticles;

const styles = StyleSheet.create({ container: { margin: 20 } });
