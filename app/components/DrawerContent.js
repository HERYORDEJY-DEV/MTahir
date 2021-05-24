import React from 'react';
import { StyleSheet, StatusBar, View, TouchableOpacity } from 'react-native';
import { blue } from '../styles/color';
import _Text from './Text';
import { Icon } from 'native-base';
import normzer from '../utils/normalizer';
import { useNavigation } from '@react-navigation/native';

const _DrawerContent = ({ backgroundColor = blue, activeScreen = 'Home' }) => {
  const navigation = useNavigation();
  return (
    <>
      {/*<StatusBar backgroundColor={blue} barStyle={'light-content'} />*/}
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: backgroundColor }}>
          <View style={styles.home}>
            <TouchableOpacity
              style={{
                ...styles.drawerItemHomeBody,
                backgroundColor:
                  activeScreen === 'Home' ? '#eee' : backgroundColor,
              }}
              onPress={() => navigation.navigate('Home')}
            >
              <_Text
                text={'HOME'}
                color={activeScreen === 'Home' ? blue : '#fff'}
                style={{
                  ...styles.drawerItemName,
                }}
              />
              <Icon
                name={'home'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color: activeScreen === 'Home' ? blue : '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.top}>
            <TouchableOpacity
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'Men' ? '#eee' : backgroundColor,
              }}
              onPress={() => navigation.navigate('Men')}
            >
              <_Text
                text={'MEN'}
                color={activeScreen === 'Men' ? blue : '#fff'}
                style={styles.drawerItemName}
              />
              <Icon
                name={'plus'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color: activeScreen === 'Men' ? blue : '#fff',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'Women' ? '#eee' : backgroundColor,
              }}
              onPress={() => navigation.navigate('Women')}
            >
              <_Text
                text={'WOMEN'}
                color={activeScreen === 'Women' ? blue : '#fff'}
                style={styles.drawerItemName}
              />
              <Icon
                name={'plus'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color: activeScreen === 'Women' ? blue : '#fff',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'Kids' ? '#eee' : backgroundColor,
              }}
              onPress={() => navigation.navigate('Kids')}
            >
              <_Text
                text={'KIDS'}
                color={activeScreen === 'Kids' ? blue : '#fff'}
                style={styles.drawerItemName}
              />
              <Icon
                name={'plus'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color: activeScreen === 'Kids' ? blue : '#fff',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'Others' ? '#eee' : backgroundColor,
              }}
              onPress={() => navigation.navigate('Others')}
            >
              <_Text
                text={'OTHERS'}
                color={activeScreen === 'Others' ? blue : '#fff'}
                style={styles.drawerItemName}
              />
              <Icon
                name={'plus'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color: activeScreen === 'Others' ? blue : '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'Profile' ? '#eee' : backgroundColor,
              }}
              onPress={() => navigation.navigate('Profile')}
            >
              <_Text
                text={'PROFILE'}
                color={activeScreen === 'Profile' ? blue : '#fff'}
                style={styles.drawerItemName}
              />
              <Icon
                name={'user'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color: activeScreen === 'Profile' ? blue : '#fff',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'OfferZone' ? '#eee' : backgroundColor,
              }}
              onPress={() => navigation.navigate('OfferZone')}
            >
              <_Text
                // text={'GIFT CARDS'}
                text={'OFFER ZONE'}
                color={activeScreen === 'OfferZone' ? blue : '#fff'}
                style={styles.drawerItemName}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('OrderDetails')}
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'OrderDetails' ? '#eee' : backgroundColor,
              }}
            >
              <_Text
                text={'ORDER DETAILS'}
                color={activeScreen === 'OrderDetails' ? blue : '#fff'}
                style={styles.drawerItemName}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('WishList')}
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'More' ? '#eee' : backgroundColor,
              }}
            >
              <_Text
                text={'MORE'}
                color={activeScreen === 'More' ? blue : '#fff'}
                style={styles.drawerItemName}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.drawerItemBody,
                backgroundColor:
                  activeScreen === 'ContactUs' ? '#eee' : backgroundColor,
              }}
              onPress={() => navigation.navigate('ContactUs')}
            >
              <_Text
                text={'CONTACT US'}
                color={activeScreen === 'ContactUs' ? blue : '#fff'}
                style={styles.drawerItemName}
              />
              <Icon
                name={'mail'}
                type={'AntDesign'}
                style={{
                  ...styles.drawerItemIcon,
                  color: activeScreen === 'Profile' ? blue : '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.drawerItemBody}
              onPress={() => navigation.navigate('SignIn')}
            >
              <_Text
                text={'SIGN OUT'}
                color={'#fff'}
                style={styles.drawerItemName}
              />
              <Icon
                name={'logout'}
                type={'AntDesign'}
                style={styles.drawerItemIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default _DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    elevation: 2000,
    width: '100%',
  },
  home: {
    // backgroundColor: blue,
    // flex: 1,
    // paddingVertical: 10,
    paddingHorizontal: 20,
    paddingLeft: 20,

    borderBottomWidth: 0.4,
    borderBottomColor: '#fff',
  },
  top: {
    // backgroundColor: blue,
    // flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingLeft: 20,

    borderBottomWidth: 0.4,
    borderBottomColor: '#fff',
  },
  bottom: {
    // backgroundColor: blue,
    // flex: 1,
    paddingVertical: 10,
    paddingLeft: 20,

    paddingHorizontal: 20,
    borderBottomWidth: 0.4,
    borderBottomColor: '#fff',
  },
  drawerItemHomeBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginTop: 30,
  },
  drawerItemBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  drawerItemName: {},
  drawerItemIcon: { color: '#fff', fontSize: normzer(21), alignSelf: 'center' },
  footer: {
    // backgroundColor: blue,
    // flex: 1,
    paddingVertical: 10,
    paddingLeft: 20,

    paddingHorizontal: 20,
  },
});
