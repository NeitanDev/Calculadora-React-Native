import React from 'react';
import {
  Text,
  View,
  StatusBar
} from 'react-native';
import * as Font from 'expo-font';
import Index from './src/index';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'BalooPaaji2-Regular': require('./assets/fonts/BalooPaaji2-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <>
      {
        //<StatusBar backgroundColor="#87c5b6"/>
      }
        {
          this.state.fontLoaded ? (
            <Index />
          ) : null
        }
      </>
    );
  }
}