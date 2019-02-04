import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tabs from "./src";

export default class App extends React.Component {
  state = {
    cities: []
  };
  addCity = city => {
    const cities = this.state.cities;
    cities.push(city);
    this.setState({ cities });
  };

  addLocation = city => {
    const cities = this.state.cities;
  };

  render() {
    return (
      <Tabs
        screenProps={{
          cities: this.state.cities,
          addCity: this.addCity
        }}
      />
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
