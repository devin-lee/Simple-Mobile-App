import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Dropdown } from 'react-native-material-dropdown';
import { Actions } from 'react-native-router-flux';

export default class home extends Component {

  constructor(props){
    super(props);

    this.state = {
      business : ''
    };

    this.business = [
    {value: 'Boost Juice'},
    {value: 'Iku Wholefood'},
    {value: 'Sushi World'},
    {value: 'Doner Kebab'},
    {value: "Lee's Asian Food"}
    ];

  }

  render() {
    return (
      <View style={styles.container}>
      <Text style = {{fontSize: 20, marginTop: 30}}> Welcome to Campus Common System! </Text>
      <Text style = {{fontSize: 15}}> Please select your preferred business. </Text>
        <View style={styles.viewRow1}>
                <Dropdown
                    containerStyle={styles.dropdown1}
                    label='Choose the place of business'
                    data = {this.business}
                    onChangeText={(chosenBusiness) => this.setState({
                      business : chosenBusiness
                      })}
                      />
        </View>
        <View style={styles.viewRow2}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPressEvent.bind(this)}>
                    <Text style={styles.buttonText}>
                      Proceed
                    </Text>
                </TouchableOpacity>
        </View>
      </View>
    );
  }

  onPressEvent(){
    Actions.menu({
      business_parameter : this.state.business
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewRow1:{
    flex:1,
  },
  viewRow2:{
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  dropdown1: {
    marginTop: 50,
  },
  button:{
      backgroundColor:'#a6192e',
      height: 45,
      width: 140,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      borderRadius:10,
      borderWidth: 1,
  },
  buttonText:{
    textAlign: 'center',
    fontSize: 20,
    color : 'white'
  }
});
