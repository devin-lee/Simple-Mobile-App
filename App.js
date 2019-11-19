import React, { Component } from 'react';
import {
View,
StyleSheet,
Text,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';


import Menu from './components/menu';
import Summary from './components/summary';
import Welcome from './components/welcome';

export default class App extends Component<Props> {
  //console.disableYellowBox = true;
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key="root">
            <Scene  initial key="welcome" component = {Welcome} title='Welcome' navigationBarStyle={{ backgroundColor: '#a6192e'}} titleStyle={{color : 'white'}} />
            <Scene key="menu" component = {Menu} title='Menu' navigationBarStyle={{ backgroundColor: '#a6192e'}} titleStyle={{color : 'white'}}/>
            <Scene key="summary" component = {Summary} title='Summary' navigationBarStyle={{ backgroundColor: '#a6192e'}} titleStyle={{color : 'white'}}/>
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});
