import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { SceneView } from "react-navigation";
import { Button } from "react-native-elements";
import { ProfileScreen } from "./index";

class Screen extends Component {
  state = {
    name: "",
    email: "",
    feedback: "",
  };

  handleSubmit = () => {
    console.log("here");
    this.props.navigation.navigate("Profile", this.state);
  };

  manageScreens = (screenName) => {
    if (screenName === "Form") {
      return (
        <View style={styles.form}>
          <Text style={styles.heading}>Customer Feedback</Text>
          <TextInput
            style={styles.textBox}
            placeholder="Enter Name"
            value={this.state.name}
            onChangeText={(text) => this.setState({ name: text })}
          />
          <TextInput
            style={styles.textBox}
            placeholder="Enter Email"
            value={this.state.email}
            onChangeText={(text) => this.setState({ email: text })}
          />
          <TextInput
            style={styles.textarea}
            multiline={true}
            numberOfLines={10}
            placeholder="Enter Feedback"
            value={this.state.feedback}
            onChangeText={(text) => this.setState({ feedback: text })}
          />
          <Button onPress={this.handleSubmit} title="Submit Feedback" />
        </View>
      );
    }
    if (screenName === "Profile") {
      const { params } = this.props.navigation.state;
      console.log(params);
      return (
        <View style={styles.form}>
          <Text style={styles.heading}>Feedback Details</Text>

          <Text style={styles.detail}>
            <View style={styles.boldText}>Name:</View> {params.name}
          </Text>
          <Text style={styles.detail}>
            <View style={styles.boldText}>Email:</View> {params.email}
          </Text>
          <Text style={styles.detail}>
            <View style={styles.boldText}>Feedback:</View> {params.feedback}
          </Text>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", margin: 16 }}
            onPress={this.props.navigation.openDrawer}
          >
            <FontAwesome5 name="bars" size={24} color="#161924" />
          </TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {this.manageScreens(this.props.name)}
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    marginTop: 40,
  },
  heading: {
    fontSize: 27,
    fontWeight: "500",
    marginBottom: 20,
    borderBottomColor: "#3333",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  textBox: {
    height: 40,
    width: 300,
    borderColor: "#3333",
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
  },
  textarea: {
    width: 300,
    borderColor: "#3333",
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
    multiline: true,
    numberOfLines: 4,
  },
  boldText: {
    fontWeight: "bold",
  },
  detail: {
    height: 40,
    width: 300,
    // borderBottomColor: "#3333",
    // borderBottomWidth: 1,
    padding: 20,
    marginBottom: 20,
  },
});

export default Screen;
