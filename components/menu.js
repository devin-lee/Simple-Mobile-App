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

    let params = this.props.navigation.state.params;
    this.state = {
      businessValue: params.business_parameter,
      food : '',
      drink : '',
      f_qty : '',
      d_qty : ''
      };

    this.food = [
    {value : 'Fried Rice - $9.00'},
    {value : 'Edible Food - $9.00'},
    {value : 'Curry Sushi - $8.00'},
    {value : 'Asian Delicacies - $5.00'},
    {value : 'Extra Kebab - $6.00'}];

    this.drink = [
    {value : 'Literal Plain Water - $1.00'},
    {value : 'Coca Cola - $2.00'},
    {value : 'Apple Juice - $1.00'},
    {value : 'Tea - $2.00'},
    {value : 'Coffee - $3.00'}];

    this.qty = [
    {value : 1},
    {value : 2},
    {value : 3},
    {value : 4},
    {value : 5}];
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style = {{fontSize: 20, marginTop: 30}}> Welcome to {this.state.businessValue}! </Text>
      <Text style = {{fontSize: 15}}> Please select your order. </Text>
        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Food Item'
                      data = {this.food}
                      onChangeText={(chosenFood) => this.setState({
                        food : chosenFood
                        })}
                        />
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Choose quantity'
                      data = {this.qty}
                      onChangeText={(chosenQty) => this.setState({
                        f_qty : chosenQty
                        })}
                        />
        </View>

        <View style={styles.viewRow2}>
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Drinks'
                      data = {this.drink}
                      onChangeText={(chosenDrink) => this.setState({
                        drink : chosenDrink
                        })}
                        />
                <Dropdown
                      containerStyle={styles.dropdown2}
                      label='Choose quantity'
                      data = {this.qty}
                      onChangeText={(chosenQty) => this.setState({
                        d_qty : chosenQty
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
      let foodcost = Number(this.state.f_qty * this.state.food.split('$')[1]).toFixed(2)
      let drinkcost = Number(this.state.d_qty * this.state.drink.split('$')[1]).toFixed(2)
      let gst = (foodcost*0.1 + drinkcost*0.1).toFixed(2)
      let totalcost = Number(Number(foodcost) + Number(drinkcost) + Number(gst)).toFixed(2)
      Actions.summary({
        food_parameter : this.state.food.split(' -')[0],
        drink_parameter : this.state.drink.split(' -')[0],
        food_price : this.state.food.split('$')[1],
        drink_price : this.state.drink.split('$')[1],
        f_quantity : this.state.f_qty,
        d_quantity : this.state.d_qty,
        foodcost : foodcost,
        drinkcost: drinkcost,
        gst: gst,
        totalcost: totalcost
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewRow2:{
    flex:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  viewRow3:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  dropdown1: {
    marginTop: 30,
  },
  dropdown2:{
    flex: 1,
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
