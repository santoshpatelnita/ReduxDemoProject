import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  renderLoginForm = () => {
    return (
      <View>
        <View style={styles.cotainer}>
          <Text style={styles.headeText}>set/get Data in Redux</Text>
        </View>
        <Text style={styles.emailText}>Email</Text>
        <View style={styles.inputBox}>
          <TextInput placeholder="Enter Email" style={styles.inputBoxText} />
        </View>

        <Text style={styles.nameContainer}>Name</Text>
        <View style={styles.inputBox}>
          <TextInput placeholder="Enter Name" style={styles.inputBoxText} />
        </View>

        <Text style={styles.nameContainer}>Password</Text>
        <View style={styles.inputBox}>
          <TextInput placeholder="Enter password" style={styles.inputBoxText} />
        </View>

        <TouchableOpacity style={styles.buttonView}>
          <Text style={{color:'#FFF', fontWeight: '700', fontSize: 15}}>Save Data</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return <View>{renderLoginForm()}</View>;
};

const styles = StyleSheet.create({
  cotainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  headeText: {
    fontWeight: "800",
    fontSize: 18,
  },

  emailText: {
    marginLeft: 20,
    marginTop: 60,
    fontWeight: 600,
    fontSize: 15,
  },

  inputBoxText: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 20,
  },

  nameContainer: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 15,
  },

  inputBox: {
    width: 350,
    height: 43,
    borderRadius: 18,
    borderColor: "#000",
    borderWidth: 1,
    marginTop: 20,
    alignSelf: "center",
  },

  buttonView: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 110,
    height: 54,
    backgroundColor: "#3461eb",
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 40,
  },
});

export default LoginScreen;
