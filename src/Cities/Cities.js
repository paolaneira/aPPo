import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { colors } from "../theme";

export default class Cities extends React.Component {
  static navigationOptions = {
    title: "Cities",
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTitleStyle: {
      fontWeight: "bold",
      color: "white",
      fontSize: 20,
      fontWeight: "400"
    }
  };
  viewCity = city => {
    this.props.navigation.navigate("City", { city });
  };

  render() {
    const cities = this.props.screenProps.cities;
    return (
      <ScrollView>
        <View>
          {cities.map((city, index) => (
            <View>
              <TouchableWithoutFeedback onPress={() => this.viewCity(city)}>
                <View style={styles.cityContainer}>
                  <Text style={styles.city}>{city.city}</Text>
                  <Text style={styles.country}>{city.country}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cityContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  city: {
    fontSize: 20
  },
  country: {
    color: "rgba(0,0,0,.5)"
  }
});
