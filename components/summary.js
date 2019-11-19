import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class summary extends Component {

  constructor(props) {
    super(props);

    let params = this.props.navigation.state.params;
    this.state = {
      food_price : params.food_price,
      drink_price : params.drink_price,
      food_summary : params.food_parameter,
      drink_summary : params.drink_parameter,
      food_quantity : params.f_quantity,
      drink_quantity : params.d_quantity,
      food_cost : params.foodcost,
      drink_cost : params.drinkcost,
      gst_cost : params.gst,
      total_cost : params.totalcost
    };
  }
  render() {
    
    return(
      <View style={styles.container}>
      <Text style = {{fontSize: 20, marginTop: 30}}> Thank you for your order! </Text>
      <Text style = {{fontSize: 15, marginTop: 10}}>  Here's the summary for the orders you made. </Text>
      <Text style = {{fontSize: 15}}>    • {this.state.food_summary} : Quantity of {this.state.food_quantity}, at ${this.state.food_price} each.</Text>
      <Text style = {{fontSize: 15}}>    • {this.state.drink_summary} : Quantity of {this.state.drink_quantity}, at ${this.state.drink_price} each.</Text>
      <Text style = {{fontSize: 15, marginTop: 30}}>  The payment for your orders has been calculated. </Text>
      <Text style = {{fontSize: 15}}>    • Food Cost: ${this.state.food_cost}</Text>
      <Text style = {{fontSize: 15}}>    • Drink Cost: ${this.state.drink_cost}</Text>
      <Text style = {{fontSize: 15}}>    • GST 10%: ${this.state.gst_cost}</Text>
      <Text style = {{fontSize: 15}}>    • Final Cost: ${this.state.total_cost} </Text>
      <Text style = {{fontSize: 15, marginTop: 30}}>  Your order will be ready for pickup in 15 minutes! </Text>
      <Text style = {{fontSize: 12}}>  This application is developed by 46014160 (Boon Hao Lee) </Text>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
