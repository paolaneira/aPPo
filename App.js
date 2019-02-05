import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import Tabs from "./src";

const key = "cities";

export default class App extends React.Component {
  state = {
    cities: []
  };

  async componentDidMount() {
    try {
      console.log("IN COMP DDI MOUNT", this.state);
      const storedCities = await AsyncStorage.getItem(key);
      const cities = !storedCities ? [] : JSON.parse(storedCities);
      console.log("AFTER CALLING from async storage", this.state);
      this.setState({ cities });
    } catch (e) {
      console.log("error", e);
    }
  }
  addCity = city => {
    console.log("INSIDE addcity", this.state, city);
    const cities = this.state.cities;
    console.log("INSIDE addcity x2", this.state);
    cities.push(city);
    AsyncStorage.setItem(key, JSON.stringify(cities))
      .then(() => console.log("Item stored"))
      .catch(err => {
        console.log("error", err);
      });
    this.setState({ cities });
  };

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex(item => {
      return item.id === city.id;
    });
    const chosenCity = this.state.cities[index];
    chosenCity.locations.push(location);
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1)
    ];
    this.setState({ cities }, () => {
      AsyncStorage.setItem(key, JSON.stringify(cities))
        .then(() => console.log("Item stored"))
        .catch(err => {
          console.log("error", err);
        });
    });
  };

  render() {
    return (
      <Tabs
        screenProps={{
          cities: this.state.cities,
          addCity: this.addCity,
          addLocation: this.addLocation
        }}
      />
    );
  }
}
