import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { colors } from "../theme";
import CenterMessage from "../components/CenterMessage";
import { KeyboardAvoidingView } from "react-native";

export default class City extends React.Component {
  static navigationOptions = props => {
    return {
      title: props.navigation.state.params.city.city,
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
  };

  state = {
    name: "",
    info: ""
  };

  addLocation = () => {
    console.log("ON ADD LOCATION");
    if (this.state.name === "" || this.state.info === "") return;
    const { city } = this.props.navigation.state.params;
    console.log("CITY", city);
    const location = {
      name: this.state.name,
      info: this.state.info
    };
    this.props.screenProps.addLocation(location, city);
    this.setState({
      name: "",
      info: ""
    });
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { city } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        {!city.locations.length && <CenterMessage message="No Locations" />}
        {city.locations.map((location, index) => (
          <View key={location.index} style={styles.locationContainer}>
            <Text style={styles.name}>{location.name}</Text>
            <Text style={styles.info}>{location.info}</Text>
          </View>
        ))}
        <KeyboardAvoidingView
          style={styles.container}
          behavior="position"
          enabled
        >
          <TextInput
            style={styles.input}
            placeholder="Location name"
            placeholderTextColor="white"
            value={this.state.name}
            onChangeText={val => this.onChangeText("name", val)}
          />
          <TextInput
            style={[styles.input, styles.input2]}
            placeholder="Location info"
            placeholderTextColor="white"
            value={this.state.info}
            onChangeText={val => this.onChangeText("info", val)}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.addLocation}>
              <View style={styles.button}>
                <Text style={styles.buttonText}> Add Location </Text>
              </View>
            </TouchableOpacity>
          </View>
          <TextInput />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  locationContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2
  },
  name: {
    fontSize: 20,
    color: "black"
  },
  info: {
    color: "black"
    // color: "rgba(0,0,0,.5)"
  },
  input: {
    position: "absolute",
    height: 50,
    backgroundColor: colors.primary,
    width: "100%",
    bottom: 104,
    // left: 0,
    color: "white"
  },
  input2: {
    bottom: 54
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%"
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 20
  }
});
