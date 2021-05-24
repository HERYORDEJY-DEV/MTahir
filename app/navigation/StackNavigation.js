import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/drawer/Home';
import PostDetails from '../screens/stack/PostDetails';
import Contact from '../screens/drawer/Contact';
import Profile from '../screens/stack/Profile';
import SavedPosts from '../screens/drawer/SavedPosts';

const StackNavigator = createStackNavigator();

const StackNavigation = () => {
  return (
    <StackNavigator.Navigator initialRouteName={'Home'}>
      <StackNavigator.Screen
        name={'Home'}
        component={Home}
        options={{ header: (props) => null }}
      />
     <StackNavigator.Screen
        name={'PostDetails'}
        component={PostDetails}
        options={{ header: (props) => null }}
      />
      <StackNavigator.Screen
        name={'Profile'}
        component={Profile}
        options={{ header: (props) => null }}
      />
      <StackNavigator.Screen
        name={'SavedPosts'}
        component={SavedPosts}
        options={{ header: (props) => null }}
      />
      <StackNavigator.Screen
        name={'Contact'}
        component={Contact}
        options={{ header: (props) => null }}
      />
    </StackNavigator.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
