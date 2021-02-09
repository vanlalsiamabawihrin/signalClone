import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Button, Input, Text } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  // Register user using firebase
  // key such as displayName, photoURL are from firebase. cannot be altered
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        });
      })
      .catch((error) => alert(error.message));
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  //  use to rename header titles
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Login",
    });
  }, [navigation]);
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          value={name}
          onChangeText={(text) => setName(text)}
          autoFocus
          type="text"
          placeholder="Full Name"
        />
        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          type="email"
          placeholder="Email"
        />
        <Input
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          type="password"
          placeholder="Password"
        />
        <Input
          value={imageUrl}
          onChangeText={setImageUrl}
          type="iamge"
          placeholder="Profile Picture Url (optional)"
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title="Register"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 400,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
