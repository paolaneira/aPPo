import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import uuidV4 from "uuid/v4";
import { colors } from "../theme";

export default class AddCity extends React.Component {
  state = {
    city: "",
    country: ""
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  submit = () => {};

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={val => this.onChangeText()}
        />
        <TextInput style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    margin: 10,
    paddingHorizontal: 8,
    height: 10
  },
  button: {},
  buttonText: {},
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "center"
  },
  heading: {}
});
