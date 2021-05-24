/* @flow weak */

import _NavBar from './components/NavBar';

const { connectToDevTools } = require('react-devtools-core');
const config = { host: 'localhost', port: 8081 };
connectToDevTools(config);
//
import React from 'react';
import { ScrollView, StatusBar, View, Text, Alert } from 'react-native';
import axios from 'axios';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
//
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store } from './redux/store';
import { persistor } from './redux/store';
import StackNavigation from './navigation/StackNavigation';
import { light } from './utils/styledComponents';
//

let customFonts = {
  'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
  'Poppins-Bold-Italic': require('./assets/fonts/Poppins-BoldItalic.ttf'),
  'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
  'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
  'Poppins-Thin-Italic': require('./assets/fonts/Poppins-ThinItalic.ttf'),
};

let fontFamily = 'Poppins';

SplashScreen.preventAutoHideAsync()
  .then((result) => {})
  .catch(console.warn);

export default class EntryPoint extends React.Component {
  constructor(props) {
    super(props);
    this._drawer = React.createRef();
    this.state = {
      openDrawer: false,
      fontLoaded: false,
      customTextProps: {
        style: {
          fontFamily: 'Poppins-Regular',
        },
      },
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    await setCustomText(this.state.customTextProps);
    await setCustomTextInput(this.state.customTextProps);
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    console.disableYellowBox = true;
    this.getArticles();
  }

  getArticles = () => {
    axios
      .get('/articles')
      .then((res) => new Alert(alert, res.data))
      .catch((err) => new Alert(alert, err));
  };

  openDrawer = () => {
    this.setState({ ...this.state, openDrawer: true });
  };

  render() {
    const customTextProps = {
      style: {
        fontFamily: 'Product-Regular',
      },
    };
    if (this.state.fontLoaded) {
      return (
        <>
          <StatusBar backgroundColor={light} barStyle={'dark-content'} />
          <Provider store={store}>
            <PersistGate loading={false} persistor={persistor}>
              <NavigationContainer>
                <StackNavigation />
              </NavigationContainer>
            </PersistGate>
          </Provider>
        </>
      );
    } else {
      return <AppLoading />;
    }
  }
}
